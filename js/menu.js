document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMobile = document.querySelector('.nav-mobile');

    menuToggle.addEventListener('click', function() {
        navMobile.classList.toggle('active');
        // Cambiar el icono del botón
        const icon = menuToggle.querySelector('i');
        if (navMobile.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = navMobile.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMobile.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Cerrar el menú al hacer scroll
    window.addEventListener('scroll', function() {
        if (navMobile.classList.contains('active')) {
            navMobile.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}); 