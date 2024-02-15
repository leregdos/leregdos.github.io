let slideIndex = 0;
showSlide(slideIndex);

function moveSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
