var hovering = document.querySelector(".hovering");
//「#hovering」でなく、「.hovering」にすることで、htmlの方にCSSのクラスと同時に適用可能。
hovering.style.color = "black";
//ページを読み込んだ時の初期のstyle。
hovering.onmouseout = function() {
    hovering.style.color = "black";
}
hovering.onmouseover = function() {
    hovering.style.color = "#AA3366";
}
hovering.onclick = function() {
    hovering.style.color = "coral";
}

/*
let name = prompt("メッセージ", "デフォルト");
document.write("<b><big>様、こんにちは。</b></big>");
*/

//JAVAscriptを個別のファイルとして作るときは、scriptごと別のファイルにするのが良し。