// MOUSEOVER y MOUSEOUT Repuestos

let tituloCambiar1 = document.getElementById("tituloRe");
let imagenCambiar1 = document.getElementById("repServ");
imagenCambiar1.addEventListener("mouseover", cambiar1);
function cambiar1() {
  imagenCambiar1.style.backgroundImage = "url('imag/repuesto.jpg')";
  tituloCambiar1.style.display = "block";
}

imagenCambiar1.addEventListener("mouseout", volver1);
function volver1() {
  imagenCambiar1.style.backgroundImage = "url('imag/re.jpg')";
  tituloCambiar1.style.display = "none";
}

// MOUSEOVER y MOUSEOUT accesorios

let tituloCambiar2 = document.getElementById("tituloAcc");
let imagenCambiar2 = document.getElementById("repAcc");
imagenCambiar2.addEventListener("mouseover", cambiar2);
function cambiar2() {
  imagenCambiar2.style.backgroundImage = "url('imag/accesorios.jpg')";
  tituloCambiar2.style.display = "block";
}

imagenCambiar2.addEventListener("mouseout", volver2);
function volver2() {
  imagenCambiar2.style.backgroundImage = "url('imag/ac.jpg')";
  tituloCambiar2.style.display = "none";
}
