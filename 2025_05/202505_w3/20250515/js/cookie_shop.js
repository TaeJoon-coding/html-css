
//三問）従来のBootstrapスライドで使ったJavascriptの導入部をそのままコピペし、初期コード部分を完成しなさい。

//三問のコピペ部分開始

let cookies = []; 
// クッキー配列
// これにより

//let cookieProduct = {}; 
// クッキーオブジェクト

// 構築子（普通はコンストラクタという）
function CookieProduct(name, content, price) {

    this.name = name;
    this.content = content;
    this.price = price;
}

// 文字列代替関数
function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

//クッキーの順番およびファイル名：配列
let cookie_image_files = [
                            'chocolate_chip',
                            'german_chocolate',
                            'triple_chocolate',
                            'lemonade',
                            'Mexican_Hot_Chocolate',
                            'molasses_crinkle',
                            'Oatmeal_Golden_Raisin',
                            'Oatmeal_Chocolate_Chip',
                            'Peanut_Butter',
                            'Peanut_Butter_Cup',
                            'white_choc_macedamia',
                            'Root_Beer_Float',
                            'Snickerdoodle',
                            'Sugar'
                            ];
    
let cookie_text = [
                        "A classic cookie made with real butter, white and brown sugars, and tons of of high quality chocolate chips. We don't skimp on the chips!",

                        "This is a German chocolate based cookie, with tons of caramely coconut and whole pecans. No need to travel to Germany for an authentic German Chocolate cookie!",

                        "Especially for chocolate lovers. Triple chocolate means lots of melted chocolate, very little flour, Hershey's cocoa powder, and plenty of chocolate chips, making this cookie extremely rich. Crackly top and soft in the middle - chocolate heaven!",

                        "A summer inspired cookie, made with lemonade concentrate, fresh lemon juice, and pure lemon extract. The flavor of lemonade is all throughout this soft pound cake-like cookie and it is delicious! Yummy lemon icing and yellow sparkly sprinkles decorate the top.",

                        "This is one of our most unique cookies for people who like a little spicy heat. This cookie is flavored with chocolate cocoa powder and rolled in a mixture of cinnamon, chili powder and cayenne pepper - a delicious flavor combination. We dare you to try it!",
                        
                        "This recipe is from April's grandmother Alice, of Pinehurst, NC. A tried and true cookie that is hard to find these days. Made with brown sugar, molasses, and an incredible mix of spices including cinnamon, ginger and cloves. These cookies are chewy, dense and old-fashionably good.",

                        "These cookies are like a bowl of oatmeal to go. We use old fashioned rolled oats for a more dense cookie, butter and brown sugar, Madagascar vanilla, a touch of kosher salt, and our special twist - locally produced honey and plump golden raisins.",

                        "So many people requested this cookie we just had to bake it for you! Oatmeal chocolate chip is a dense chewy cookie filled with oats and our special twist: white AND dark chocolate chips. A sprinkle of sea salt on top before it is baked really makes your taste buds pop!",

                        "Lots of peanut butter go in to these cookies, and of course they have the essential fork criss crosses on top.",
                        
                        "This is our awesome flavor created for all you peanut butter & chocolate lovers out there. You are going to love this! A chewy chocolate cookie stuffed with big chunks of peanut butter cups, swirled with more peanut butter and a whole peanut butter cup sunk right in the middle. Heaven!",

                        "This rich, chewy cookie is one that customers demanded year after year. However, we didn't want to add it to the line up until it was perfect (and until bulk macadamias came down in price!). In every bite you will enjoy the contrast of crunchy, salty macadamia nuts and smooth, creamy white chocolate chips. Cookie paradise!",

                        "The People love root beer so why not a root beer cookie? This is a soft, chewy cookie. Root beer extract is in the cookie and in the icing on the top. One bite and you will swear you are sipping on a creamy root beer float.",

                        "You may remember these from when you were a kid - a crinkly topped sugar cookie rolled in cinnamon-sugar. Great with coffee or tea.",
                        
                        "A good old fashioned cookie, simple but heavenly. Choose plain sugar cookies or sugar cookies decorated with white icing and rainbow sprinkles. Great for kids of all ages."

                    ];

let cookie_price = [
                        150,
                        200,
                        300,
                        150,
                        150,
                        150,
                        200,
                        200,
                        150,
                        200,
                        150,
                        200,
                        150,
                        250
                    ];
                    //三問のコピペ部分終了

// main
window.onload = function() {

    //クッキーオブジェクト配列の初期化
    //上記の三つの配列（cookie_image_files, cookie_text, cookie_price）をcookiesという配列に追加する内容を作成。
    for (let i = 0; i < cookie_image_files.length; i++)
    {
        cookies.push(new CookieProduct(cookie_image_files[i], 
                                       cookie_text[i], 
                                       cookie_price[i]));
    } // 

    //ビューポートの高さの設定
    let sections = document.querySelectorAll("[id$=_section]");

    for (let section of sections) {
        section.style.height = window.innerHeight;
    }

    //スライダーイメージ（クッキー）ローディング（追加）
    let cookie_image = "";
    //ここは空っぽ状態にする。

    ////////////////////////////////////////////////////////////////////////////////////////

    //四問）クッキーキャロセルスライドギャラリーを構成する個別スライドパネルをJavascriptで構成する。
    //個別スライドパネル構成
    //参考：https://swiperjs.com/get-started#add-swiper-html-layout
    /*
         <div class="swiper-wrapper">

            <!-- Slides -->
            <div class="swiper-slide">Slide 1</div> <!-- 個別スライド -->
            <div class="swiper-slide">Slide 2</div> <!-- 個別スライド -->
            <div class="swiper-slide">Slide 3</div> <!-- 個別スライド -->
            
            ...

        </div>
    */
    for (let i = 0; i < cookie_image_files.length; i++) {
        //配列はやはり「for」を利用するべき。
        cookie_image =  `<div class="swiper-slide">      <!-- 内容が長いのでこのように複行にする。色は違るが、ちゃんとコメントとして判定されている。 -->
                            <!-- ここは、言ってみるとjsの内部にhtmlを作成するようなもので、先ずdivにクラス「swiper-slide」を割り当て -->
                                
                                <div id="slider_text${i}" class="slider_text" style="color:yellow; z-index:10">
                                    <!-- cssの「クッキーの詳細」が適用されるテキスト。複数の対象（配列だから）なので、「for」の「${i}」をidにする。 -->
                                    <!-- 文字色は別途指定がなかったのでここで「yellow」に指定。 -->
                                    <!-- z-index:10で、レイヤーの層を高く設定。 -->

                                    <span style="color:#fff; font-weight:bold; font-size:2em;">
                                        <!-- クッキーの名前のフォントの設定 -->
                                        ${cookies[i].name}
                                            <!-- 「for」で生成された数字にあたる配列番号のクッキー名を呼び出す -->
                                    </span>
                                    
                                    <br><br>
                                        <!-- 言うまでもなく、改行 -->
                                    
                                        ${cookies[i].content}

                                            <!-- クッキーの説明文句 -->

                                    <br><br>

                                    <b>${cookies[i].price}JPY</b>
                                        <!-- 同じく金額を呼び出す -->
                                </div>

                                <img src="../img/pic/${cookies[i].name}.png" id="cookie_image${i}" class="cookie_image" />
                                    <!-- クッキーの画像を呼び出す。 -->
                        </div>`
        let slider_panel = document.querySelector("div#slider_panel");
            /**
             * 変数「slider_panel」を宣言
             * セレクターでcssの「slider_panel」を選択
             */
        
            slider_panel.innerHTML += cookie_image;
                /**
                 * 「slider_panel」にHTML要素を挿入
                 * 「+=」で入れることで事々要素を追加
                 */

    }
    
    //////////////////////////////////////////////////////////////////////////

    //五問）以下のswiper初期化構文を参考にしてswiperギャラリースクリプトを初期化する。
    //ただし、縦方向でなく、横方向のスライド展開になるように設定を変更し、スクロールバーの設定は削除（排除）する。

    //参考： https://swiperjs.com/get-started#initialize-swiper
    //      https://swiperjs.com/swiper-api#initialize-swiper
    // 
    // ※ swiper API DOC : https://swiperjs.com/swiper-api

    // ※ スライド媒介変数 API DOC : https://swiperjs.com/swiper-api#parameters
    // ※ スライド方向性媒介変数 API DOC : https://swiperjs.com/swiper-api#param-direction

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        //direction: 'vertical',        //縦方向
		direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        //scrollbar: {el: '.swiper-scrollbar',},
        // スクロールバーの設定は削除（排除）
      });

      

      for (var i=0; i<cookies.length; i++) {
        let order_content 
            = `<tr>
                <!-- 行の作成 -->
                <td>
                    <input type='text' id='name${i}' class="form-control" name='name${i}' readonly value='${cookies[i].name}'>
                </td>
                <!-- 一列目：配列、for文二より「name」、クッキーの名（イメージファイル名）の出力 -->
                
                <td style="background-color:orange">
                    <input type='number' id='price${i}' class="form-control" name='price${i}' pattern='(d{3})' readonly min='0' value='${cookies[i].price}'>
                </td>
                <!-- クッキーの金額 -->

                <td>
                    <input type='number' class="form-control" min='0' id='quantity${i}' name='quantity${i}' value='0'>
                </td>

                <!-- 数量 -->

                <td>
                    <input type='number' class="form-control" min='0' id='sum${i}' name='sum${i}' value='0' readonly>
                </td>


            </tr>`; 

        document.querySelector("table#order_board").innerHTML += order_content;
      }

//////////////////////////  カート機能追加  /////////////////////////////////

    let cookie_images = document.querySelectorAll("img[id^=cookie_image]");
    //クッキーのイベントハンドリング（処理）適用：クッキーをクリックすると、購入現状に追加される。

    for (let cookie_image of cookie_images) {

        cookie_image.onclick = function(e) {
            //クッキーイメージをクリックした時、注文数量及び合計の数値の変動

            // id="cookie_image0" => 0
            let name = this.getAttribute("id");
            /**
             * 変数「name」を宣言
             * 「this」：このコードが実行されるとき、「getAttribute("id")」を参照
             * 「getAttribute("id")」：「this」が参照するid要素を習得
             * 「name」に代入
             */
            let i = parseInt(replaceAll(name,"cookie_image",""));	
            /**
             * 変数「i」を宣言
             * 「replaceAll」は文字列「name」内のすべての「cookie_image」の部分を「""」と記入したことで空の文字列に置換する。
             * 略すると、「cookie_image」を削除
             * parseInt()で引数として与えられた文字列を解釈して、整数に変換する。
             * もし文字列の初頭が数字化できない場合、「NaN」と出力される。
             * 以上を「i」に代入
             */

            let quantity = document.getElementById("quantity"+i).value;
            //変数「quantity」を宣言。
            //「getElementById()」：「()」内のidを持つHTML要素を習得
            //「quantity」＋「i」の文字列のid
            //「value」：検索されたHTML要素の「値」を習得、「quantity」に代入
            
            document.getElementById("quantity"+i).value = ++quantity; 
            
            let price = 0; // 単価
            let number = 0; // 数量
            let sum = 0; // 商品ごと
            let total_price = 0; // 計


            for (let i = 0; i < cookies.length; i++) {
                //従来のほかのクッキーの商品ごと合計と計算 => 計

                price = document.getElementById("price"+i).value; // 単価

                quantity_fld = document.getElementById("quantity"+i).value; // 注文数量

                old_quantity = parseInt(quantity_fld); // 従来の注文数量
                sum = price * old_quantity; // 単価 * 注文数量 => 商品ごと

                document.getElementById("sum"+i).value = sum; // 商品ごと出力

                total_price += price * old_quantity;

                
            } // 

            console.log("-");

            document.getElementById("total_price").value = total_price; // 計
        } // onclick

    } // for

    let quantities = document.querySelectorAll("[id^=quantity]");
    //注文数調節 => 計の変化

    for (let quantity of quantities) {

        /**
         * マイナス数の入力に対するregexの点検
         * regex => プラスの整数だけを入力するように点検 => エラー時、メッセージ => 従来の値を復元、初期化
         * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp
         * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
         */

        quantity.onclick = function(event) {

            let quantity = this.getAttribute("id");
            let i = parseInt(replaceAll(quantity,"quantity",""));

            let price_fld = document.getElementById("price"+i).value;

            let price = parseInt(price_fld); 

            let old_quantity = parseInt(this.value); 

            let sum = 0; 
            let total_price = 0; 

            for (let i=0; i<cookies.length; i++)
            {
                price_fld = document.getElementById("price"+i).value;

                price = parseInt(price_fld); 

                quantity_fld = document.getElementById("quantity"+i).value;
                old_quantity = parseInt(quantity_fld);
                sum = price * old_quantity;
                
                document.getElementById("sum"+i).value = sum; 

                total_price += sum;

            } // for

            document.getElementById("total_price").value = total_price; 
            
        } // onclick 
            
    } // for	
    

} // window.onload 
