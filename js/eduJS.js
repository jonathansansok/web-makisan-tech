window.addEventListener("load", function () {
    const words = [
        "Comprometidos",
        "Innovadores",
        "Creativos",
        "Responsables",
        "Flexibles",
        "Apasionados",
        "Confiables"
    ];

    const options = {
        strings: words,
        typeSpeed: 90,
        backSpeed: 90,
        loop: true,
        showCursor: false,
        smartBackspace: true,
        startDelay: 500,
        onComplete: function (self) {
            const cursor = document.querySelector(".typed-cursor");
            cursor.style.opacity = 1;
        },
        preStringTyped: function () {
            const cursor = document.querySelector(".typed-cursor");
            cursor.style.opacity = 1;
        }
    };

    const typed = new Typed(".typed-letra", options);
    const wrapperElement = document.querySelector(".animacion-headline");
    const wordsElement = wrapperElement.querySelector(".typed-strings");
    gsap.set(wordsElement.children, { opacity: 0 });
    gsap.fromTo(
        wordsElement.children,
        { x: "-100%" },
        { duration: 0.5, x: "0%", opacity: 1, stagger: 0.2, ease: "power2.out" }
    );
});

/* /////////////////////////////////////////////////////// */

document.addEventListener("DOMContentLoaded", function () {
    var contenedoresResenas = document.querySelectorAll(".resenas-lista");

    var reseñasEjemplo = [
        {
            nombre: "María Fernández",
            profesion: "Diseñadora UX",
            comentario: "Me impresiona la calidad de los sistemas desarrollados por esta empresa. Son expertos en su campo.",
            imagen: "https://i.pinimg.com/originals/4c/53/b1/4c53b11a0df622c22739f7a1e19460be.jpg"
        },
        {
            nombre: "Luis García",
            profesion: "Ingeniero de Software",
            comentario: "Excelente empresa de tecnología. Sus soluciones innovadoras y su equipo altamente capacitado hacen la diferencia.",
            imagen: "https://dipierro-fotografo.com/wp-content/uploads/2020/04/fotografo-retrato-corporativo-madrid-las-rozas.jpg"
        },
        {
            nombre: "Carlos Sánchez",
            profesion: "Ingeniero de Sistemas",
            comentario: "Trabajar con esta empresa ha sido una experiencia enriquecedora. El enfoque en el usuario se refleja en cada producto.",
            imagen: "https://img.freepik.com/foto-gratis/retrato-sonriente-joven-encantador-camiseta-gris-pie-contra-fondo-liso_23-2148213406.jpg"
        },
        {
            nombre: "Laura Rodríguez",
            profesion: "Influencer Tecnológica",
            comentario: "Recomiendo ampliamente los productos y servicios de esta empresa. Son líderes en el mercado y siempre están a la vanguardia.",
            imagen: "https://media.metrolatam.com/2020/07/08/9716336ff10b5a85-e89f283936b96e25cbf9765bce9838c0.jpg"
        }
    ];

    contenedoresResenas.forEach(function (contenedor) {
        reseñasEjemplo.forEach(function (resena) {
            var nuevaResena = document.createElement("li");
            nuevaResena.classList.add("resena");
            var contenidoResena = `
            <div class="comentario">"${resena.comentario}"</div>
            <div class="contenido">
                <img src="${resena.imagen}" alt="Imagen de perfil" class="imagen">
                <div class="info">
                    <div class="nombre">${resena.nombre}</div>
                    <div class="profesion">${resena.profesion}</div>
                </div>
            </div>
        `;

            nuevaResena.innerHTML = contenidoResena;
            contenedor.appendChild(nuevaResena);
        });
    });
});

/* /////////////////////////////////////////////////////// */

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var profesion = document.getElementById("profesion").value;
    var comentario = document.getElementById("comentario").value;
    var imagen = document.getElementById("imagen").files[0];

    if (nombre === "" || profesion === "" || comentario === "") {
        alert("Por favor, complete todos los campos");
        return;
    }

    if (!imagen) {
        var nombreTemporal = nombre;
        var profesionTemporal = profesion;
        var comentarioTemporal = comentario;

        alert("Por favor, adjunte una imagen");

        document.getElementById("nombre").value = nombreTemporal;
        document.getElementById("profesion").value = profesionTemporal;
        document.getElementById("comentario").value = comentarioTemporal;
        return;
    }

    var nuevaResena = document.createElement("li");
    nuevaResena.classList.add("resena");

    var contenidoResena = `
        <div class="comentario">${comentario}</div>
        <div class="contenido">
            <img src="" alt="Imagen de perfil" class="imagen-perfil">
            <div class="info">
                <div class="nombre">${nombre}</div>
                <div class="profesion">${profesion}</div>
            </div>
        </div>
    `;

    nuevaResena.innerHTML = contenidoResena;

    var contenedorResenas = document.querySelectorAll(".resenas-lista");
    contenedorResenas.forEach(function (contenedor) {
        var nuevaResenaClonada = nuevaResena.cloneNode(true);
        contenedor.appendChild(nuevaResenaClonada);

        var reader = new FileReader();
        reader.onload = function () {
            var imagenPerfil = nuevaResenaClonada.querySelector(".imagen-perfil");
            imagenPerfil.src = reader.result;
        };

        reader.readAsDataURL(imagen);
    });

    nuevaResena.classList.add("review-sent");

    document.getElementById("nombre").value = "";
    document.getElementById("profesion").value = "";
    document.getElementById("comentario").value = "";
    document.getElementById("imagen").value = "";
});