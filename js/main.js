    var link = document.querySelector(".site-list__button");
    var menu = document.querySelectorAll(".site-list__item");

    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        for(var i=0;i<menu.length;i++)menu[i].classList.toggle("site-list__item--active");
    });

    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        link.classList.toggle("site-list__button--active")
    });

    var Link = document.querySelector(".site-lists__button");
    var Menu = document.querySelectorAll(".site-lists__item");

    Link.addEventListener("click", function (evt) {
        evt.preventDefault();
        for(var i=0;i<Menu.length;i++)Menu[i].classList.toggle("site-lists__item--active");
    });

    Link.addEventListener("click", function (evt) {
        evt.preventDefault();
        Link.classList.toggle("site-lists__svg--active")
    });

    var slide = ["switch1" , "switch2" , "switch3" , "switch4"];
    var i = 0;

    setInterval(function(){
    document.getElementById(slide[i]).click();
    i = (i+1)%slide.length;}, 10000);

//авто прокрутка слайдера на css
    var slide = ["switch1" , "switch2" ];
    var i = 0;

    setInterval(function(){
    document.getElementById(slide[i]).click();
    i = (i+1)%slide.length;}, 5000);

//прокрутка слайдера в портфолио на js
    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    };

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("portfolio-slider__my-slides");
        if (n > x.length) {slideIndex = 1};
        if (n < 1) {slideIndex = x.length};
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    };
    x[slideIndex-1].style.display = "flex"; 
    };

//активация работ asy
    var portfolioAsy = document.querySelector(".portfolio-asy");
    var asyActive = document.querySelector(".portfolio-slider__work");
    var asyDisabled = document.querySelector(".portfolio");
    var asyClosed = document.querySelector(".portfolio-slider__button-closed");

    portfolioAsy.addEventListener("click", function (evt) {
        evt.preventDefault();
        asyActive.classList.add("portfolio-slider__work-active");
        asyDisabled.classList.add("hide-block");
    });

    asyClosed.addEventListener("click", function (evt) {
        evt.preventDefault();
        asyActive.classList.remove("portfolio-slider__work-active");
        asyDisabled.classList.remove("hide-block");
    });

//активация работ volleyball
    var portfolioVolleyball = document.querySelector(".portfolio-volleyball");
    var volleyballActive = document.querySelector(".portfolio-slider__volleyball");
    var volleyballDisabled = document.querySelector(".portfolio");
    var volleyballClosed = document.querySelector(".volleyball__button-closed");

    portfolioVolleyball.addEventListener("click", function (evt) {
        evt.preventDefault();
        volleyballActive.classList.add("portfolio-slider__volleyball-active");
        volleyballDisabled.classList.add("hide-block");
    });

    volleyballClosed.addEventListener("click", function (evt) {
        evt.preventDefault();
        volleyballActive.classList.remove("portfolio-slider__volleyball-active");
        volleyballDisabled.classList.remove("hide-block");
    });

/*цифровой шврж*/
    function initComparisons() {
        var x, i;
    /*найти все элементы с классом наложения class:*/
        x = document.getElementsByClassName("overlay");
        for (i = 0; i < x.length; i++) {
    /*один раз для каждого элемента «наложения»:
    передать элемент "оверлей" в качестве параметра при выполнении функции compareImages*/
        compareImages(x[i]);
        }
    function compareImages(img) {
        var slider, img, clicked = 0, w, h;
    /*получить ширину и высоту элемента img*/
        w = img.offsetWidth;
        h = img.offsetHeight;
    /*установите ширину элемента img на 50%:*/
        img.style.width = (w / 2) + "px";
    /*создать слайдер:*/
        slider = document.createElement("div");
        slider.setAttribute("class", "cartoon-slider");
    /*вставить слайдер*/
        img.parentElement.insertBefore(slider, img);
    /*поместите ползунок посередине:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /*выполнять функцию при нажатии кнопки мыши:*/
        slider.addEventListener("mousedown", slideReady);
    /*и еще одна функция, когда кнопка мыши отпущена:*/
        window.addEventListener("mouseup", slideFinish);
    /*или коснулся (для сенсорных экранов:*/
        slider.addEventListener("touchstart", slideReady);
     /*и выпущен (для сенсорных экранов:*/
        window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
    /*предотвратить любые другие действия, которые могут возникнуть при перемещении по изображению:*/
        e.preventDefault();
    /*ползунок теперь щелкнул и готов к перемещению:*/
        clicked = 1;
    /*выполнить функцию при перемещении ползунка:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
        }
    function slideFinish() {
    /*ползунок больше не нажимается:*/
        clicked = 0;
        }
    function slideMove(e) {
        var pos;
    /*если ползунок больше не нажимается, выйдите из этой функции:*/
        if (clicked == 0) return false;
    /*получить позицию курсора х:*/
        pos = getCursorPos(e)
    /*предотвратить размещение ползунка за пределами изображения:*/
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
    /*выполнить функцию, которая изменит размер наложенного изображения в соответствии с курсором:*/
        slide(pos);
        }
    function getCursorPos(e) {
        var a, x = 0;
        e = e || window.event;
    /*получить х позиции изображения:*/
        a = img.getBoundingClientRect();
    /*рассчитать координату х курсора относительно изображения:*/
        x = e.pageX - a.left;
    /*рассмотреть любую прокрутку страницы:*/
        x = x - window.pageXOffset;
        return x;
        }
    function slide(x) {
    /*изменить размер изображения:*/
        img.style.width = x + "px";
    /*установите ползунок:*/
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
            }
        }
    };


    var portfolioCartoon = document.querySelector(".portfolio-cartoons");
    var cartoonActive = document.querySelector(".portfolio-slider__cartoon");
    var cartoonDisabled = document.querySelector(".portfolio");
    var cartoonClosed = document.querySelector(".cartoon__button-closed");

    portfolioCartoon.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartoonActive.classList.add("portfolio-slider__cartoon-active");
        cartoonDisabled.classList.add("hide-block");
        initComparisons();
    });

    cartoonClosed.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartoonActive.classList.remove("portfolio-slider__cartoon-active");
        cartoonDisabled.classList.remove("hide-block");
        window.location.reload();                               
    });

/*Эффект распада*/

    var portfolioDecay = document.querySelector(".portfolio-decay");
    var decayActive = document.querySelector(".portfolio-slider__decay");
    var decayDisabled = document.querySelector(".portfolio");
    var decayClosed = document.querySelector(".decay__button-closed");

    portfolioDecay.addEventListener("click", function (evt) {
        evt.preventDefault();
        decayActive.classList.add("portfolio-slider__decay-active");
        decayDisabled.classList.add("hide-block");
        initComparisons();
    });

    decayClosed.addEventListener("click", function (evt) {
        evt.preventDefault();
        decayActive.classList.remove("portfolio-slider__decay-active");
        decayDisabled.classList.remove("hide-block");
        window.location.reload();                               
    });

/*3D текст*/

    var portfolioText3d = document.querySelector(".portfolio-text-3d");
    var text3dActive = document.querySelector(".portfolio-slider__text-3d");
    var text3dDisabled = document.querySelector(".portfolio");
    var text3dClosed = document.querySelector(".text-3d__button-closed");


    portfolioText3d.addEventListener("click", function (evt) {
        evt.preventDefault();
        text3dActive.classList.add("portfolio-slider__text-3d-active");
        text3dDisabled.classList.add("hide-block");
    });

    text3dClosed.addEventListener("click", function (evt) {
        evt.preventDefault();
        text3dActive.classList.remove("portfolio-slider__text-3d-active");
        text3dDisabled.classList.remove("hide-block");                              
    });
