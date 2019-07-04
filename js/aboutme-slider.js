//прокрутка слайдера на js в обо мне
    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
    showDivs(slideIndex += n);
    }

    function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("my-slides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
    };

//авто прокрутка слайдера в обо мне
    var slideindex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("my-slides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
    }
    slideindex++;
    if (slideindex > x.length) {slideindex = 1} 
    x[slideindex-1].style.display = "block"; 
    setTimeout(carousel, 10000); 
    };