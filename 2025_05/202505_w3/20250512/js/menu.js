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

	// 메인 메뉴들의 각각의 이벤트 처리 코드를 축소하기 위해 for문 활용.
	for (const main_menu_one of main_menus) {
		
		// 각 개별 메인 메뉴에 마우스를 올렸을 때(rollover) 이벤트 처리 
		main_menu_one.onmouseover = function(e) {
			
			// this.id = e.currentTarget.id 여기서는 같은 의미로써
			// 마우스 롤오버한 대상(target) 태그(li)의 아이디 
			
			const rollover_menu = this.id.split("_")[0]; // 참고 코드-1
			
			// 홈(home) 메뉴는 롤오버 적용 제외
			if (rollover_menu != "home") {
			
				// 메인 메뉴 버튼의 아이디 추출을 통해서 서브 메뉴 아이디를 선택
				var sub_menu_id = this.id.split("_")[0] + "_sub";
				// 메인 메뉴 계열(자신)의 서브 메뉴
				var this_sub_menu = document.getElementById(sub_menu_id);
				
				// 참고 코드-2
				// 다른 서브 메뉴들을 은닉(감추기)
				// for ~ of 문을 활용합니다. 
				// 전체 서브 메뉴 변수 : sub_menus
				// 단, 반복문 내에서 조건식을 사용하여 서브 메뉴 아이디(id)가 자신의 서브 메뉴 아이디(this_sub_menu)
				// 가 아닌 것만 선택적으로 은닉(hidden)하도록 조치합니다.
				for (const sub_menu_one of sub_menus) {
					
					if (sub_menu_one.id != this_sub_menu.id) {
						sub_menu_one.style.visibility = "hidden";
					} 
					
				} // for
				
				// 자신의 서브 메뉴(this_sub_menu)를 보이도록 조치
				this_sub_menu.style.visibility = "visible";
				
			} // 홈(home) 버튼 롤오버 할 경우 모든 서브 메뉴(sub_menus) 은닉 
			else if (rollover_menu == "home") {

				// 위의 구문(참고 코드-2)과 유사하게 for ~ of 문을 활용합니다.
				// 단, 모든 서브 메뉴를 은닉 조치하기 때문에 조건식은 없습니다.  
				for (const sub_menu_one of sub_menus) {
					sub_menu_one.style.visibility = "hidden";
				} // for
				
			} //
			
		} // onmouseover
	
	} // for
	
	// 서브 메뉴 롤아웃 할 경우 이벤트 핸들러
	// for ~ of 문을 활용하여 서브 메뉴(sub_menus) 변수의 개별 서브메뉴(sub_menu_one)의 이벤트 처리
	for (const sub_menu_one of sub_menus) {
	
		// 개별 서브메뉴(sub_menu_one)에 마우스 롤아웃(mouseout) 하였을 때 이벤트 핸들(처리)
		sub_menu_one.onmouseout = function(e) {
			
			// 서브 메뉴 자신의 아이디에서 "_"를 제거한 첫번째 토큰을 rollover_nemu라는 변수로 할당 
			// 참고 코드-1의 방식을 참조합니다.
			const rollover_menu = this.id.split("_")[0];
			
			// 홈 메뉴(home)는 롤오버 적용 제외 : 조건식(if)
			if (rollover_menu != "home") {
			
				// 메인 메뉴 버튼의 아이디(this.id) 추출을 통해서 서브 메뉴 아이디를 선택
				// 참고 코드-1의 방식을 참조하며 추가적으로 "_sub" 첨가하여
				// 아이디(sub_menu_id) 변수에 할당(대입)합니다.
				var sub_menu_id = this.id.split("_")[0] + "_sub";
				
				// 위에서 추출한 아이디(sub_menu_id)를 가진 객체(태그)를 this_sub_menu 변수로 할당합니다.
				var this_sub_menu = document.getElementById(sub_menu_id);
				
				// this_sub_menu 보이기(visibility) 속성을 은닉(hidden)으로 설정합니다. 
				this_sub_menu.style.visibility = "hidden";	
				
			} // if	
			
		}  // 개별 서브메뉴(sub_menu_one)에 마우스 롤아웃(mouseout) 하였을 때 이벤트 핸들(처리) "끝"
		
	} // for ~ of 문을 활용하여 서브 메뉴(sub_menus) 변수의 개별 서브메뉴(sub_menu_one)의 이벤트 처리 "끝" 
	
} //
