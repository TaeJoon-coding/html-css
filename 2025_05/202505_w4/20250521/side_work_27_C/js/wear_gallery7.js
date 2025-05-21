// window.onload = () => {
document.addEventListener('DOMContentLoaded', () => {
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    async function fetchCSV(url) {

        let slider_panel = document.querySelector("#slider_panel");

        try {
            const response = await fetch(url);
            const data = await response.text();
            
            //document.getElementById('output').innerText = data;
            //ここにギャラリー機能を入れるべきなのでは？
            //CSV -> JSON化が必要
            // https://www.papaparse.com/
            // https://www.papaparse.com/docs#csv-to-json
            
            let json = Papa.parse(data.trim());
            //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/trim
            console.log("json : ", json.data);
            
            let products = json.data;       //一行はカラム、最後の行は空白
            products.shift();                                   //最初の一行（カラム）を除去
            // console.log("商品数：", products.length); 
            
            //let cnt = 1;
            for (let product of products) {
                /*
                console.log("商品イメージ： %s", product[0]+"_LM1.jpg")                    
                console.log("商品名: %s", product[1]);
                console.log("商品ブランド： %s", product[3]);
                console.log("商品単価： %s", product[4]);
                console.log("新商品なのか： %s", 
                            (product[5] == 'O' ? "新商品" : "従来商品"));
                console.log("商品レビュー： %d", product[6]);

                console.log("-------------------");
                */

                let product_content = ` <!-- 衣服単品パネル -->
                                        <div class="swiper-slide wear-pnl">

                                            <!-- 商品のいいね！登録 -->
                                            <div class="wear-preferred-item">
                                                <span class="material-symbols-outlined preferred-item-icon">
                                                    favorite
                                                </span>              
                                            </div>
                                            <!--// 商品のいいね！登録 -->

                                            <!-- 衣服サムネパネル --> 
                                            <div class="wear-gallery-pic">

                                                <!-- 大きい絵拡大ボタンの追加 -->
                                                <a href="#"  class="magnified_btn" title="${product[0]}">
                                                    <img class="img1" id="img_${product[0]}" src="../../img/pic/${product[0]}_LM1.jpg" title="${product[0]}" />
                                                    <img class="img2" id="img_${product[0]}" src="../../img/pic/${product[0]}_LM2.jpg" title="${product[0]}" />
                                                </a>
                                            </div>
                                            <!--// 衣服サムネパネル -->

                                            <!-- 生地スタイル -->
                                            <div class="wear-fabric">
                                                <div class="wear-fabric-icon">             
                                                    <img src="../../img/pic/${product[0]}_LM1.jpg" />
                                                </div>
                                            </div>
                                            <!--// 生地スタイル -->

                                            <!-- ブランド -->
                                            <div class="brand-name">
                                                ${product[3]}
                                            </div>
                                            <!--// ブランド -->

                                            <!-- 商品名-->
                                            <div class="wear-name">
                                                ${product[1]}
                                            </div>
                                            <!--// 商品名-->

                                            <!-- 商品単価 -->
                                            <div class="wear-price">
                                                ${numberWithCommas(product[4])}KRW
                                            </div>
                                            <!--// 商品単価 -->

                                            <!-- おすすめ、評点およびレビュー -->
                                            <div class="wear-recomm-review">
                        
                                                ${product[5] == 'O' ? '' : 
                                                    `<div class="wear-recomm-review-icon-wrap">
                                                        <span class="material-symbols-outlined">
                                                            star
                                                        </span>
                                                        <span class="wear-recomm-review-num">${product[6]}</span>    
                                                        <span class="material-symbols-outlined">
                                                            reviews
                                                        </span>
                                                        <span class="wear-recomm-review-num">${product[7]}</span>
                                                    </div>`}

                                            </div>
                                            <!--// おすすめ、評点およびレビュー -->

                                            <!-- 新商品 -->
                                            <div class="new-wear">
                                                ${product[5] == 'O' ? 
                                                    `<span class="new-wear-icon">新商品</span>` : ''}
                                                
                                            </div> 
                                            <!--// 新商品 -->

                                        </div>
                                        <!--// 衣服単品パネル -->`;

                            //console.log("個別商品陳列、終：", cnt)
                            //let wrap = document.querySelector(".wrap");
                            //wrap.innerHTML += product_content;
                            //cnt++;
                    // let swiper_wrap = document.querySelector(".swiper-wrapper");
                    // swiper_wrap.innerHTML += product_content;
                    slider_panel.innerHTML += product_content;
            }//for
        } 
        
        catch (error) {
            console.error('Error fetching CSV:', error);
        }
    
       //////////////////////////////////////////////////////

        let magnified_btns = document.querySelectorAll(".magnified_btn");

        console.log("magnified_btns 数 : ", magnified_btns.length)

        let magnified_image_view = document.getElementById("magnified_image_view");
        let magnified_image_content = document.getElementById("magnified_image_content");

        let img_popup_close_btn = document.getElementById("img_popup_close_btn");

        img_popup_close_btn.addEventListener('click', (e) => {

            console.log("e :", e.currentTarget);
            magnified_image_view.style.visibility = 'hidden';
            magnified_image_content.innerHTML = '';

        });


        console.log("ボタン :", magnified_btns);

        for (let magnified_btn of magnified_btns) {

            magnified_btn.addEventListener('click', (e) => {

                console.log("クリックイベント処理開始-1 : ", e.target);
                console.log("クリックイベント処理開始-2 : ", e.target.title);
                console.log("クリックイベント処理開始-3 : ", e.target.id);

                let img_id = e.target.title;
                
                // 拡大イメージポップアップ活性化
                magnified_image_view.style.left = 'calc(50vw - 305px)';
                magnified_image_view.style.top = '10px';
                magnified_image_view.style.width = '610px';
                magnified_image_view.style.height = 'calc(915px + 20px)';
                magnified_image_view.style.backgroundColor = '#B3B3B3';
                magnified_image_view.style.visibility = 'visible';

                magnified_image_content.innerHTML 
                    += `<img class="img1" src="../../img/pic/${img_id}_LM1.jpg" />
                        <img class="img2" src="../../img/pic/${img_id}_LM2.jpg" />`;

                console.log("クリックイベント処理終わり");
            });

        } // for
        
        /////////////////////////////////////////////////////////

        const swiper = new Swiper('.swiper', {
            // Optional parameters
            // direction: 'vertical',
            direction: 'horizontal',
            //Direction属性：https://swiperjs.com/swiper-api#param-direction
            loop: true,

            slidesPerView : 3,
            // 同時に表示するスライドの数 : 3
            // slidesPerView : https://swiperjs.com/swiper-api#param-slidesPerView
            
            // slidesPerGroup: 3,
            // 一回スライド表現時、そろって表現するスライド
            // https://swiperjs.com/swiper-api#param-slidesPerGroup

            spaceBetween : 15,
            // スライド間の間隔
            // https://swiperjs.com/swiper-api#param-spaceBetween

            centeredSlides: true,
            // スライドの中央揃え
            // https://swiperjs.com/swiper-api#param-centeredSlides

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                // nextEl: '.swiper-button-next',
                // prevEl: '.swiper-button-prev',

                nextEl: '.custom-next-navigation',
                prevEl: '.custom-prev-navigation',
                // 自作したカスタムナビゲーションを代入
            },

            // And if we need scrollbar
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        });// swiper end


    } // async function

    //fetchCSV('https://example.com/data.csv');
    fetchCSV('./csv/商品情報ー追加商品.csv');

// } // window
}); // document.addEventListener('DOMContentLoaded'
