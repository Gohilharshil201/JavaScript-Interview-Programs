// Change the background color of a webpage using JavaScript.
const btnRed = document.getElementById("btnRed");
const btnYellow = document.getElementById("btnYellow");
const btnBlue = document.getElementById("btnBlue");
const btnGreen = document.getElementById("btnGreen");
const btnOrange = document.getElementById("btnOrange");
const btnClear = document.getElementById("btnClear");

function colorChanger() {
  document.body.style.backgroundColor = "red";
}

document.getElementById("btnYellow").addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

document.getElementById("btnBlue").addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

document.getElementById("btnGreen").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

document.getElementById("btnOrange").addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
});

document.getElementById("btnClear").addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});
