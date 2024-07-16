// Making extension firefox & chrome compatible
const extensionAPI = typeof browser !== "undefined" ? browser : chrome;

import {
    updateUIDomains
} from "./utils.js";

function addDomain(domains) {
    window.allowedDomains = Array.from(new Set(window.allowedDomains.concat(domains))).filter(domain => domain !== "");
    extensionAPI.storage.local.set({ allowedDomains: window.allowedDomains });
    updateUIDomains(window.allowedDomains);
}

// Domains events
function handleAddDomain(event) {
    event.preventDefault();
    const domains = this.value.replaceAll(" ", "").split(",");
    addDomain(domains);
    this.value = "";
}

// Hooks events
function handleSelectHooks() {
    window.hooksData.selectedHook = this.value;
    extensionAPI.storage.local.set({ hooksData: window.hooksData });
}

// Handle pwnfox support (firefox only)
function handlePwnfoxSupport() {
    window.pwnfoxSupport = this.checked;
    extensionAPI.storage.local.set({ pwnfoxSupport: window.pwnfoxSupport });
}

// Handle remove headers
function handleRemoveHeaders() {
    window.removeHeaders = this.checked;
    extensionAPI.storage.local.set({ removeHeaders: window.removeHeaders });
}

// Buttons events
function handleRemoveAllDomain() {
    window.allowedDomains = [];
    extensionAPI.storage.local.set({ allowedDomains: window.allowedDomains });
    updateUIDomains(window.allowedDomains);
}

function handleAddCurrentDomain() {
    extensionAPI.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const domain = new URL(tabs[0].url).hostname;
        addDomain([domain]);
    });
}

function handleAddCurrentETLD() {
    extensionAPI.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const domain = new URL(tabs[0].url).hostname.split(".");
        const etld = domain.splice(domain.length-2, domain.length).join(".");
        addDomain([etld]);
    });
}

function handleSettingsNavigation() {
    extensionAPI.runtime.openOptionsPage();
}

export {
    // Domains
    handleAddDomain,
    // Hooks
    handleSelectHooks,
    // Misc
    handlePwnfoxSupport,
    handleRemoveHeaders,
    // Buttons
    handleRemoveAllDomain,
    handleSettingsNavigation,
    handleAddCurrentDomain,
    handleAddCurrentETLD
}