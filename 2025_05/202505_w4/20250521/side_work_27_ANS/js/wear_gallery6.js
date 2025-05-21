//window.onload = () => {

document.addEventListener('DOMContentLoaded', () => {

    // 단가 천단위 "," 포맷 처리
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    async function fetchCSV(url) {

        // let wrap = document.querySelector(".wrap"); // wrap 컨테이너
        let slider_panel = document.querySelector("#slider_panel"); // swiper wrap 컨테이너

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
           console.log("商品数：", products.length); 
            for (let product of products) {

                let product_content = 
                `<!-- 衣服単品パネル -->
                    <div class="swiper-slide wear-pnl">

                        <!-- 商品のいいね！登録 -->
                        <div class="wear-preferred-item">
                            <span class="material-symbols-outlined preferred-item-icon">
                                favorite
                            </span>              
                        </div>
                        <!--// 商品のいいね！登録 -->

                        <!-- 商品のいいね！登録 -->              
                        <div class="wear-gallery-pic">

                            <!-- イメージ拡大ボタンの追加 -->
                            <a href="#"  class="magnified_btn" title="${product[0]}">
                                <img class="img1" id="img_${product[0]}" src="../../img/pic/${product[0]}_LM1.jpg" title="${product[0]}" />
                                <img class="img2" id="img_${product[0]}" src="../../img/pic/${product[0]}_LM2.jpg" title="${product[0]}" />
                            </a>

                        </div>
                        <!--// 商品のいいね！登録 -->

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

                        <!-- 商品の単価 -->
                        <div class="wear-price">
                            ${numberWithCommas(product[4])} KRW                            
                        </div>
                        <!--// 商品の単価 -->

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
                
                // let wrap = document.querySelector(".wrap");
                // wrap.innerHTML += product_content;
                slider_panel.innerHTML += product_content;

            } // for

        } catch (error) {
            console.error('Error fetching CSV:', error);
        }

        //////////////////////////////////////////////////////////////////////////////////

        let magnified_btns = document.querySelectorAll(".magnified_btn");

        console.log("magnified_btns 数：", magnified_btns.length)

        let magnified_image_view = document.getElementById("magnified_image_view");
        let magnified_image_content = document.getElementById("magnified_image_content");

        let img_popup_close_btn = document.getElementById("img_popup_close_btn");

        img_popup_close_btn.addEventListener('click', (e) => {

            console.log("e :", e.currentTarget);
            magnified_image_view.style.visibility = 'hidden';
            magnified_image_content.innerHTML = '';

        });


        console.log("ボタン：", magnified_btns);

        for (let magnified_btn of magnified_btns) {

            magnified_btn.addEventListener('click', (e) => {

                console.log("クリックイベント処理開始-1 : ", e.target);
                console.log("クリックイベント処理開始-2 : ", e.target.title);
                console.log("クリックイベント処理開始-3 : ", e.target.id);

                let img_id = e.target.title;
                
                // 확대 이미지 팝업 활성화
                magnified_image_view.style.left = 'calc(50vw - 305px)';
                magnified_image_view.style.top = '10px';
                magnified_image_view.style.width = '610px';
                magnified_image_view.style.height = 'calc(915px + 20px)';
                magnified_image_view.style.backgroundColor = '#B3B3B3';
                magnified_image_view.style.visibility = 'visible';

                magnified_image_content.innerHTML 
                    += `<img class="img1" src="./pic/${img_id}_LM1.jpg" />
                        <img class="img2" src="./pic/${img_id}_LM2.jpg" />`;

                console.log("클릭 이벤트 처리끝");
            });

        } // for

        ////////////////////////////////////////////////////////////////////////////

        // swiper

        // 참고) https://swiperjs.com/get-started#initialize-swiper
        //       https://swiperjs.com/swiper-api#initialize-swiper
        // 
        // ※ swiper API DOC (기술문서) : https://swiperjs.com/swiper-api

        // ※ 슬라이드 인자들(매개변수) API DOC : https://swiperjs.com/swiper-api#parameters
        // ※ 슬라이드 방향성 인자(매개변수) API DOC : https://swiperjs.com/swiper-api#param-direction

        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,

            // 한번에 슬라이드 3개씩 표현
            // https://swiperjs.com/swiper-api#param-slidesPerView
            slidesPerView: 3,

            // 한번 슬라이드 표현시 묶어서 표현할 슬라이드 수
            // https://swiperjs.com/swiper-api#param-slidesPerGroup
            slidesPerGroup: 3,

            // 슬라이드간 간격
            // https://swiperjs.com/swiper-api#param-spaceBetween
            // spaceBetween : 10,

            // 슬라이드 중앙 정렬
            // https://swiperjs.com/swiper-api#param-centeredSlides
            centeredSlides: true,

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
            // scrollbar: {
            // 	el: '.swiper-scrollbar',
            // },
        }); 
        // swiper end
    
    } // async function
        
    fetchCSV('./csv/商品情報ー追加商品.csv');    


}); // document.addEventListener('DOMContentLoaded'

//} // window