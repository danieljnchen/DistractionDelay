var visited = [];
chrome.storage.local.set({'visited': visited}, function() {});            
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if ((tab.url.indexOf("www.youtube.com") != -1 || tab.url.indexOf("www.fanfiction.net") != -1)
            && tab.url.indexOf("redirect_delay.html") == -1) {
            //alert("Distracting link detected: " + tab.url);
            if (visited[visited.length - 1] == tab.url) {
                //alert("Distracting link already visited");
                visited.pop();
                chrome.storage.local.set({'visited': visited}, function() {});            
            } else {
                //alert("Redirecting YouTube link");
                visited.push(tab.url);
                chrome.storage.local.set({'visited': visited}, function() {});            
                setTimeout(function () {chrome.tabs.update(tab.id, {"url": "redirect_delay.html"});}, 10);
            }
        }
    }
});