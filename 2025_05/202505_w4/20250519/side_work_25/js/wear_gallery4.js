window.onload = () => {

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
           
           let cnt = 1;
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
                                        <div class="wear-pnl">

                                            <!-- 商品のいいね！登録 -->
                                            <div class="wear-preferred-item">
                                                <span class="material-symbols-outlined preferred-item-icon">
                                                    favorite
                                                </span>              
                                            </div>
                                            <!--// 商品のいいね！登録 -->

                                            <!-- 衣服サムネパネル --> 
                                            <div class="wear-gallery-pic">
                                                <img class="img1" src="../../img/pic/${product[0]}_LM1.jpg" />
                                                <img class="img2" src="../../img/pic/${product[0]}_LM2.jpg" />
                                            </div>
                                            <!--// 衣服サムネパネル -->

                                            <!-- 生地スタイル -->
                                            <div class="wear-fabric">
                                                <div class="wear-fabric-icon">             
                                                    <img class="img1" src="../../img/pic/${product[0]}_LM1.jpg" />
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
                                                    `<span class="new-wear-icon">新商品</span>`: ''}
                                            </div> 
                                            <!--// 新商品 -->

                                        </div>
                                        <!--// 衣服単品パネル -->`;

                                           
                                    console.log("個別商品陳列、終：", cnt)
                                   let wrap = document.querySelector(".wrap");
                                   wrap.innerHTML += product_content;
                                   cnt++;
                           
            }//for
           

       } catch (error) {
           console.error('Error fetching CSV:', error);
       }
   }

   //fetchCSV('https://example.com/data.csv');
   fetchCSV('./csv/商品情報ー追加商品.csv');
    
}//window
