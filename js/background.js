var data = null;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.puny === request.host) {
        chrome.pageAction.show(sender.tab.id);
        chrome.pageAction.setIcon({ path: 'icon-32.png', tabId: sender.tab.id });
        data = null;
    } else {
        data = request;
        chrome.pageAction.show(sender.tab.id);
        chrome.pageAction.setIcon({ path: 'icon-red-32.png', tabId: sender.tab.id });
    }

    sendResponse({});
});