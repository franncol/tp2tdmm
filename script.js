const btnBuscar = document.getElementById("btnBuscar");
const busqueda = document.getElementById("busqueda");

btnBuscar.addEventListener("click", () => {
    if (busqueda.style.display === "none" || busqueda.style.display === "") {
        busqueda.style.display = "block";
        busqueda.focus();
    } else {
        busqueda.style.display = "none";
    }
});

const slides = document.querySelectorAll('.slide');
let actual = 0;

document.querySelector('.izquierda').addEventListener('click', () => {
    slides[actual].classList.remove('activo');
    actual = (actual - 1 + slides.length) % slides.length;
    slides[actual].classList.add('activo');
});

document.querySelector('.derecha').addEventListener('click', () => {
    slides[actual].classList.remove('activo');
    actual = (actual + 1) % slides.length;
    slides[actual].classList.add('activo');
});