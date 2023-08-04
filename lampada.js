var lamp = window.document.getElementById("lampada");

alert("Clique em ligar para comecar")

document.getElementById("lampada").addEventListener("click", function () {
  document.getElementById("Ligar").style.display = "none";
});

document.getElementById("lampada").addEventListener("click", function () {
  document.getElementById("Desligar").style.display = "none";
});

document.getElementById("restaurar").addEventListener("click", function () {
  document.getElementById("Desligar").style.display = "block";
});

document.getElementById("restaurar").addEventListener("click", function () {
  document.getElementById("Ligar").style.display = "block";
  window.document.getElementsByTagNameNS("input").style = "align-items: center";
});

function Ligar() {
  lamp.src = "ligada.svg";
}

function Desligar() {
  lamp.src = "desligada.svg";
}

function Quebrar() {
  lamp.src = "quebrada.svg";
}

function Restaurar() {
  lamp.src = "restaurada.svg";
}

var button = document.getElementById("restaurar");
var image = document.getElementById("lampada");

image.addEventListener("click", function () {
  button.style.display = "block";
});

button.addEventListener("click", function () {
  button.style.display = "none";
});
