// Seleccionar el botón de alternar menú
const menuToggle = document.querySelector('.menu-toggle');

// Guardar la última posición de desplazamiento
let lastScrollPosition = 0;

// Seleccionar el botón de menú
const ham = menuToggle;

// Seleccionar el botón de desplazamiento hacia arriba
const scrollToTop = document.querySelector('.scroll-to-top');

scrollToTop.addEventListener('click', () => {
    // Desplazarse hacia arriba de manera suave
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Evento de clic en el botón de menú
ham.addEventListener('click', () => {
    // Desplazarse hacia arriba de manera suave
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Seleccionar el menú móvil
const mobileMenu = document.querySelector('.mobile-menu');

// Evento de clic en el botón de alternar menú
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'active' para mostrar u ocultar el menú
    mobileMenu.classList.toggle('active');
});

// Seleccionar los elementos de gradiente y luna
const gradient2 = document.querySelector('.gradient2');
const moon = document.querySelector('.moon');

// Evento de redimensionamiento de la ventana
window.addEventListener('resize', () => {
    // Definir el límite de movimiento hacia la derecha
    const maxWidth = gradient2.offsetWidth * 0.8;

    // Calcular la nueva posición de la luna
    const newRight = Math.min(maxWidth, window.innerWidth - gradient2.getBoundingClientRect().right);

    // Actualizar la posición de la luna
    moon.style.right = `${newRight}px`;
});
