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
