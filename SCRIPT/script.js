//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n){
//    showSlides(slideIndex += n);
//};
//
//function currentSlide(n){
//    showSlides(slideIndex = n);
//};
//
//function showSlides(n){
//    var i;
//    var slides = document.getElementsByClassName('mySlides');
//    var dots = document.getElementsByClassName('dot');
//    
//    if(n > slides.length){
//        slideIndex = 1
//    };
//    if(n < 1){
//        slideIndex= slides.length;
//    };
//    for(i = 0; i < slides.length; i++){
//        slides[i].style.display = "none";    
//    };
//    for(i = 0; i < dots.length; i++){
//        dots[i].className = dots[i].className.replace("active", "");    
//    };
//    slides[slideIndex-1].style.display = "block";
//    dots[slideIndex-1].className += " active";
//};
//------------------------carousel--------------------------


//-----------------ServicesCars--------------

var LeftContent = document.querySelector('.LeftContent'),
    textLeftContent0 = LeftContent.querySelectorAll('p')[0],
    textLeftContent1 = LeftContent.querySelectorAll('p')[1],
    textLeftContent2 = LeftContent.querySelectorAll('p')[2],
    textLeftContent3 = LeftContent.querySelectorAll('p')[3],
    textLeftContent4 = LeftContent.querySelectorAll('p')[4],
    textLeftContent5 = LeftContent.querySelectorAll('p')[5];
var RightContent = document.querySelector('.RightContent'),
    textRightContent0 = RightContent.querySelectorAll('p')[0],
    textRightContent1 = RightContent.querySelectorAll('p')[1],
    textRightContent2 = RightContent.querySelectorAll('p')[2],
    textRightContent3 = RightContent.querySelectorAll('p')[3],
    textRightContent4 = RightContent.querySelectorAll('p')[4];
var image = document.getElementById('ContentCarsDetails').querySelector("img");


textLeftContent0.onmousemove = function(){
    image.setAttribute("src", "Img/auto/autoAСPP.jpg");
};
textLeftContent1.onmousemove = function(){
    image.setAttribute("src", "Img/auto/autoEngine.jpg");
};
textLeftContent2.onmousemove = function(){
    image.setAttribute("src", "Img/auto/autoCold.jpg");
};
textLeftContent3.onmousemove = function(){
    image.setAttribute("src", "Img/auto/autoElectronics.jpg");
};
textLeftContent4.onmousemove = function(){
    image.setAttribute("src", "Img/auto/autoBreak.jpg");
};
textLeftContent5.onmousemove = function(){
    image.setAttribute("src", "Img/auto/autoSuspension.jpg");
};
textRightContent0.onmousemove = function(){
    image.setAttribute("src", "Img/auto/autoTireService.jpg");
};
textRightContent1.onmousemove = function(){
    image.setAttribute("src", "Img/auto/autoComputerDiagnosis.jpg");
};
textRightContent2.onmousemove = function(){
    image.setAttribute("src", "Img/auto/autoTO.jpg");
};
textRightContent3.onmousemove = function(){
    image.setAttribute("src", "Img/auto/autoSecurit.jpg");
};
textRightContent4.onmousemove = function(){
    image.setAttribute("src", "Img/auto/autoOtherWorks.jpg");
};

//-----------------------ScrolMenu-------------------------


var menu = document.querySelector('#header');
var header = document.querySelector('#header h1');
var blockPhone = document.querySelector('#phone');
var nav = document.querySelector('#nav');
var ListNav = document.querySelectorAll('#nav>ul>li');
var activeLi = document.querySelector('.activeLi');
var coordsMenu = menu.getBoundingClientRect();


 function MenuFixed(){
    if(document.documentElement.scrollTop > 100){
        menu.style.position = "fixed";
        menu.style.height = 50 + "px";
        header.style.display = "none";
        blockPhone.style.display = "none";
        nav.style.top = 60 + 'px';
    }else{
        menu.style.position = 'absolute';
        menu.style.height = 120 + "px";
        header.style.display = "block";
        blockPhone.style.display = "block";
        nav.style.top = 120 + 'px';
    };
};
function refreshLi(){
    activeLi = document.querySelector(".activeLi");
};
for( var i = 0; i < ListNav.length; i++){
    ListNav[i].onclick = function reload(){
        activeLi.classList.remove('activeLi');
        this.classList.add('activeLi');
        refreshLi();
    };
};
function GoLine(){
    if(document.documentElement.scrollTop >= 651 && document.documentElement.scrollTop <= 1309 ){
        activeLi.classList.remove('activeLi');
        ListNav[1].classList.add("activeLi");
        refreshLi();
    }else if(document.documentElement.scrollTop >= 1310 && document.documentElement.scrollTop <= 1960){
        activeLi.classList.remove('activeLi');
        ListNav[2].classList.add("activeLi");
        refreshLi();
    }else if(document.documentElement.scrollTop >= 1961 && document.documentElement.scrollTop <= 2500){
        activeLi.classList.remove('activeLi');
        ListNav[3].classList.add("activeLi");
        refreshLi();
    }else{
        activeLi.classList.remove('activeLi');
        ListNav[0].classList.add("activeLi");
        refreshLi();
    };
};
window.addEventListener('scroll',MenuFixed);
window.addEventListener('scroll',GoLine);

//------------form----------

var closeForm = document.querySelector('.close');
var form = document.querySelector('#form');
var BtnSailForm = document.querySelector('.BtnSailForm');

BtnSailForm.onclick = function(){
    form.style.display = "block";
}
closeForm.onclick = function(){
    form.style.display = "none";
};
