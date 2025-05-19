window.onload = () => {

    // 단가 천단위 "," 포맷 처리
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    async function fetchCSV(url) {
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
                /*
                console.log("상품 이미지 : %s", product[0]+"_LM1.jpg")                    
                console.log("상품명 : %s", product[1]);
                console.log("상품 브랜드 : %s", product[3]);
                console.log("상품 단가 : %s", product[4]);
                console.log("상품 신상품 여부 : %s", 
                            (product[5] == 'O' ? "신상품" : "기존상품"));
                console.log("상품 추천평 : %d", product[6]);

                console.log("-------------------");
                */

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
                            <img class="img1" src="./pic/${product[0]}_LM1.jpg" />
                            <img class="img2" src="./pic/${product[0]}_LM2.jpg" />
                        </div>
                        <!--// 의류 썸네일 사진 패널 -->

                        <!-- 원단 스타일 -->
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
                
                let wrap = document.querySelector(".wrap");
                wrap.innerHTML += product_content;

            } // for

        } catch (error) {
            console.error('Error fetching CSV:', error);
        }
    }

    // fetchCSV('../csv/상품정보-추가상품.csv');
    fetchCSV('./csv/상품정보-추가상품.csv');

} // window