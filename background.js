chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.injected == "true")
      chrome.pageAction.show(sender.tab.id);
  });