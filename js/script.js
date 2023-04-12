const hamMenuBtn = document.getElementById("menu-btn");
const hamMenu = document.getElementById("menu");

hamMenuBtn.addEventListener("click", () => {
  hamMenuBtn.classList.toggle("open");
  hamMenu.classList.toggle("hidden");
  hamMenu.classList.toggle("flex");
});

function showTest(n) {
  let i;
  let testIndex = n - 1;
  let selectedTest = document.getElementByClassName(
    "testimonial" + testIndex.toString
  );
  let dot = document.getElementByClassName("dot" + testIndex.toString);
  selectedTest.classList.toggle("flex");
  dot.classList.toggle();

  // if (n > slides.length) {slideIndex = 1}
  // if (n < 1) {slideIndex = slides.length}
  // for (i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";
  // }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}
