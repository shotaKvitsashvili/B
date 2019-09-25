// Scroll Down speed
var down = document.getElementById("toAbout");
function delay() {
    setTimeout(() => {
        location.href = "#about";
    }, 500);
}
//To Top and Nav
var nav = document.querySelector("NAV");
var toTop = document.getElementById("toTop");
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 0) {
        nav.classList.add("scrolled");
        toTop.classList.add("toTop");
    }
    else if (currentScrollPos == 0) {
        nav.classList.remove("scrolled");
        toTop.classList.remove("toTop");
    }
    prevScrollpos = currentScrollPos;
}
// Slider
var inner = document.querySelector('.slider-inner-container');
var image = document.querySelector(".image");
var n = 0;
var sliderWidth = document.querySelectorAll(".slider-info").length;
var a = 0;
var auto = setInterval(autoMove, 3000);
// sliding
function move(x) {
    if (x == 1) {
        n -= 100;
        inner.style.left = n + "%";
        a++;
        if (a >= sliderWidth) {
            a = 0;
            n = a * 100;
            inner.style.left = n + "%";
        }
    }
    else if (x == 2) {
        n += 100;
        inner.style.left = n + "%";
        a--;
        if (a <= 0) {
            a = sliderWidth;
            n = (a - 1) * -100;
            inner.style.left = n + "%";
        }
    }
}

// Autoplay
function autoMove() {
    document.getElementsByClassName("slider-arrow")[1].click();
}
// Autoplay stop/continue on mouseover/leave
document.getElementsByClassName('slider-controls')[0].addEventListener("mouseover", function () {
    clearInterval(auto);
})
document.getElementsByClassName('slider-controls')[0].addEventListener("mouseleave", function () {
    auto = setInterval(autoMove, 5000);
});
// Tabs
function show(tabName, tabButton) {
    var tab = document.getElementsByClassName("tab");
    for (var i = 0; i < tab.length; i++) {
        tab[i].style.display = 'none';
        tab[i].style.animation = 'fade .7s ease-in-out';
    }
    document.getElementById(tabName).style.display = 'flex';
    var j;
    var t = document.getElementsByClassName("tabbutton");
    for (j = 0; j < t.length; j++) {
        t[j].classList.remove('activebutton')
    }
    document.getElementById(tabButton).classList.add('activebutton');
}
// Picture modal
function popUp(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.querySelector("#modal img");
    var body = document.querySelector("body");
    var src = img.src;
    modal.style.display = "block";
    modalImg.src = src;
    body.style.zIndex = "0";
    body.classList.add("blur");
    body.style.overflow = "hidden";
}
function closeModal() {
    var modal = document.getElementById("modal");
    var modalImg = document.querySelector("#modal img");
    var body = document.querySelector("body");
    modal.style.display = "none";
    body.classList.remove("blur");
    body.style.overflow = "visible";
}

// Responsive menu
var windowSize = document.body.clientWidth;
function menu() {
    document.getElementById("menu").classList.toggle("hidden-menu");
    document.getElementById("menu").classList.toggle("responsive-bg");
    document.getElementById("hidden-logo").classList.toggle("remove-logo");
}
function resp() {
    x = document.body.clientWidth;
    if (x > 860) {
        document.getElementById("menu").classList.remove("hidden-menu");
        document.getElementById("menu").classList.remove("responsive-bg");
        document.getElementById("hidden-logo").classList.remove("remove-logo");
    }
}
