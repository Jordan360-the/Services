// Configuración del slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Función para mostrar el slide actual
function showSlide(index) {
    // Ocultar todos los slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Mostrar el slide actual
    slides[index].classList.add('active');
}

// Función para avanzar al siguiente slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Función para retroceder al slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Configurar el cambio automático de slides
let slideInterval = setInterval(nextSlide, 5000);

// Pausar el slider al hacer hover
const slider = document.querySelector('.hero-slider');
slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Reanudar el slider al quitar el hover
slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Inicializar el slider
showSlide(currentSlide); 