var visited = [];
document.getElementById("updateVisited").addEventListener("click", function() {
    chrome.storage.local.get(['visited'], function(result) {
        visited = result.visited;
    });
    document.getElementById("visited").innerHTML = "";
    for (var i = 0; i < visited.length; ++i) {
        document.getElementById("visited").innerHTML
            = document.getElementById("visited").innerHTML + visited[i];
    }
});