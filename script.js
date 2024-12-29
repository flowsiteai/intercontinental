// Seleccionar elementos
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navIcon = navToggle.querySelector('i'); // Ícono del botón hamburguesa

// Alternar clase 'active' y cambiar el ícono del menú hamburguesa
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navIcon.classList.toggle('fa-bars'); // Cambia entre los íconos de "barras"
    navIcon.classList.toggle('fa-times'); // Cambia al ícono de "cerrar"
});

// Cerrar el menú al hacer clic en un enlace
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        navIcon.classList.add('fa-bars'); // Vuelve al ícono de menú
        navIcon.classList.remove('fa-times'); // Elimina el ícono de cerrar
    }
});

// Cerrar el menú automáticamente al redimensionar la pantalla
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active'); // Asegura que el menú esté cerrado
        navIcon.classList.add('fa-bars'); // Restablece el ícono de hamburguesa
        navIcon.classList.remove('fa-times'); // Elimina el ícono de cerrar
    }
});
