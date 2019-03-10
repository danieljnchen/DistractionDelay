chrome.storage.local.get(['visited'], function(result) {
    //alert(JSON.stringify(result));
    var visited = JSON.parse(JSON.stringify(result));
    var url = visited.visited[visited.visited.length - 1];
    document.getElementById("url").innerHTML = url;
    var countdown = 10;
    var intervalId = setInterval(count, 1000);
    function count() {
        if (countdown <= 0) {
            clearInterval(intervalId);
            window.location.replace(url);
            return;
        }
        --countdown;
        document.getElementById("countdown").innerHTML = countdown;
    };
});