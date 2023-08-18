const menuToggle = document.querySelector('.menu-toggle');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        menuToggle.style.opacity = '0'; // Si el usuario hace scroll hacia abajo, ocultar el botón
    } else {
        menuToggle.style.opacity = '1'; // Si el usuario hace scroll hacia arriba, mostrar el botón
    }

    lastScrollPosition = currentScrollPosition;
});

const ham = document.querySelector ('.menu-toggle')
ham.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});

const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active'); // Alternar la clase 'active' para mostrar u ocultar el menú
});

const gradient2 = document.querySelector('.gradient2');
const moon = document.querySelector('.moon');

window.addEventListener('resize', () => {
  const maxWidth = gradient2.offsetWidth * 0.8; // Define el límite de movimiento hacia la derecha (80% del contenedor)
  const newRight = Math.min(maxWidth, window.innerWidth - gradient2.getBoundingClientRect().right);
  moon.style.right = `${newRight}px`;
});

// Ejecuta el evento de redimensionamiento una vez al cargar la página
window.dispatchEvent(new Event('resize'));

