// window.onload = () => {
document.addEventListener('DOMContentLoaded', () => {

    // 단가 천단위 "," 포맷 처리
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    // 이미지 팝업 닫기
    function img_popup_close(img_id) {

        console.log("img_id : ", img_id);
    }

    // async function fetchCSV(url) {
    async function fetchCSV(url) {

        let wrap = document.querySelector(".wrap"); // wrap 컨테이너

        try {
            const response = await fetch(url);
            const data = await response.text();
            
            // CSV -> JSON
            let json = Papa.parse(data.trim()); // 공백 제거
            console.log("json : ", json.data);
            let products = json.data;                 
            products.shift(); // 배열의 첫줄(첫 요소:컬럼) 제거

            console.log("상품 정보들 :", products);
            console.log("상품 수 :", products.length); // 상품수

            for (let product of products) {

                let product_content = 
                `<!-- 의류 단품 패널 -->
                    <div class="wear-pnl">

                        <!-- 의류 관심 상품(좋아요) 등록 -->
                        <div class="wear-preferred-item">
                            <span class="material-symbols-outlined preferred-item-icon">
                                favorite
                            </span>              
                        </div>
                        <!--// 의류 관심 상품(좋아요) 등록 -->

                        <!-- 의류 썸네일 사진 패널 -->              
                        <div class="wear-gallery-pic">

                            <!-- 큰 그림 확대 버튼 추가 -->
                            <a href="#" class="magnified_btn" title="${product[0]}">
                                <img class="img1" src="./pic/${product[0]}_LM1.jpg" title="${product[0]}" />
                                <img class="img2" src="./pic/${product[0]}_LM2.jpg" title="${product[0]}" />
                            </a>

                        </div>
                        <!--// 의류 썸네일 사진 패널 -->

                        <!-- 원단 스타일 -->제어
                        <div class="wear-fabric">
                            <div class="wear-fabric-icon">             
                                <img src="./pic/${product[0]}_LM1.jpg" />
                            </div>
                        </div>
                        <!--// 원단 스타일 -->

                        <!-- 브랜드 -->
                        <div class="brand-name">
                            ${product[3]}
                        </div>
                        <!--// 브랜드 -->

                        <!-- 상품명-->
                        <div class="wear-name">
                            ${product[1]}
                        </div>
                        <!--// 상품명-->

                        <!-- 상품 단가 -->
                        <div class="wear-price">
                            ${numberWithCommas(product[4])} 원                                
                        </div>
                        <!--// 상품 단가 -->

                        <!-- 상품 추천 별점 및 상품평 -->
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
                        <!--// 상품 추천 별점 및 상품평 -->

                        <!-- 신상품 여부 -->
                        <div class="new-wear">
                            ${product[5] == 'O' ? 
                                `<span class="new-wear-icon">신상품</span>` : ''}
                            
                        </div> 
                        <!--// 신상품 여부 -->

                    </div>
                    <!--// 의류 단품 패널 -->`;
                
                // let wrap = document.querySelector(".wrap");
                wrap.innerHTML += product_content;

            } // for

        } catch (error) {
            console.error('Error fetching CSV:', error);
        }

        //////////////////////////////////////////////////////////////////////////////////

        let magnified_btns = document.querySelectorAll(".magnified_btn");

        console.log("magnified_btns 갯수 : ", magnified_btns.length)

        let magnified_image_view = document.getElementById("magnified_image_view");
        let magnified_image_content = document.getElementById("magnified_image_content");

        let img_popup_close_btn = document.getElementById("img_popup_close_btn");

        img_popup_close_btn.addEventListener('click', (e) => {

            console.log("e :", e.target);
            magnified_image_view.style.visibility = 'hidden';
            magnified_image_content.innerHTML = '';

        });


        console.log("버튼 :", magnified_btns);

        for (let magnified_btn of magnified_btns) {

            magnified_btn.addEventListener('click', (e) => {

                console.log("클릭 이벤트 처리 시작-1 : ", e.target);
                console.log("클릭 이벤트 처리 시작-2 : ", e.target.title);

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
    
    } // async function

        
    fetchCSV('./csv/상품정보-추가상품.csv');

// } // window
}); // document.addEventListener('DOMContentLoaded'