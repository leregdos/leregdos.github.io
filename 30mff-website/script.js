let slideIndex = 0; // starting index is 0
showSlide(slideIndex); // show first picture of slide

function moveSlide(n) {
  // this function is called whenever the change slide button is called
  showSlide((slideIndex += n)); // show next or previous slide
}

// this function shows a slide with the corresponding index
function showSlide(n) {
  const slides = document.getElementsByClassName("slide"); // get all slides
  if (n >= slides.length) {
    // if the index exceeds the slide length, loop back to the start
    slideIndex = 0;
  }
  if (n < 0) {
    // if the index goes below 0, loop back to the end
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    // loop through all the slides to hide all the slides
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block"; // show only the current slide
}
