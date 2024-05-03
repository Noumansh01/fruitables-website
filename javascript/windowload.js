document.addEventListener("DOMContentLoaded", function() {
  var backToTopButton = document.querySelector(".back-arrow");
 
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 250) { // Adjust scroll height as needed
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
      
    }
  });

  backToTopButton.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
