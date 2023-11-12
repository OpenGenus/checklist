// background.js
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "openInNewTab",
    title: "Open - 100 Interview Problems",
    contexts: ["page"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "openInNewTab") {
    chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
  }
});

// background.js
chrome.alarms.create('testAlarm', {
    periodInMinutes: 7200
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "testAlarm") {
        // Logic to execute when the alarm runs
        chrome.notifications.create('test', {
            type: 'basic',
            iconUrl: 'images/1.jpg',
            title: '100 Interview Problems',
            message: 'It has been 5 days. Go through 100 Interview Problems!',
            priority: 2
        });
    }
});

// Add an event listener for notification click
chrome.notifications.onClicked.addListener((notificationId) => {
    if (notificationId === 'test') {
        chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
    }
});