var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expandir');
});

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    slideIndex++;
    setTimeout(carousel, 2000);
}