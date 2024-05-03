let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex - 1].style.display = 'block';  
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function prevSlide() {
  const slides = document.querySelectorAll('.slide');
  slideIndex--;
  if (slideIndex < 1) {slideIndex = slides.length}    
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  slides[slideIndex - 1].style.display = 'block';  
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  slides[slideIndex - 1].style.display = 'block';  
}

showSlides(); // Start auto slider