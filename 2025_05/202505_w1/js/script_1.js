window.onload = function() {
    var coll = document.querySelector("#coll");
    coll.onmouseover = function() {
        coll.style.color = "#33FF33";
    }
    coll.onmouseout = function() {
        coll.style.color = "black";
    }
    coll.onclick = function() {
        coll.style.color = "coral";
    }
}