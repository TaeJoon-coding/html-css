// 문-3) 기존의 부트스트랩 슬라이드에서 사용하였던 Javascript 도입부를 
// 그대로 옮겨서 초기 코드 부분을 완성하십시오.

let cookies = []; // 쿠키(들) 배열

// let cookieProduct = {}; // 쿠키 객체

// 생성자
function CookieProduct(name, content, price) {

    this.name = name;
    this.content = content;
    this.price = price;
}

// 문자열 대체 함수
function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

// 쿠키 순서 및 파일명 : 배열
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
                        1500,
                        2000,
                        3000,
                        1500,
                        1500,
                        1500,
                        2000,
                        2000,
                        1500,
                        2000,
                        1500,
                        2000,
                        1500,
                        2500
                    ];

// 메인(main)
window.onload = function() {

    // 쿠키 객체 배열 초기화

    // 위의 세가지 배열(cookie_image_files,
    // cookie_text, cookie_price)을 
    // cookies 라는 배열에 추가하는 
    // 구문을 작성합니다.
    for (let i = 0; i < cookie_image_files.length; i++)
    {
        cookies.push(new CookieProduct(cookie_image_files[i], 
                                       cookie_text[i], 
                                       cookie_price[i]));
    } // 

    // 화면 가용공간(viewport) 높이 설정
    let sections = document.querySelectorAll("[id$=_section]");

    for (let section of sections) {
        section.style.height = window.innerHeight;
    }

    // 슬라이더 이미지(쿠키) 로딩(추가)
    let cookie_image = "";

    ////////////////////////////////////////////////////////////////////////////////////////

    // 문-4) 쿠키 캐러셀 슬라이드 갤러리를 구성할 개별 슬라이드 패널들을 Javascript로 구성합니다.
    
    // 개별 슬라이드 패널 구성
    // 
    // 참고) https://swiperjs.com/get-started#add-swiper-html-layout
    /*
         <div class="swiper-wrapper">

            <!-- Slides -->
            <div class="swiper-slide">Slide 1</div> <!-- 개별 슬라이드 -->
            <div class="swiper-slide">Slide 2</div> <!-- 개별 슬라이드 -->
            <div class="swiper-slide">Slide 3</div> <!-- 개별 슬라이드 -->
            
            ...

        </div>
    */

    for (let i = 0; i < cookie_image_files.length; i++)
    {
        cookie_image = `<div class="swiper-slide"> 
                            
                            <div id="slider_text${i}" class="slider_text" style="color:yellow; z-index:10">

                                <span style="color:#fff; font-weight:bold; font-size:2em;">
                                    ${cookies[i].name}
                                </span>
                                
                                <br><br>

                                ${cookies[i].content}

                                <br><br>

                                <b>￦ ${cookies[i].price}</b>
                            </div>	
                            
                            <img src="../img/pic/${cookies[i].name}.png" 
                                 id="cookie_image${i}"									
                                 class="cookie_image" />
                                
                        </div>`; 

        let slider_panel = document.querySelector("div#slider_panel");

        slider_panel.innerHTML += cookie_image;

    } // for

    
    //////////////////////////////////////////////////////////////////////////

    // 문-5) 아래의 swiper 초기화 구문을 참고하여 swiper 갤러리 스크립트를 초기화합니다.
    //      단, 세로가 아닌 가로 방향으로 슬라이드가 전개될 수 있도록 설정을 변경하고 
    //      스크롤바에 대한 설정은 삭제(배제)합니다.

    // 참고) https://swiperjs.com/get-started#initialize-swiper
    //      https://swiperjs.com/swiper-api#initialize-swiper
    // 
    // ※ swiper API DOC (기술문서) : https://swiperjs.com/swiper-api

    // ※ 슬라이드 인자들(매개변수) API DOC : https://swiperjs.com/swiper-api#parameters
    // ※ 슬라이드 방향성 인자(매개변수) API DOC : https://swiperjs.com/swiper-api#param-direction
    

    const swiper = new Swiper('.swiper', {
		// Optional parameters
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
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
    });


} // window.onload 