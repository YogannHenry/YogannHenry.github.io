/* ----------------------------PopUp start-------------------------- */
// const articleLink = document.getElementById('link-pop-up');
// console.log('articleLink', articleLink)
// articleLink.addEventListener("click", handleClickpopUp)

const allArticle = document.querySelectorAll('#link-pop-up')
console.log('array',allArticle)

for (let i=0; i < allArticle.length; i++) {
  allArticle[i].addEventListener("click", handleClickpopUp);
}


function handleClickpopUp(eventParam){
    eventParam.preventDefault();
    // sélectionner le parent balise aside newletter
const classAside = document.querySelector('.popUp');
classAside.classList.remove('popUp--hidden');

}

const asideButton = document.querySelector('.popUp__button');
asideButton.addEventListener("click", handleClickClosePopUp)

function handleClickClosePopUp (eventParam2){
eventParam2.preventDefault();

const classAside = document.querySelector('.popUp');
classAside.classList.add('popUp--hidden');

}

/* ----------------------------PopUp End-------------------------- */


/* ----------------------------SlideShowQuote start-------------------------- */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
/* ----------------------------SlideShowQuote end-------------------------- */


/* ----------------------------SlideCard with swiperJs start-------------------------- */
var swiper = new Swiper('.slide-container', {
  slidesPerView: 3,
  direction: getDirection(),
  loop: true,
  
  grabCursor: "true",
  centerSlide: "true",
  fade: "true",
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}
/* ----------------------------SlideCard with swiperJs end-------------------------- */

/* ----------------------------Gestion du multi popUp-------------------------- */
