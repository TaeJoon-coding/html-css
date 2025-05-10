/*
let now = new Date();
		let display = now.toLocaleTimeString();
		document.write("現在時刻：" + display);
*/
//現在は非推奨のやり方。

let now = new Date();
let display = now.toLocaleTimeString();
let timezoneElement = document.getElementById("timezone");
timezoneElement.textContent = "現在時刻：" + display;
timezoneElement.style.fontFamily = "bananaslipplus";
timezoneElement.style.fontSize = "24px";
timezoneElement.style.color = "black";
//「document.write」よりはこっちの方が良し。
//当idにElementをつけることで、様々なスタイルを付加可能。
//ページを読み込んだ時の初期値。

timezone.onmouseout = function() {
    timezone.style.fontSize = "24px";
    timezone.style.color = "black";
}
//「onmouseout」に初期値と違うスタイルを記入することも可能ではある。その時は一回カーソルを置いた後又カーソルを離したとき、適用される。
timezone.onmouseover = function() {
    timezone.style.fontSize = "36px";
    timezone.style.color = "crimson";
}
timezone.onclick = function() {
    timezone.style.fontSize = "36px";
    timezone.style.color = "yellowgreen";
}