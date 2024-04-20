const colors = ["red", "green", "#fbfb", "blue"];
const color = document.querySelector(".span");
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
});
