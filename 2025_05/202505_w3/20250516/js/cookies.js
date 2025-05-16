//parameters：https://swiperjs.com/swiper-api#parameters
//direction：https://swiperjs.com/swiper-api#param-direction
//https://swiperjs.com/swiper-api#param-slidesPerGroup

window.onload = () => {

    //スライドの構成
    //スライドコンテナ
    let swiperWrapper = document.querySelector(".swiper-wrapper");
    //変数「swiperWrapper」を宣言、
    //「querySelector」でclass「swiper-wrapper」を割り当て

    //イメージファイル
    let cookieImageFiles = [
        //変数「cookieImageFiles」を宣言
        'chocolate_chip.png',
        'german_chocolate.png',
        'triple_chocolate.png',
        'lemonade.png',
        'Mexican_Hot_Chocolate.png',
        'molasses_crinkle.png',
        'Oatmeal_Golden_Raisin.png',
        'Oatmeal_Chocolate_Chip.png',
        'Peanut_Butter.png',
        'Peanut_Butter_Cup.png',
        'white_choc_macedamia.png',
        'Root_Beer_Float.png',
        'Snickerdoodle.png',
        'Sugar.png'
    ];  //cookieImageFiles
        //六つのイメージファイルを配列として変数「cookieImageFiles」に割り当て

    let cookieDetails = [
        'A classic cookie made with real butter white and brown sugars and tons of of high quality chocolate chips. We don\'t skimp on the chips!',
        'This is a German chocolate based cookie with tons of caramely coconut and whole pecans. No need to travel to Germany for an authentic German Chocolate cookie!',
        'Especially for chocolate lovers. Triple chocolate means lots of melted chocolate very little flour Hershey\'s cocoa powder and plenty of chocolate chips making this cookie extremely rich. Crackly top and soft in the middle - chocolate heaven!',
        'A summer inspired cookie made with lemonade concentrate fresh lemon juice and pure lemon extract. The flavor of lemonade is all throughout this soft pound cake-like cookie and it is delicious! Yummy lemon icing and yellow sparkly sprinkles decorate the top.',
        'This is one of our most unique cookies for people who like a little spicy heat. This cookie is flavored with chocolate cocoa powder and rolled in a mixture of cinnamon chili powder and cayenne pepper - a delicious flavor combination. We dare you to try it!',
        'This recipe is from April\'s grandmother Alice of Pinehurst NC. A tried and true cookie that is hard to find these days. Made with brown sugar molasses and an incredible mix of spices including cinnamon ginger and cloves. These cookies are chewy dense and old-fashionably good.',
        'These cookies are like a bowl of oatmeal to go. We use old fashioned rolled oats for a more dense cookie butter and brown sugar Madagascar vanilla a touch of kosher salt and our special twist - locally produced honey and plump golden raisins.',
        'So many people requested this cookie we just had to bake it for you! Oatmeal chocolate chip is a dense chewy cookie filled with oats and our special twist: white AND dark chocolate chips. A sprinkle of sea salt on top before it is baked really makes your taste buds pop!',
        'Lots of peanut butter go in to these cookies and of course they have the essential fork criss crosses on top.',
        'This is our awesome flavor created for all you peanut butter & chocolate lovers out there. You are going to love this! A chewy chocolate cookie stuffed with big chunks of peanut butter cups swirled with more peanut butter and a whole peanut butter cup sunk right in the middle. Heaven!',
        'This rich chewy cookie is one that customers demanded year after year. However we didn\'t want to add it to the line up until it was perfect (and until bulk macadamias came down in price!). In every bite you will enjoy the contrast of crunchy salty macadamia nuts and smooth creamy white chocolate chips. Cookie paradise!',
        'The People love root beer so why not a root beer cookie? This is a soft chewy cookie. Root beer extract is in the cookie and in the icing on the top. One bite and you will swear you are sipping on a creamy root beer float.',
        'You may remember these from when you were a kid - a crinkly topped sugar cookie rolled in cinnamon-sugar. Great with coffee or tea.',
        'A good old fashioned cookie simple but heavenly. Choose plain sugar cookies or sugar cookies decorated with white icing and rainbow sprinkles. Great for kids of all ages.'
    ];      //cookieDetails

    let cookiePrices = [
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

    //品名
    let cookieNames = [
            'chocolate chip',
            'german chocolate',
            'triple chocolate',
            'lemonade',
            'Mexican Hot Chocolate',
            'molasses crinkle',
            'Oatmeal Golden Raisin',
            'Oatmeal Chocolate Chip',
            'Peanut Butter',
            'Peanut Butter Cup',
            'white choc macedamia',
            'Root Beer Float',
            'Snickerdoodle',
            'Sugar'
    ];  

    /*
    let cookieClass = {
        cookieName = '',
        cookieDetail = '',
        cookiePrice = 0,
        cookieImageFile = ''
    };
    これは一番原始的な構造
    */

    /*
    class CookieClass {
        cookieName = '';
        cookieDetail = '';
        cookiePrice = 0;
        cookieImageFile = '';

        constructor(cookieName, cookieDetail, cookiePrice, cookieImageFile) {

        }
    }
    */  

    //個別商品に対するクラスの生成
    function CookieClass(cookieName, cookieDetail, cookiePrice, cookieImageFile) {
        this.cookieName = cookieName; 
        this.cookieDetail = cookieDetail; 
        this.cookiePrice = cookiePrice; 
        this.cookieImageFile = cookieImageFile;
    }

    //商品ごと
    let cookies = new Array(cookieNames.length);        //case_1）
    //let cookies = Array();    //配列の長さ：0         //case_2）
    //let cookies = [];         //配列の長さ：0         //case_2）

    console.log("配列の要素の数：", cookies.length);   

    //商品配列要素の追加 => 反復文
    for (let i = 0; i < cookies.length; i++) {
        //case_1）
        cookies[i] = new CookieClass(cookieNames[i], 
            cookieDetails[i], 
            cookiePrices[i], 
            cookieImageFiles[i]);

        /**
         * case-2)
         * cookies.push(new CookieClass(
         * cookieNames[i], 
         * cookieDetails[i],
         * cookiePrices[i], 
         * cookieImageFiles[i]));
         * 
         */
    }


    let slide = '';
    //変数「slide」を宣言、
    //空っぽの変数にし、「for文」を作成する。

    //スライドコンテナ <- スライド
    for (let cookie of cookies) {
        //「let cookies = new Array(cookieNames.length);」で宣言したので、
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
        
        slide = `<div class="swiper-slide cookie-image-pnl">
                    <!-- カラム方向展開、イメージ・品名・説明・単価 -->
                    <div class="cookie-pnl">
                        <div class="cookie-wrap">
                                <img src = "../img/pic/${cookie.cookieImageFile}" class="cookie-image" />
                        </div>
                            <div>${cookie.cookieName}</div>
                            <div class="cookie-detail">${cookie.cookieDetail}</div>
                            <div>${cookie.cookiePrice}JPY</div>
                        
                    </div>

                </div>`;


        /*
        slide = `<div class = "swiper-slide cookie-image-pnl">
                    <!-- htmlのスライド部分のdivの製作、直接ここの内容をいちいち作成するのもありだが、こうすると一気に複数のスライドを作成できる -->
                    
                    <img src = "../img/pic/${cookieImageFile}" class = "cookie-image" />
                    <!-- 配列が割り当てられた変数「cookieImageFiles」で作った反復文により、複数の「slide」を生成 -->

                </div>`
        */
        swiperWrapper.innerHTML += slide;
        //+= で次々追加
    }//for

    const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    //group slide
    /*
    slidesPerView: 3,
    slidesPerGroup: 3,
    */

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
