

// // Test insertion video back-up scroll fonction;:
document.getElementById("scroll-button").addEventListener("click", function() {
  document.querySelector('#next-page').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

// document.getElementById("scroll-button").addEventListener("click", function() {
//   // Ajouter la vidéo en plein écran
//   var videoElement = document.createElement("video");
//   videoElement.src = "./images/kamehameha.mp4";
//   videoElement.setAttribute("autoplay", "");
//   videoElement.setAttribute("muted", "");
//   videoElement.setAttribute("playsinline", "");
//   videoElement.setAttribute("controls", "");
//   videoElement.setAttribute("autoclose", "");
//   videoElement.style.position = "fixed";
//   videoElement.style.top = "0";
//   videoElement.style.left = "0";
//   videoElement.style.width = "100%";
//   videoElement.style.height = "100%";
//   videoElement.style.zIndex = "9999";
//   document.body.appendChild(videoElement);
  
//   // Fermer la vidéo une fois qu'elle est terminée
//   videoElement.addEventListener("ended", function() {
//     document.body.removeChild(videoElement);
//   });
  
//   // Faire défiler vers la page suivante
//   document.querySelector('#next-page').scrollIntoView({ 
//     behavior: 'smooth' 
//   });
// });






/* ----------------------------PopUp start-------------------------- */
// const articleLink = document.getElementById('link-pop-up');
// console.log('articleLink', articleLink)
// articleLink.addEventListener("click", handleClickpopUp)

// const allArticle = document.querySelectorAll('#link-pop-up')
// console.log('array',allArticle)

// for (let i=0; i < allArticle.length; i++) {
//   allArticle[i].addEventListener("click", handleClickpopUp);
// }


// function handleClickpopUp(eventParam){
//     eventParam.preventDefault();
//     // sélectionner le parent balise aside newletter
// const classAside = document.querySelector('.popUp');
// classAside.classList.remove('popUp--hidden');

// }

// const asideButton = document.querySelector('.popUp__button');
// asideButton.addEventListener("click", handleClickClosePopUp)

// function handleClickClosePopUp (eventParam2){
// eventParam2.preventDefault();

// const classAside = document.querySelector('.popUp');
// classAside.classList.add('popUp--hidden');

// }

document.addEventListener('DOMContentLoaded', () => {
  linkArticlesToPopups();
});

function linkArticlesToPopups() {
  const articles = document.querySelectorAll('.article');
  const popups = document.querySelectorAll('.popUp');
  console.log('pop', popups)

  articles.forEach((article, index) => {
    const link = article.querySelector('[data-link]');
    const popup = popups[index];
    console.log('data-link', link )
    link.addEventListener('click', (event) => {
      event.preventDefault();

      popup.classList.remove('popUp--hidden');
    });

    const closeButton = popup.querySelector('.popUp__button');
    closeButton.addEventListener('click', (event) => {
      event.preventDefault();

      popup.classList.add('popUp--hidden');
    });
  });
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
  slidesPerView: 'auto',
  direction: getDirection(),
  loop: true,
  slidesPerGroupSkip: 3,
  breakpoints: {
    790: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
    },
  },
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

/* ----------------------------slider hobbie start-------------------------- */
const slides2 = document.querySelectorAll('.slide2');
const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');
let currentSlide2 = 0;

function showSlide(index) {
    slides2.forEach((slide) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

showSlide(currentSlide2);

prevBtn2.addEventListener('click', () => {
  currentSlide2--;
    showSlide(currentSlide2);
    updateButtons();
});

nextBtn2.addEventListener('click', () => {
  currentSlide2++;
    showSlide(currentSlide2);
    updateButtons();
});

function updateButtons() {
    prevBtn2.disabled = currentSlide2 === 0;
    nextBtn2.disabled = currentSlide2 === slides2.length - 1;
}
