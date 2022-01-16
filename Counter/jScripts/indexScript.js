const btnReset = document.querySelector(".reset");
const btnInc = document.querySelector(".inc");
const btnDec = document.querySelector(".dec");

btnReset.addEventListener("click", function () {
  document.querySelector(".middle").textContent = 0;
});

btnInc.addEventListener("click", function () {
  document.querySelector(".middle").textContent++;
});

btnDec.addEventListener("click", function () {
  document.querySelector(".middle").textContent--;
});
