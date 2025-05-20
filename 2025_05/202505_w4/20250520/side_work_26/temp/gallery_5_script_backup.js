
        let img_popup = document.getElementById("img_popup");
        
        img_popup.style.visibility = "hidden";
        img_popup.style.width = 0;
        img_popup.style.height = 0;
        /* ポップアップの初期状態を設定（隠し） */
        //let btn = document.getElementById("btn_TLSCM25621BLK");
    
        //let btns = document.querySelectorAll("button[title]");
        let btns = document.querySelectorAll("button[id^='btn_']");
        /*
        見れば分かるように複数の場合、「getElement」より「querySelector」のほうが吉。
        この場合、上記のボタンにセットアップされた「id」を読み込んで代入する。
        応用の可能性が膨大。
        */
    
        for (let btn of btns) {
    
            btn.onclick = (event) => {
                console.log("クリック", event.target.id);
                console.log("クリックタイトル", event.target.title);
    
                let pop_id = event.target.id;
                //pop_id = popid.split("_")[1];
                //純粋な商品ID「TLSCM25621BLK」を抽出。
                pop_id = pop_id.substring(4);
                console.log("pop_id : ", pop_id);
    
                /* 
                イメージ挿入
                ex) JWPOM25231GBE_LM1.jpg, JWPOM25231GBE_LM2.jpg
                ../../img/pic/JWPOM25231GBE_LM1.jpg
                */
                let img_popup_body = document.getElementById("img_popup_body");
                img_popup_body.innerHTML
                    = `<img src="../../img/pic/${pop_id}_LM1.jpg" />`;
    
                img_popup.style.visibility = "visible";
                /* ボタンをクリックすると、ポップアップが表示される。 */
            
            }//ウィンドウオープンハンドラー
    
            //ウインドウクローズハンドラー
            let close_btn = document.getElementById("close_btn");
            close_btn.addEventListener('click', () => {
    
                console.log("閉じる");
                //ウインドウを隠す
                img_popup.style.visibility = "hidden";
                //img_popup.style.width = 0;
                //img_popup.style.height = 0;
                img_popup.style.innerHTML = '';     //イメージ拡大を削除（初期化）
    
            })
        
        }//for
