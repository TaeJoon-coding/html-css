window.onload = () => {

	// 카운터 변수 : 파일 구성시 접미사로 사용 ex) kimhongdo_1.png 
	let count = 1;

	//一問）bodyタグに外部間隔、内部間隔を0に割り当て
	document.querySelector("body").style.margin = 0;
	/**
	 * scriptでstyle要素を使うため、先ず「document.querySelector("タグ名")」で対象のタグを指定。
	 * 続いて「.style」で所属関係であるstyleを指定。
	 * 「margin = 0;」でやっと外部間隔：0pxを割り当て。
	 */
	document.querySelector("body").style.padding = 0;
	//同じく、内部間隔：0pxを割り当て。
	
	//二問）最初に出力する絵を以下の条件に合わせて作成。
	/**
	 * イメージフォルダー：./kimhongdo
	 * ファイル名：kimhongdo_1.png
	 * ID：img_pad
	 * HINT）先ずイメージタグを変数に定義して、galleryレイヤー内に定義されたイメージタグ内容を挿入。
	 */

	let img_gal = document.getElementById("gallery");
	/**
	 * 二問だけでの解決でなく、文書全体、関連要素のために作成する。
	 * 「let img_gal」：変数を宣言。
	 * 「document.getElementById("gallery")」：絵を出力するレイヤー「gallery」IDを代入
	 */
	let start_img =`<img id="img_pad" src="../img/Hokusai/Hokusai_${count}.png">`;
	/**
	 * イメージを出力開始の変数を宣言。
	 * イメージのidを「img_pad」と指定。
	 * 挿入するイメージを「src」で指定。
	 * 「kimhongdo_${count}.png」イメージファイル名が「kimhongdo_」の後に数字が付く「png」ファイル。
	 */
	img_gal.innerHTML = start_img;
	
	/**
	 * HTML要素「img_gal」（IDが"gallery"の要素）の内部HTMLを、変数「start_img」に格納されたHTML文字列で置き換える。
	 * これにより、初期イメージがギャラリー領域に表示される。
	 */
	let initial_img_pad = document.getElementById("img_pad");
    if (initial_img_pad) {
        initial_img_pad.style.width = "75vw";
    }
	/**
	 * 94行の「img_pad.style.width = "75vw";」だけでは実験結果、2枚目の絵から75vwになる。
	 * すべての「img_pad」を75vwにするためにはこのように追加の宣言が必要
	 * 
	 * img_gal.innerHTML = start_img; の直後に、document.getElementById("img_pad") で最初の <img> 要素を取得し、その style.width を "75vw" に設定している。
	 * 取得した要素が存在するかどうか if (initial_img_pad) で確認することで、要素が見つからない場合のエラーを回避する。（念のため）。
	 */
	
	//三問）イメージをギャラリー（gallery）内部、中央揃え。
	let wrap = document.getElementById("wrap");
	wrap.style.width = "100vw";
	wrap.style.height = `${window.innerHeight}px`;
	/**
	 * id「wrap」を宣言
	 * 横幅：100vw
	 * 高さ：window.innerHeight：よりビューポートの表示領域（ページ領域）
	 */
	wrap.style.display = 'flex';
	wrap.style.alignItems = 'center';
	wrap.style.justifyContent = 'center';
	/**
	 * flexボックスを利用して、横縦中央揃え
	 */
	
	/**
	 * 四問）絵をクリックすると次の絵に変わる部分の作成。
	 * 初期状態の透明度が0に設定された状態でsetTimeout関数を活用して0.8秒後イメージが出力されるようにして、トランジション（transition）でイメージの透明度が1に徐々に変換され、
	 * 持続時間（duration）は0.7秒、遅延（delay）は0.1秒にして、トランジションを処理する。
	 * 
	 * 参考）setTimeout関数：https://developer.mozilla.org/ja/docs/Web/API/Window/setTimeout
	 */

	//絵をクリックすると変換されながら次の絵を出力するように
	img_gal.onclick = () => {
		
		//絵の枚数限界値（11枚）を超えると又カウンター（counter）を初期化（1）
		// if (count <= 10) {
		// 	count++;
		// } else {
		// 	count = 1;
		// }

		//課題：カウンター変数が10以下の場合、増加。違うと1に初期化。
		console.log("count : ", count);
		count <= 10 ? count++ : count = 1;
		//「count <= 10」が「true」の場合「count++」、「false」の場合「count = 1」
		
		//課題：IDがimg_padである絵のタグを（オブジェクト）変数として登録。
		let img_pad = document.getElementById("img_pad");
		//「getElementById」！！！！
		//img_pad.style.width = "75vw";
		let img_file = `../img/Hokusai/Hokusai_${count}.png`;
		
		//課題：トランジション：透明度
		img_gal.style.opacity = 0;
		//24行の「let img_gal = document.getElementById("gallery");」で宣言されたので、このまま「img_gal」を出してもいい。
		//ここで透明度の初期値0を割り当て。

		setTimeout(() => {
			
			//トランジション
			//参考）https://cssreference.io/property/transition/
			//参考）https://developer.mozilla.org/ja/docs/Web/CSS/transition
			
			//課題：トランジション
			img_gal.style.transition = 'opacity 700ms linear 100ms';
			/**
			 * transition-property: opacity;
			 * transition-duration: 0.7s;
			 * transition-timing-function: linear;
			 * transition-delay: 0.1s;
			 * これを一行に圧縮したもの。
			 */
			
			img_gal.style.opacity = 1;			
			img_pad.src = img_file;
			
		}, 800);		
		
	} // onclick
	
} // onload