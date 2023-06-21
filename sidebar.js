const botonContacto = document.getElementById("boton-contacto");
const infoSidebar = document.getElementById("info-sidebar");
const botonVolver = document.getElementById("boton-volver");
const formSidebar = document.getElementById("form-sidebar");

botonContacto.addEventListener("click", () => {
    infoSidebar.style.display = "none";
    formSidebar.style.display = "block"
});

botonVolver.addEventListener("click", () => {
    infoSidebar.style.display = "block";
    formSidebar.style.display = "none";
});