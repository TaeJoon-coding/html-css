//parameters：https://swiperjs.com/swiper-api#parameters
//direction：https://swiperjs.com/swiper-api#param-direction
//https://swiperjs.com/swiper-api#param-slidesPerGroup

window.onload = () => {

    //スライドの構成
    //スライドコンテナ
    let swiperWrapper = document.querySelector(".swiper-wrapper");
    //変数「swiperWrapper」を宣言、
    //「querySelector」でclass「swiper-wrapper」を割り当て
    console.log("swiper-wrapper : ", swiperWrapper);
    //一旦機能はする。

    //イメージファイル
    let cookieImageFiles = [
        //変数「cookieImageFiles」を宣言
        'chocolate_chip.png',
        'german_chocolate.png',
        'triple_chocolate.png',
        'lemonade.png',
        'Mexican_Hot_Chocolate.png',
        'molasses_crinkle.png'
    ];
        //六つのイメージファイルを配列として変数「cookieImageFiles」に割り当て

    let slide = '';
    //変数「slide」を宣言、
    //空っぽの変数にし、「for文」を作成する。

    //スライドコンテナ <- スライド
    for (let cookieImageFile of cookieImageFiles) {
        /**
         * for(let 変数1 of 変数2)
         * let 変数1：
         * ループ処理中に各要素を参照にするための変数1を宣言
         * ループを繰り返すたびに変数1に変数2という「反復可能なオブジェクト」の「現在の要素」が代入される。
         * letだから変数1のスコープが「このforループ」内に限定される。
         * 
         * of 変数2：
         * 「for...ofループ」特有のキーワード、「変数2」を反復処理を行う対象のオブジェクトを指定。
         * 「変数2」が持つ各要素に対してループ処理
         */
        slide = `<div class = "swiper-slide cookie-image-pnl">
        
                    <!-- htmlのスライド部分のdivの製作、直接ここの内容をいちいち作成するのもありだが、こうすると一気に複数のスライドを作成できる -->
                    
                    <img src = "../img/pic/${cookieImageFile}" class = "cookie-image" />
                    <!-- 配列が割り当てられた変数「cookieImageFiles」で作った反復文により、複数の「slide」を生成 -->

                </div>`
        swiperWrapper.innerHTML += slide;
        //+= で次々追加
    }//for

    const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    direction: 'horizontal',
    loop: true,
    //group slide
    slidesPerView: 3,
    slidesPerGroup: 3,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    /*
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    */

    });

}//onload
