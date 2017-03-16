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
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
  	dots[slideIndex-1].className += " active";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}
