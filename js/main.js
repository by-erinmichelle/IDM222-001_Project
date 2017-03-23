var hamburger = document.getElementById('hamburger');

var navList = document.getElementById('nav-list');

var breakPoint = 825;


// Listen for the hamburger button to be clicked.
hamburger.addEventListener('click', function(evt) {
  displayMenu(evt, 'hamburger');
}, false);

function displayMenu(evt) {
  navList.classList.toggle('visually-hidden');
}

//check for breakpoint
window.addEventListener('resize', function() {

  if (window.innerWidth >= breakPoint) {
    navList.classList.remove('visually-hidden');
   
  } else {
    navList.classList.add('visually-hidden');
  }
});

(function() {
  if (window.innerWidth >= breakPoint)
    navList.classList.remove('visually-hidden');
})();

//slideshow
var slideIndex = 0;
carousel(slideIndex);

function currentSlide(n) {
  carousel(slideIndex = n);
}

function carousel(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1} 
  	if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].className = slides[i].className.replace(" highlight", "");

    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
  	slides[slideIndex-1].className += " highlight";
  	dots[slideIndex-1].className += " active";
 
    setTimeout(carousel, 6000); // Change image every 6 seconds
}
