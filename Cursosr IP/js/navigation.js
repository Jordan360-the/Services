// Función para mostrar/ocultar el sidebar
function toggleSidebar(section) {
    const sidebar = document.getElementById('sidebar');
    const sections = document.querySelectorAll('.sidebar-section');
    
    // Ocultar todas las secciones
    sections.forEach(s => s.style.display = 'none');
    
    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(`${section}-content`);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
    
    // Mostrar el sidebar
    sidebar.style.display = 'block';
    sidebar.classList.add('active');
    
    // Añadir clase al body para prevenir scroll
    document.body.classList.add('sidebar-open');
}

// Función para cerrar el sidebar
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
    sidebar.classList.remove('active');
    document.body.classList.remove('sidebar-open');
}

// Cerrar sidebar al hacer clic fuera
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!sidebar.contains(event.target) && !Array.from(navLinks).some(link => link.contains(event.target))) {
        closeSidebar();
    }
});

// Función para mostrar/ocultar el sidebar de búsqueda
function toggleSearch() {
    const searchSidebar = document.getElementById('search-sidebar');
    searchSidebar.style.display = 'block';
    searchSidebar.classList.add('active');
    document.body.classList.add('search-open');
}

function closeSearch() {
    const searchSidebar = document.getElementById('search-sidebar');
    searchSidebar.style.display = 'none';
    searchSidebar.classList.remove('active');
    document.body.classList.remove('search-open');
}

// Cerrar sidebar de búsqueda al hacer clic fuera
document.addEventListener('click', function(event) {
    const searchSidebar = document.getElementById('search-sidebar');
    const searchBtn = document.querySelector('.search-btn');
    
    if (!searchSidebar.contains(event.target) && !searchBtn.contains(event.target)) {
        closeSearch();
    }
}); 