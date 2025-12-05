// Datos de los proyectos (¡Edita esto para agregar tus proyectos!)
const proyectos = [
    {
        titulo: "E-commerce Simple",
        descripcion: "Una tienda en línea básica construida con HTML, CSS y JavaScript vainilla. Incluye carrito de compras.",
        imagen: "Calculadora.png", // Reemplaza con la URL de tu imagen
        repoLink: "https://github.com/tuusuario/proyecto1",
        demoLink: "#"
    },
    {
        titulo: "App del Clima",
        descripcion: "Aplicación que consume una API externa para mostrar el clima actual según la ubicación.",
        imagen: "https://via.placeholder.com/400x250",
        repoLink: "https://github.com/tuusuario/proyecto2",
        demoLink: "#"
    },
    {
        titulo: "To-Do List",
        descripcion: "Gestor de tareas con almacenamiento local (LocalStorage) para no perder tus datos.",
        imagen: "https://via.placeholder.com/400x250",
        repoLink: "https://github.com/tuusuario/proyecto3",
        demoLink: "#"
    }
];

// Función para renderizar los proyectos en el HTML
const projectsContainer = document.getElementById('projects-container');

function cargarProyectos() {
    proyectos.forEach(proyecto => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        card.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="project-img">
            <div class="project-info">
                <h3>${proyecto.titulo}</h3>
                <p>${proyecto.descripcion}</p>
                <div class="project-links">
                    <a href="${proyecto.repoLink}" target="_blank"><i class="fab fa-github"></i> Código</a>
                    <a href="${proyecto.demoLink}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>
                </div>
            </div>
        `;

        projectsContainer.appendChild(card);
    });
}

// Ejecutar la función cuando cargue la página
document.addEventListener('DOMContentLoaded', cargarProyectos);

// Scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

});
