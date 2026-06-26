const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");
const izquierda = document.querySelector(".izquierda");
const derecha = document.querySelector(".derecha");

let actual = 0;

function actualizarIndicadores() {
    indicadores.forEach((ind, i) => {
        ind.classList.toggle("activo", i === actual);
    });
}

if (slides.length > 0) {

    actualizarIndicadores();

    if (izquierda) {
        izquierda.addEventListener("click", () => {

            slides[actual].classList.remove("activo");

            actual = (actual - 1 + slides.length) % slides.length;

            slides[actual].classList.add("activo");

            actualizarIndicadores();
        });
    }

    if (derecha) {
        derecha.addEventListener("click", () => {

            slides[actual].classList.remove("activo");

            actual = (actual + 1) % slides.length;

            slides[actual].classList.add("activo");

            actualizarIndicadores();
        });
    }
}
const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu");

if (hamburguesa && menu) {
    hamburguesa.addEventListener("click", () => {
        menu.classList.toggle("abierto");
    });
}
document.addEventListener("click", (e) => {
    if (menu.classList.contains("abierto") && !menu.contains(e.target) && !hamburguesa.contains(e.target)) {
        menu.classList.remove("abierto");
    }
});
