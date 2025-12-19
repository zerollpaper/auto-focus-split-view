// This script listens for a message from the content script and
// focuses the tab that the mouse is currently hovering over.

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === 'focusTab') {
    // Check if the tab is not already active in its window
    chrome.tabs.get(sender.tab.id, (tab) => {
      if (!tab.active) {
        chrome.tabs.update(sender.tab.id, { active: true });
      }
    });
  }
});