// Función para manejar la selección activa en la barra lateral
document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.collection-sidebar a');
    
    // Función para actualizar el enlace activo
    function updateActiveLink() {
        // Remover la clase active de todos los enlaces
        sidebarLinks.forEach(link => link.classList.remove('active'));
        
        // Obtener la sección actual basada en el hash de la URL
        const currentHash = window.location.hash || '#bodas';
        
        // Agregar la clase active al enlace correspondiente
        const activeLink = document.querySelector(`.collection-sidebar a[href="${currentHash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Actualizar el enlace activo cuando se carga la página
    updateActiveLink();
    
    // Actualizar el enlace activo cuando se hace clic en un enlace
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            window.location.hash = targetId;
            updateActiveLink();
        });
    });
    
    // Actualizar el enlace activo cuando cambia el hash de la URL
    window.addEventListener('hashchange', updateActiveLink);
}); 