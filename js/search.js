// Datos de búsqueda que incluyen todas las secciones del sitio
const searchData = [
    // Sección de Bodas
    { 
        title: 'Boda Clásica', 
        section: 'Colección', 
        category: 'Bodas', 
        description: 'Decoración elegante y tradicional para bodas', 
        link: 'coleccion.html#bodas',
        keywords: ['bodas', 'clásico', 'elegante', 'tradicional', 'decoración']
    },
    { 
        title: 'Boda Moderna', 
        section: 'Colección', 
        category: 'Bodas', 
        description: 'Estilo contemporáneo y minimalista', 
        link: 'coleccion.html#bodas',
        keywords: ['bodas', 'moderno', 'contemporáneo', 'minimalista', 'decoración']
    },
    { 
        title: 'Boda Bohemia', 
        section: 'Colección', 
        category: 'Bodas', 
        description: 'Ambiente relajado y natural', 
        link: 'coleccion.html#bodas',
        keywords: ['bodas', 'bohemio', 'natural', 'relajado', 'decoración']
    },
    
    // Sección de Cumpleaños
    { 
        title: 'Cumpleaños Infantil', 
        section: 'Colección', 
        category: 'Cumpleaños', 
        description: 'Fiestas temáticas para niños', 
        link: 'coleccion.html#cumpleanos',
        keywords: ['cumpleaños', 'infantil', 'niños', 'temático', 'fiesta']
    },
    { 
        title: 'Cumpleaños Adulto', 
        section: 'Colección', 
        category: 'Cumpleaños', 
        description: 'Celebraciones elegantes para adultos', 
        link: 'coleccion.html#cumpleanos',
        keywords: ['cumpleaños', 'adulto', 'elegante', 'celebración', 'fiesta']
    },
    
    // Sección de Eventos Corporativos
    { 
        title: 'Lanzamiento de Producto', 
        section: 'Colección', 
        category: 'Eventos Corporativos', 
        description: 'Presentaciones profesionales y modernas', 
        link: 'coleccion.html#corporativos',
        keywords: ['corporativo', 'lanzamiento', 'producto', 'profesional', 'evento']
    },
    { 
        title: 'Conferencia', 
        section: 'Colección', 
        category: 'Eventos Corporativos', 
        description: 'Ambientes formales y funcionales', 
        link: 'coleccion.html#corporativos',
        keywords: ['corporativo', 'conferencia', 'formal', 'funcional', 'evento']
    },
    
    // Sección de Experiencias
    { 
        title: 'Tendencias 2024', 
        section: 'Experiencia', 
        category: 'Tendencias', 
        description: 'Últimas tendencias en decoración de eventos', 
        link: 'experiencia.html#tendencias',
        keywords: ['tendencias', 'decoración', 'eventos', '2024', 'moderno']
    },
    { 
        title: 'Proyectos Destacados', 
        section: 'Experiencia', 
        category: 'Proyectos', 
        description: 'Nuestros mejores trabajos realizados', 
        link: 'experiencia.html#proyectos',
        keywords: ['proyectos', 'trabajos', 'destacados', 'eventos', 'decoración']
    },
    { 
        title: 'Testimonios', 
        section: 'Experiencia', 
        category: 'Testimonios', 
        description: 'Opiniones de nuestros clientes', 
        link: 'experiencia.html#testimonios',
        keywords: ['testimonios', 'clientes', 'opiniones', 'experiencias', 'eventos']
    },
    
    // Sección Sobre Nosotros
    { 
        title: 'Nuestra Historia', 
        section: 'Sobre Nosotros', 
        category: 'Historia', 
        description: 'Conoce cómo comenzó S.E.D.', 
        link: 'sobre-nosotros.html#historia',
        keywords: ['historia', 'compañía', 'inicios', 'S.E.D.', 'decoración']
    },
    { 
        title: 'Misión y Valores', 
        section: 'Sobre Nosotros', 
        category: 'Misión', 
        description: 'Nuestros principios y objetivos', 
        link: 'sobre-nosotros.html#mision',
        keywords: ['misión', 'valores', 'principios', 'objetivos', 'compañía']
    },
    { 
        title: 'Nuestro Equipo', 
        section: 'Sobre Nosotros', 
        category: 'Equipo', 
        description: 'Conoce a nuestro equipo profesional', 
        link: 'sobre-nosotros.html#equipo',
        keywords: ['equipo', 'profesional', 'personal', 'compañía', 'S.E.D.']
    },
    { 
        title: 'Contacto', 
        section: 'Sobre Nosotros', 
        category: 'Contacto', 
        description: 'Ponte en contacto con nosotros', 
        link: 'sobre-nosotros.html#contacto',
        keywords: ['contacto', 'información', 'comunicación', 'S.E.D.', 'servicio']
    }
];

// Búsquedas frecuentes
const frequentSearches = [
    'Boda Clásica',
    'Cumpleaños Infantil',
    'Eventos Corporativos',
    'Tendencias 2024',
    'Contacto'
];

// Funciones para el modal de búsqueda
function openSearchModal() {
    document.getElementById('searchModal').style.display = 'flex';
    document.getElementById('searchInput').focus();
}

function closeSearchModal() {
    document.getElementById('searchModal').style.display = 'none';
}

// Función para realizar la búsqueda
function performSearch() {
    const searchTerm = document.getElementById('search-page-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-page-results');
    const recentSearchesContainer = document.getElementById('search-page-recent');
    
    // Limpiar resultados anteriores
    resultsContainer.innerHTML = '';
    
    if (searchTerm.trim() === '') {
        // Mostrar búsquedas frecuentes si no hay término de búsqueda
        showFrequentSearches();
        return;
    }
    
    // Filtrar resultados
    const results = searchData.filter(item => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            item.title.toLowerCase().includes(searchTermLower) ||
            item.description.toLowerCase().includes(searchTermLower) ||
            item.category.toLowerCase().includes(searchTermLower) ||
            item.keywords.some(keyword => keyword.toLowerCase().includes(searchTermLower))
        );
    });
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No se encontraron resultados para tu búsqueda.</p>';
    } else {
        // Agrupar resultados por sección
        const groupedResults = groupResultsBySection(results);
        
        // Mostrar resultados agrupados
        Object.entries(groupedResults).forEach(([section, items]) => {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'search-section';
            sectionDiv.innerHTML = `<h3>${section}</h3>`;
            
            items.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <div class="result-meta">
                        <span class="category">${item.category}</span>
                        <span class="keywords">${item.keywords.join(', ')}</span>
                    </div>
                `;
                resultItem.onclick = () => navigateToSection(item.link);
                sectionDiv.appendChild(resultItem);
            });
            
            resultsContainer.appendChild(sectionDiv);
        });
    }
    
    // Guardar búsqueda reciente
    saveRecentSearch(searchTerm);
    updateRecentSearches();
}

// Función para mostrar búsquedas frecuentes
function showFrequentSearches() {
    const resultsContainer = document.getElementById('search-page-results');
    resultsContainer.innerHTML = '<h3>Búsquedas Frecuentes</h3>';
    
    frequentSearches.forEach(search => {
        const searchItem = document.createElement('div');
        searchItem.className = 'frequent-search-item';
        searchItem.textContent = search;
        searchItem.onclick = () => {
            document.getElementById('search-page-input').value = search;
            performSearch();
        };
        resultsContainer.appendChild(searchItem);
    });
}

// Función para agrupar resultados por sección
function groupResultsBySection(results) {
    return results.reduce((acc, item) => {
        if (!acc[item.section]) {
            acc[item.section] = [];
        }
        acc[item.section].push(item);
        return acc;
    }, {});
}

// Función para guardar búsqueda reciente
function saveRecentSearch(searchTerm) {
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    recentSearches = recentSearches.filter(item => item !== searchTerm);
    recentSearches.unshift(searchTerm);
    recentSearches = recentSearches.slice(0, 5);
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
}

// Función para actualizar búsquedas recientes
function updateRecentSearches() {
    const recentSearchesContainer = document.getElementById('search-page-recent');
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    
    recentSearchesContainer.innerHTML = '<h3>Búsquedas Recientes</h3>';
    recentSearches.forEach(search => {
        const searchItem = document.createElement('div');
        searchItem.className = 'recent-search-item';
        searchItem.textContent = search;
        searchItem.onclick = () => {
            document.getElementById('search-page-input').value = search;
            performSearch();
        };
        recentSearchesContainer.appendChild(searchItem);
    });
}

// Función para navegar a una sección
function navigateToSection(link) {
    window.location.href = link;
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('searchModal');
    if (event.target == modal) {
        closeSearchModal();
    }
}

// Event listeners
document.getElementById('search-page-input').addEventListener('input', performSearch);
document.getElementById('search-page-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Mostrar búsquedas frecuentes al cargar
document.addEventListener('DOMContentLoaded', () => {
    showFrequentSearches();
    updateRecentSearches();
}); 