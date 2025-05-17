//各メインメニューのサブメニューの出力。
window.onload = function() {

	// すべてのサブメニューの初期状態：隠し（hidden）
	// すべてのサブメニューを「sub_menus」変数に割り当て
	// セレクター適用：idが_subで終わるdivタグ
	
	// 一問）
	// idが「_sub」で終わるすべてのdivタグを制御するsub_menus変数の作成
	let sub_menus = document.querySelectorAll("div[id$=_sub]");
	// querySelectorAll：セレクター適用
	// [id$=_sub]idが_subで終わるタグ


	// 二問）
	// 「for」を活用してすべてのサブメニューの見せかけ属性（visibility）を隠し状態に初期化する。
	// Hint）divタグに対する隠し効果の制御はvisibility属性を活用できる。
	// https://developer.mozilla.org/en-US/docs/Web/CSS/visibility
	for (let sub_menu of sub_menus) {
		sub_menu.style.visibility = "hidden";
	/**
	 * for(let 変数1 of 変数2)
	 * let 変数1：
	 * ループ処理中に各要素を参照にするための変数1を宣言
	 * ループを繰り返すたびに変数1に変数2という「反復可能なオブジェクト」の「現在の要素」が代入される。
	 * letだから変数1のスコープが「このoforループ」内に限定される。
	 * 
	 * of 変数2：
	 * 「for...ofループ」特有のキーワード、「変数2」を反復処理を行う対象のオブジェクトを指定。
	 * 「変数2」が持つ各要素に対してループ処理
	 */
	} // for(sub_menu)

	//3問）idが「_btn」で終わるすべての「li」タグをメインメニューで制御する「main_menus」変数を割り当て
	/**
	 * メインメニューを「main_menus」変数に割り当て
	 * セレクターの適用：idが_btnで終わるliタグ
	 */
	let main_menus = document.querySelectorAll("li[id$=_btn]");	
	main_menus.forEach((main_menu) => {

	//メインメニューの各メニューの各イベント処理コードを短縮するためにfor文を活用
	for (const main_menu_one of main_menus) {
		
		// 各個別メインメニューにマウスを置いた時（rollover）のイベント処理
		main_menu_one.onmouseover = function(e) {
			// this.id = e.currentTarget.id 
			// ここでは同じ意味としてマウスを置いた対象（target）タグ（li）のid

			// 参考）Event.target / Event.currentTarget 
            // : https://developer.mozilla.org/ja/docs/Web/API/Event/target
            // : https://developer.mozilla.org/ja/docs/Web/API/Event/currentTarget

            // 参考）イベントのバブリング
            // : https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Scripting/Event_bubbling

			// const rollover_menu = this.id.split("_")[0]; // 参考用のコード－１
			const rollover_menu = e.currentTarget.id.split("_")[0];
			console.log("rollover_menu : ", rollover_menu);
			//確認用

			//ホーム（home）メニューはロールオーバー適用から除外
			if (rollover_menu != "home") {
				/**
				 * !=は不等号。
				 * つまり、「if (rollover_menu != "home")」は、変数「rollover_menu」が「home」でない場合の条件。
				 */
			
				//メインメニューボタンのID抽出を通じてサブメニューIDを選択
				var sub_menu_id = this.id.split("_")[0] + "_sub";
				/**
				 * 「this」でイベントが発生する要素（マウスが乗った <li> 要素、main_menu_one）を参照
				 * 「id.split("_")[0]」部分はid属性の最初の部分を習得、
				 * 習得した部分に「_sub」という文字列を追加。
				 * たとえると、マウスが乗ったメニューのidが「item1_main」なら、「sub_menu_id」は「item1_sub」になるような物。
				 */

				//メインメニューごとのサブメニュー
				var this_sub_menu = document.getElementById(sub_menu_id);
				//変数「this_sub_menu」に「sub_menu_id」を持つHTML要素（サブメニューのdiv、ulなど）を習得して代入。
				
				//参考コード２
				//ほかのサブメニューを隠す
				//for ~ of文を利用する
				//サブメニュー全体の変数：sub_menus
				//ただし、反復文内で条件式を利用してサブメニューidが自身のサブメニューid（this_sub_menu）
				// でないものだけが選ばれるように隠す（hidden）ように措置する

				for (const sub_menu_one of sub_menus) {
					//配列「sub_menus」の各要素順番通り「sub_menu_one」に代入する。
					//for...of ループ
					
					if (sub_menu_one.id != this_sub_menu.id) {
						//「sub_menu_one」（現在ループ処理しているサブメニュー）のidが
						//「this_sub_menu」（マウスを乗せたメインメニューのサブメニュー）のidと異なる場合、

						sub_menu_one.style.visibility = "hidden";
						//そのサブメニューの「visibility」スタイルを「hidden」にする。（隠す）
						//つまり、マウスを乗せてないメインメニューのサブメニューを隠す。
					} 
					
				} // for
				this_sub_menu.style.visibility = "visible";
				//マウスが乗ったメインメニューのサブメニュー(this_sub_menu)の「visibility」スタイルを「visible」にする。
				//つまり見せる。


				
			} //ホームボタンをロールオーバーする場合、すべてのサブメニュー（sub_menus）を隠す

			else if (rollover_menu == "home") {
				//上の「rollover_menu != "home"」以外の場合、
				//「rollover_menu == "home"」であると、

				//上記の参考コード2と類似するように「for ~ of」文を活用
				//ただし、すべてのサブメニューを隠すため、条件式は無い。
				for (const sub_menu_one of sub_menus) {
					//「home」メニューにマウスを乗せた場合、「sub_menus」配列のすべてのサブメニュー要素に対して、
					// その「visibility」スタイルを「hidden」に設定し、すべて隠す。

					sub_menu_one.style.visibility = "hidden";
				} // for
				
			} //else if
			
		} // onmouseover
	
	} // for
	})//foreach


	//サブメニューロールアウトの場合のイベントハンドラー
	for (const sub_menu_one of sub_menus) {
	//for ~ of文を活用してサブメニュー（sub_menus）変数の個別サブメニュー（sub_menu_one）のイベント処理

		sub_menu_one.onmouseout = function(e) {
		//個別サブメニュー（sub_menu_one）にマウスロールアウト（mouseout）した時イベント処理

			const rollover_menu = this.id.split("_")[0];
			//サブメニュー自身のidから「_」を除去した初めてのトークンを「rollover_nemu」という変数として割り当て
			//参考コード1の方式を参照
			
			if (rollover_menu != "home") {
			//ホームメニュー（home）はロールオーバー適用除外：条件式（if）
			
				var sub_menu_id = this.id.split("_")[0] + "_sub";
				/**
				 * 変数「sub_menu_id」を宣言。
				 * メインメニューのボタンのid（this.id）の抽出を通じてサブメニューidを選択
				 * 参考コード1の方式を参照して、テキスト「_sub」を追加
				 * 以上を変数に割り当て
				 */
				
				var this_sub_menu = document.getElementById(sub_menu_id);
				//変数「this_sub_menu」を宣言
				//抽出したid（sub_menu_id）を持つオブジェクト（タグ）を割り当て
				
				this_sub_menu.style.visibility = "hidden";	
				//「this_sub_menu」の「visibility」属性を「hidden」にする。
				
			} // if	
			
		}  // 
		
	} // 
	
} //
