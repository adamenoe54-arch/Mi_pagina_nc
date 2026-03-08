
// =======================================================
// 📦 GALERÍA INTERACTIVA CON MODAL Y SUBMODAL PROFESIONAL
// =======================================================

// Datos principales
const galeriaData = [
  { id: 1, titulo: "PortaLápiz", info: ["Lista de Diseños", "Formato A3"] },
  { id: 2, titulo: "Soliatarios", info: ["Edición especial con banderas", "Formato panorámico"] },
  { id: 3, titulo: "Jarrones", info: ["Obras clásicas", "Colección artística"] },
  { id: 4, titulo: "Octaedros Porta_Lápiz", info: ["Autores destacados", "Serie literaria"] },
  { id: 5, titulo: "Octaedros para colgar", info: ["Autores destacados", "Serie literaria"] }
];

// Subgalerías relacionadas
const subGalerias = {
  1: [
    {
      id: "1-101",
      titulo: "Calendario",
      imagenes: [
        "./imagenes/calendario/isometrico.webp",
        "./imagenes/calendario/frontal.webp",
        "./imagenes/calendario/lateral.webp"
      ],
      descripcion: "Versión anual con estructura poligonal."
    },
    {
      id: "1-102",
      titulo: "Mundial 2026",
      imagenes: [
        "./imagenes/mundial/isometrico.webp",
        "./imagenes/mundial/frontal.webp",
        "./imagenes/mundial/lateral.webp"
      ],
      descripcion: "Diseño alusivo al Mundial con banderas de EE.UU., México y Canadá."
    },
    {
      id: "1-103",
      titulo: "Pintores Universales",
      imagenes: [
        "./imagenes/pintores_universales/isometrico.webp",
        "./imagenes/pintores_universales/frontal.webp",
        "./imagenes/pintores_universales/lateral.webp"
      ],
      descripcion: "Serie inspirada en grandes maestros del arte universal."
    },
    {
      id: "1-104",
      titulo: "Escritores Colombianos",
      imagenes: [
        "./imagenes/escritores_colombianos/isometrico.webp",
        "./imagenes/escritores_colombianos/frontal.webp",
        "./imagenes/escritores_colombianos/lateral.webp"
      ],
      descripcion: "Colección que rinde homenaje a la literatura colombiana."
    },
    {
      id: "1-105",
      titulo: "Escritores universales",
      imagenes: [
        "./imagenes/escritores_universales/isometrico.webp",
        "./imagenes/escritores_universales/frontal.webp",
        "./imagenes/escritores_universales/lateral.webp"
      ],
      descripcion: "Colección que rinde homenaje a la literatura colombiana."
    }
  ],
  2: [
    {
      id: "2-201",
      titulo: "Solitario",
      imagenes: [
        "./imagenes/solitario/isometrico.webp",
        "./imagenes/solitario/frontal.webp",
        "./imagenes/solitario/lateral.webp"
      ],
      descripcion: "Diseño alusivo al Mundial con banderas de EE.UU., México y Canadá."
    }
  ],
  3: [
    {
      id: "3-301",
      titulo: "Jarrón",
      imagenes: [
        "./imagenes/jarron/isometrico.webp",
        "./imagenes/jarron/frontal.webp",
        "./imagenes/jarron/lateral.webp"
      ],
      descripcion: "Serie inspirada en grandes maestros del arte universal."
    }
  ],
  4: [
    {
      id: "4-401",
      titulo: "Condor",
      imagenes: [
        "./imagenes/condor/isometrico.webp",
        "./imagenes/condor/frontal.webp",
        "./imagenes/condor/lateral.webp"
      ],
      descripcion: "Colección que rinde homenaje a la literatura colombiana."
    },
    {
      id: "4-402",
      titulo: "Frutero",
      imagenes: [
        "./imagenes/frutero/isometrico.webp",
        "./imagenes/frutero/frontal.webp",
        "./imagenes/frutero/lateral.webp"
      ],
      descripcion: "Colección que rinde homenaje a la literatura colombiana."
    },
    {
      id: "4-403",
      titulo: "Dollar",
      imagenes: [
        "./imagenes/dolar_1/isometrico.webp",
        "./imagenes/dolar_1/frontal.webp",
        "./imagenes/dolar_1/lateral.webp"
      ],
      descripcion: "Colección que rinde homenaje a la literatura colombiana."
    }
  ],
  5: [
    {
      id: "5-501",
      titulo: "Dollar",
      imagenes: [
        "./imagenes/dolar_2/isometrico.webp",
        "./imagenes/dolar_2/frontal.webp",
        "./imagenes/dolar_2/lateral.webp"
      ],
      descripcion: "Serie inspirada en grandes maestros del arte universal."
    }
  ]
};

// =======================================================
// 🧭 MODAL PRINCIPAL
// =======================================================
let modalActiveId = null;
let subIndices = {};
const modal = document.getElementById("modal");
const modalTituloEl = document.getElementById("modal-titulo");
const modalTextoEl = document.getElementById("modal-texto");
const modalGaleriaEl = document.getElementById("modal-galeria");
const modalGaleriaImg = document.getElementById("modal-galeria-img");
const submodal = document.getElementById("submodal");

function abrirModal(id) {
  const item = galeriaData.find(g => g.id === id);
  if (!item) return;

  modalActiveId = id;
  modalTituloEl.textContent = item.titulo;
  modalTextoEl.innerHTML = "";

  if (Array.isArray(item.info)) {
    const ul = document.createElement("ul");
    ul.className = "modal-lista";
    ul.innerHTML = item.info.map(i => `<li>${i}</li>`).join("");
    modalTextoEl.appendChild(ul);
  }

  modalGaleriaEl.style.display = "none";
  modalGaleriaImg.src = "";

  const btnAntiguo = modal.querySelector(".modal-cerrar-flotante");
  if (btnAntiguo) btnAntiguo.remove();

  const contenedorBtn = document.createElement("div");
  contenedorBtn.className = "modal-cerrar-flotante";
  const btnCerrar = document.createElement("button");
  btnCerrar.textContent = "Cerrar";
  btnCerrar.onclick = cerrarModal;
  contenedorBtn.appendChild(btnCerrar);
  modal.querySelector(".modal-contenido").appendChild(contenedorBtn);

  modal.style.display = "flex";
  modal.classList.add("mostrar");

  setTimeout(() => renderSubGaleria(id), 150);
}

// =======================================================
// 🖼️ SUBGALERÍA
// =======================================================
function renderSubGaleria(mainId) {
  const existing = modalTextoEl.querySelector(".subgaleria-container");
  if (existing) existing.remove();

  const subs = subGalerias[mainId];
  if (!subs || subs.length === 0) return;

  const wrap = document.createElement("div");
  wrap.className = "subgaleria-container matriz-galerias";
  wrap.style.marginTop = "18px";

  subs.forEach(sub => {
    const card = document.createElement("div");
    card.className = "galeria";
    card.style.width = "200px";
    card.style.padding = "10px";

    const img = document.createElement("img");
    img.id = `sub-img-${sub.id}`;
    img.src = sub.imagenes[0] || "./imagenes/placeholder.jpg";
    img.alt = sub.titulo;
    img.style.cursor = "pointer";
    img.style.transition = "opacity 0.25s ease";
    img.addEventListener("click", () => abrirLightbox(img.src));
    card.appendChild(img);

    const btns = document.createElement("div");
    btns.className = "botones1";
    btns.style.display = "flex";
    btns.style.justifyContent = "space-between";

    const prev = document.createElement("button");
    prev.textContent = "⟨";
    prev.className = "btn-galeria";
    prev.addEventListener("click", (e) => {
      e.stopPropagation();
      cambiarSubImagen(sub.id, -1);
    });

    const next = document.createElement("button");
    next.textContent = "⟩";
    next.className = "btn-galeria";
    next.addEventListener("click", (e) => {
      e.stopPropagation();
      cambiarSubImagen(sub.id, 1);
    });

    btns.appendChild(prev);
    btns.appendChild(next);
    card.appendChild(btns);

    const numDiv = document.createElement("div");
    numDiv.className = "numero";
    numDiv.innerHTML = `<h5 class="titulo-calendario">${sub.titulo}</h5>`;
    card.appendChild(numDiv);

    const infoDiv = document.createElement("div");
    infoDiv.className = "boton-info";
    const infoBtn = document.createElement("button");
    infoBtn.textContent = "Ver Inf.";
    infoBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      abrirSubModalDentroModal(sub);
    });
    infoDiv.appendChild(infoBtn);
    card.appendChild(infoDiv);

    wrap.appendChild(card);
  });

  modalTextoEl.appendChild(wrap);
  document.querySelector(".modal-contenido").classList.add("subgaleria-activa");
}

// =======================================================
// 🔁 CAMBIAR IMAGEN DE SUBGALERÍA
// =======================================================
function cambiarSubImagen(subId, dir) {
  const sub = Object.values(subGalerias).flat().find(s => s.id === subId);
  if (!sub || !sub.imagenes.length) return;

  if (!(subId in subIndices)) subIndices[subId] = 0;
  subIndices[subId] = (subIndices[subId] + dir + sub.imagenes.length) % sub.imagenes.length;

  const imgEl = document.getElementById(`sub-img-${subId}`);
  if (!imgEl) return;

  imgEl.style.opacity = 0;
  setTimeout(() => {
    imgEl.src = sub.imagenes[subIndices[subId]];
    imgEl.style.opacity = 1;
  }, 160);
}

// =======================================================
// 📖 SUBMODAL (DENTRO DEL MODAL)
// =======================================================
// =======================================================
// 🧭 SUBMODAL DENTRO DEL MODAL (FLUJO CORREGIDO)
// =======================================================
function abrirSubModalDentroModal(sub) {
  // Asegurar que el modal ya está completamente visible
  if (modal.style.display !== "flex") return;
  
  submodal.style.display = "flex";
  submodal.classList.add("mostrar");

  document.getElementById("submodal-titulo").textContent = sub.titulo;
  document.getElementById("submodal-texto").innerHTML = `
    <p>${sub.descripcion || "Sin descripción disponible."}</p>
  `;
}


function cerrarSubModal() {
  submodal.classList.remove("mostrar");
  setTimeout(() => (submodal.style.display = "none"), 200);
}


// =======================================================
// ❌ CERRAR MODAL PRINCIPAL
// =======================================================
function cerrarModal() {
  modal.style.display = "none";
  modal.classList.remove("mostrar");
}

// =======================================================
// 🖼️ LIGHTBOX DE IMAGEN
// =======================================================
function abrirLightbox(src) {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `<img src="${src}" alt="Imagen ampliada">`;
  document.body.appendChild(lightbox);
  lightbox.addEventListener("click", () => lightbox.remove());
}

// =======================================================
// ⌨️ CERRAR CON TECLA ESC
// =======================================================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    cerrarModal();
    cerrarSubModal();
  }
});
// =======================================================
// 🧩 RENDERIZAR GALERÍAS PRINCIPALES EN LA PÁGINA
// =======================================================
function renderGalerias() {
  const contenedor = document.getElementById("galerias-container");
  if (!contenedor) return;

  contenedor.innerHTML = ""; // limpiar contenido previo

  galeriaData.forEach(item => {
    const galeriaDiv = document.createElement("div");
    galeriaDiv.className = "galeria";
    galeriaDiv.dataset.galeria = item.id;

    // Imagen de portada (tomamos la primera de su subgalería)
    const portada =
      subGalerias[item.id]?.[0]?.imagenes?.[0] || "./imagenes/placeholder.jpg";

    const img = document.createElement("img");
    img.src = portada;
    img.alt = item.titulo;
    galeriaDiv.appendChild(img);

    // Título
    const titulo = document.createElement("div");
    titulo.innerHTML = `<h4>${item.titulo}</h4>`;
    galeriaDiv.appendChild(titulo);

    // Botón
    const btns = document.createElement("div");
    btns.className = "botones1";

    const verBtn = document.createElement("button");
    verBtn.textContent = "Ver Modelos";
    verBtn.addEventListener("click", () => abrirModal(item.id));
    btns.appendChild(verBtn);

    galeriaDiv.appendChild(btns);
    contenedor.appendChild(galeriaDiv);
  });
}

// Ejecutar automáticamente al cargar la página
document.addEventListener("DOMContentLoaded", renderGalerias);
