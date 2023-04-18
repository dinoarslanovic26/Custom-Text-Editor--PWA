const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event - this is an event listener for the prompt event storing into the deffered prompt
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element - this will show the user the prompt
butInstall.addEventListener('click', async () => {
    const eventListing = window.deferredPrompt;
    if (!eventListing) {
        return;
    }
eventListing.prompt();
window.deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event - this will clear the prompt
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
