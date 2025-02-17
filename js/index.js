const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

nextBtn.addEventListener('click', () => {
    if (index < 2) {
        index++;
    } else {
        index = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = 3;
    }
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;
}


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-certi");
    const cards = document.querySelectorAll(".certificate-card");
    const totalCards = cards.length;
    let index = 0;

    function showCertificates() {
        const cardWidth = cards[0].offsetWidth;
        carousel.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    document.getElementById("prevBtnCerti").addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = totalCards - 1;
        }
        showCertificates();
    });

    document.getElementById("nextBtnCerti").addEventListener("click", function () {
        if (index < totalCards - 1) {
            index++;
        } else {
            index = 0;
        }
        showCertificates();
    });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
});

const translation = {
    "es": {
        "about": "Sobre mí",
        "skills": "Habilidades y tecnologías",
        "projects": "Proyectos",
        "experience": "Experiencia Profesional",
        "certificates": "Certificados",
        "name": "Soy Juan Yepes",
        "me": "Desarrollador backend",
        "sentence": "Si todo fluye bien, es porque el backend está haciendo su trabajo.",
        "meAbout": "Sobre mí",
        "presentation": "Hola, soy Juan Pablo Yepes Herrera, Tecnólogo en Análisis y Desarrollo de Software de Colombia. Trabajé como aprendiz en Grupo ASD a través del SENA (Servicio Nacional de Aprendizaje), una institución pública en Colombia que brinda educación técnica y formación. Durante mi aprendizaje, colaboré en proyectos de backend utilizando Python y FastAPI. Aunque mi trayectoria profesional apenas comienza, siento una gran pasión por el desarrollo de APIs y la resolución de problemas complejos.",
        "Skills": "Habilidades y tecnologías",
        "Projects": "Mis proyectos",
        "uno": "Blog Application es una app desarrollada con FastAPI y MongoDB, permitiendo a los usuarios registrarse, crear cuenta, publicar posts y actualizar su perfil personal.",
        "dos": "Task Application es una app hecha con Node.js, Express y MySQL, que permite operaciones CRUD y seguimiento en tiempo real.",
        "tres": "Este es un sistema de inventario para productos. Incluye autenticación y cuenta con una herramienta impulsada por IA para identificar la categoría de un producto.",
        "experience_My": "Mi Experiencia",
        "date": "Abril 2024 - Octubre 2024",
        "title": "Aprendiz SENA",
        "description": "Trabajé en el desarrollo de APIs con FastAPI, con integración en Elasticsearch para el almacenamiento de datos y análisis. Adicionalmente, realicé implementaciones con AWS ECS y usé Kibana para visualizar los datos. Todo esto fue desarrollado siendo parte del equipo de GRUPO ASD.",
        "Certificates_me": "Certificados",
        "cer_uno": "Crear una API con Node.js",
        "cer_dos": "Código Limpio",
        "cer_tres": "Contenido Digital",
        "cer_cuatro": "Gestión de la información",
        "cer_cinco": "Git de Noob a Pro",
        "cer_seis": "Crear página web con HTML y CSS",
        "cer_siete": "Base de datos NoSQL con MongoDB y Node.js",
        "cer_ocho": "Fundamentos de la programación con Node.js",
        "cer_nueve": "Desarrollo web con PHP",
        "cer_diez": "Todo sobre la web con PHP",
        "cer_once": "Implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo",
        "cer_doce": "Técnico en Desarrollo de Software",
        "cer_trece": "Tecnólogo en Análisis y Desarrollo de Software",
        "ver_uno" : "Ver en GitHub",
        "ver_dos" : "Ver en GitHub",
        "ver_tres" : "Ver en GitHub",
        "icon" : "Íconos diseñados por",
        "icon_dos" : "Iconos de Freepik",
    },

    "en": {
        "about": "About Me",
        "skills": "Skills & Technologies",
        "projects": "Projects",
        "experience": "Professional Experience",
        "certificates": "Certifications",
        "name": "I am Juan Yepes",
        "me": "Backend Developer",
        "sentence": "If everything flows smoothly, it's because the backend is doing its job.",
        "meAbout": "About Me",
        "presentation": "Hi, I am Juan Pablo Yepes Herrera, a Technologist in Analysis and Software Development from Colombia. I am a developer who worked at Grupo ASD as an apprentice through SENA (National Learning Service), a public institution in Colombia that provides technical education and training. During my time there, I had the opportunity to collaborate on backend projects using Python and FastAPI. Although my professional experience is just starting, I have a strong passion for API development and solving complex problems.",
        "Skills": "Skills & Technologies",
        "Projects": "My Projects",
        "uno": "Blog Application is a blog app developed with FastAPI and MongoDB, allowing users to sign up, log in, create and manage posts, and update their personal profiles.",
        "dos": "Task Application is a task management app built with Node.js, Express, and MySQL, allowing CRUD operations and real-time tracking.",
        "tres": "This is an inventory system for products. It includes authentication and features an AI-powered tool to identify a product’s category.",
        "experience_My": "My Experience",
        "date": "April 2024 - October 2024",
        "title": "SENA Apprentice",
        "description": "I worked on developing APIs with FastAPI, integrating Elasticsearch for data storage and analysis. Additionally, I managed deployments on AWS ECS and used Kibana for data visualization. All of this was developed while being part of the GRUPO ASD team.",
        "Certificates_me": "Certificates",
        "cer_uno": "Create an API with Node.js",
        "cer_dos": "Clean Code",
        "cer_tres": "Digital Content",
        "cer_cuatro": "Information Management",
        "cer_cinco": "Git from Noob to Pro",
        "cer_seis": "Create Web Pages with HTML and CSS",
        "cer_siete": "NoSQL Databases with MongoDB and Node.js",
        "cer_ocho": "Fundamentals of Programming with Node.js",
        "cer_nueve": "Web Development with PHP",
        "cer_diez": "Everything about the Web with PHP",
        "cer_once": "Implementation of the Occupational Health and Safety Management System",
        "cer_doce": "Software Development Technician",
        "cer_trece": "Technologist in Software Analysis and Development",
        "ver_uno" : "View on GitHub",
        "ver_dos" : "View on GitHub",
        "ver_tres" : "View on GitHub",
        "icon" : "Icons designed by",
        "icon_dos" : "Iconos by Freepik",
    }
};

function changeLanguage(lang) {
    document.getElementById("about").innerText = translation[lang].about;
    document.getElementById("skills").innerText = translation[lang].skills;
    document.getElementById("projects").innerText = translation[lang].projects;
    document.getElementById("experience").innerText = translation[lang].experience;
    document.getElementById("certificates").innerText = translation[lang].certificates;
    document.getElementById("name").innerText = translation[lang].name;
    document.getElementById("me").innerText = translation[lang].me;
    document.getElementById("sentence").innerText = translation[lang].sentence;
    document.getElementById("meAbout").innerText = translation[lang].meAbout;
    document.getElementById("presentation").innerText = translation[lang].presentation;
    document.getElementById("Skills").innerText = translation[lang].Skills;
    document.getElementById("Projects").innerText = translation[lang].Projects;
    document.getElementById("uno").innerText = translation[lang].uno;
    document.getElementById("dos").innerText = translation[lang].dos;
    document.getElementById("tres").innerText = translation[lang].tres;
    document.getElementById("experience_My").innerText = translation[lang].experience_My;
    document.getElementById("date").innerText = translation[lang].date;
    document.getElementById("title").innerText = translation[lang].title;
    document.getElementById("description").innerText = translation[lang].description;
    document.getElementById("Certificates_me").innerText = translation[lang].Certificates_me;
    document.getElementById("cer_uno").innerText = translation[lang].cer_uno;
    document.getElementById("cer_dos").innerText = translation[lang].cer_dos;
    document.getElementById("cer_tres").innerText = translation[lang].cer_tres;
    document.getElementById("cer_cuatro").innerText = translation[lang].cer_cuatro;
    document.getElementById("cer_cinco").innerText = translation[lang].cer_cinco;
    document.getElementById("cer_seis").innerText = translation[lang].cer_seis;
    document.getElementById("cer_siete").innerText = translation[lang].cer_siete;
    document.getElementById("cer_ocho").innerText = translation[lang].cer_ocho;
    document.getElementById("cer_nueve").innerText = translation[lang].cer_nueve;
    document.getElementById("cer_diez").innerText = translation[lang].cer_diez;
    document.getElementById("cer_once").innerText = translation[lang].cer_once;
    document.getElementById("cer_doce").innerText = translation[lang].cer_doce;
    document.getElementById("cer_trece").innerText = translation[lang].cer_trece;
    document.getElementById("ver_uno").innerText = translation[lang].ver_uno;
    document.getElementById("ver_dos").innerText = translation[lang].ver_dos;
    document.getElementById("ver_tres").innerText = translation[lang].ver_tres;
    document.getElementById("icon").childNodes[0].nodeValue = translation[lang].icon + " ";
    document.getElementById("icon_dos").childNodes[0].nodeValue = translation[lang].icon_dos + " ";
};

document.getElementById("copyEmail").addEventListener("click", function(event) {
    event.preventDefault();

    const email = "juanylaurad@gmail.com";

    navigator.clipboard.writeText(email).then(() => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The email was copied successfully " + email,
            showConfirmButton: false,
            timer: 3000
        });
    }).catch(err => {
        console.log("Error the copied: ", + err)
    });
});
