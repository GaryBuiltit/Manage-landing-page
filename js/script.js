const hamMenuBtn = document.getElementById("menu-btn");
const hamMenu = document.getElementById("menu");

hamMenuBtn.addEventListener("click", () => {
  hamMenuBtn.classList.toggle("open");
  hamMenu.classList.toggle("hidden");
  hamMenu.classList.toggle("flex");
});

function showTest(n) {
  let selectedTest = document.getElementById("test" + n);
  let clickedDot = document.getElementById("dot" + n);
  let allDots = document.getElementsByClassName("dot");

  for (let i = 1; i < allDots.length + 1; i++) {
    document.getElementById("dot" + i).classList.remove("bg-brightRed");
    document.getElementById("test" + i).classList.replace("flex", "hidden");
  }

  clickedDot.classList.add("bg-brightRed");
  selectedTest.classList.replace("hidden", "flex");
}
