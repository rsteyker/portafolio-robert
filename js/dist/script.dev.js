"use strict";

var menuVisible = false; //Funcion que oculta o muestra el menú

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccinar() {
  //Oculto el menú una vez que selecciono una opción
  document.getElementById("nav").classList = "";
  menuVisible = false;
} // Formulario Contacto


var formulario = document.querySelector('#form');
var sendForm = document.querySelector('#email');
formulario.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  var form = new FormData(this);
  sendForm.setAtribute('href', "mailto:rmarchino95@gmail.com?name=".concat(form.get('name'), " - ").concat(form.get('numero')));
}
//# sourceMappingURL=script.dev.js.map
