const trace = () => {
    let error = new Error();
    let stack = error.stack;
    stack = stack.split("\n");
    return stack.filter(line => !line.includes("/src/bundle.js"));
}

const sha256 = async (d) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(d);
    const hash = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hash));

    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
    return hashHex;
}

const log = async (hook, type, sink, sink_data, config) => {
    var stack_trace = trace();
    if (stack_trace[0] === "Error")
        stack_trace.shift();
    var canary = stack_trace[0];
    canary = await sha256(canary);

    if (window?.domlogger_debug_canary === canary)
        debugger;

    // Alert system
    var badge = false;
    var notification = false;
    if (config.alert) {
        const keep = checkRegexs(config.alert["match"], sink_data, true);
        const remove = checkRegexs(config.alert["!match"], sink_data, false);

        if (!remove && keep) {
            badge = true;
            if (config.alert.notification)
                notification = true;
        }
    }

    let data = {
        ext: "domlogger++",
        date: Date.now(),
        href: location.href,
        type: type,
        hook: hook,
        frame: top === self ? "top" : "subframe",
        sink: sink,
        data: stringify(sink_data),
        trace: stack_trace,
        debug: canary,
        badge: badge,
        notification: notification,
    };

    if (window.originalPostMessage) {
        window.originalPostMessage(data, "*");
    } else {
        window.postMessage(data, "*");
    }
}

const getConfig = (hook, type, key) => {
    var config_global = window.hooksConfig["*"] ? window.hooksConfig["*"] : {};
    var config_hook   = window.hooksConfig[hook] ? window.hooksConfig[hook] : {};
    var config_type   = window.hooksConfig[type] ? window.hooksConfig[type] : {};
    var config_target = window.hooksConfig[key] ? window.hooksConfig[key] : {};

    return Object.assign({}, config_global, config_target, config_hook, config_type);
}

const getTargets = (target) => {
    var attr = target.pop();
    var obj  = window;

    // In case window.x
    if (target[0] === "window")
        target.shift();

    for (const t of target) {
        if (!(t in obj))
            return [ null, null ];

        obj = obj[t]
    }
    return [ obj, attr ]
}

const getOwnPropertyDescriptor = (obj, prop) => {
    while (obj) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
        if (descriptor) {
            return descriptor;
        }
        obj = Object.getPrototypeOf(obj);
    }
    return undefined;
}

const stringify = (args) => {
    // JSON.stringify(undefined) = undefined -> .match = crash
    if (typeof args === "undefined") {
        args = "undefined";
    } else if (typeof args === "function") {
        args = args.toString();
    } else if (!(typeof args === "string")) {
        args = JSON.stringify(args);
    }

    return args
}

const checkRegexs = (regex, args, def) => {
    if (!regex) {
        return def;
    }

    args = stringify(args);
    for (let r of regex) {
        // Allow the use of variable like location.pathname within the regex value
        if (r.split(":")[0] === "exec")
            r = execCode(r, args);

        // Check regex
        try { new RegExp(r) } catch {
            console.log(`[DOMLogger++] ${r} (regex) is invalid!`);
            continue
        };
        
        if (args.match(r)) {
            return true;
        }
    }
    return false;
}

const execCode = (code, args="") => {
    if (!code)
        return args;

    var output = args;
    try {
        output = Function("args", code)(args);
    } catch {
        console.log(`[DOMLogger++] ${stringify(code)} is an invalid code to evaluate!`);
    }

    return output;
}

module.exports = {
    log,
    getConfig,
    getTargets,
    getOwnPropertyDescriptor,
    stringify,
    checkRegexs,
    execCode
}