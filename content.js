// This script sends a message to the background script
// to focus the current tab when the mouse enters the page.

console.log('Auto-focus content script loaded.');

document.addEventListener('mouseenter', () => {
  chrome.runtime.sendMessage({ action: 'focusTab' });
});