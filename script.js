console.log("JS FUNCIONANDO");
document.addEventListener("DOMContentLoaded", () => {

  let indiceImagenActual = 0;
  let imagenesActuales = [];
  let modalItemActual = null;
  
  const modal = document.getElementById("modal");
  const modalGaleriaImg = document.getElementById("modal-galeria-img");
  const modalTituloEl = document.getElementById("modal-titulo");
  
  const miniaturasContainer = document.getElementById("modal-miniaturas");
  const contenedorGalerias = document.getElementById("galerias-container");
  
  const tooltip = document.getElementById("tooltip-info");
  const tooltipLista = document.getElementById("tooltip-lista");
  
  
  // ===== DATOS DE LAS GALERIAS =====
  
const galeriaData = [
  
  {
  //portalapiz_14_caras  
    id:1,
    titulo:"Portalápiz",
    altura:"8.4 cm",
    diametro:"13.2 cm",
    precio:"$40.000",
    nota:"Valor unitario",
  
    imagenes:[
  
      //miniatura_portalapiz_mundial 
        {
          titulo:"Mundial 2026",
          src:"imagenes/2.1.1.4_mundial/isometrico.webp",
  
  info:[
  "Diseño inspirado en el Mundial 2026",
  "Elementos icónicos",
  "Estadios emblemáticos",
  "Balón oficial ",
  "Trofeo",
  "Banderas representativas",
  "Mascotas",
  
  ],
  
  detalles:[
  "imagenes/2.1.1.4_mundial/frontal.webp",
  "imagenes/2.1.1.4_mundial/lateral.webp",
  "imagenes/2.1.1.4_mundial/superior.webp",
  "imagenes/2.1.1.4_mundial/inferior.webp"
  ]
  },
  
  {
  titulo:"Mar del Plata",
  src:"imagenes/2.1.1.6_mar_del_plata/isometrico.webp",
  
  info:[
    "Diseño corporativo",
    "Información empresarial",
    "Presentación de productos"
  ],
  
  detalles:[
  "imagenes/2.1.1.6_mar_del_plata/frontal.webp",
  "imagenes/2.1.1.6_mar_del_plata/lateral.webp",
  "imagenes/2.1.1.6_mar_del_plata/superior.webp",
  "imagenes/2.1.1.6_mar_del_plata/inferior.webp"
  ]
  
  },

  {
    titulo:"Escritores Colombianos",
    src:"imagenes/2.1.1.1_escritores_colombianos/isometrico.webp",
    
    info:[
    "Gabriel García Márquez",
    "José Eustasio Rivera",
    "Álvaro Mutis",
    "Rafael Pombo",
    "Julio Florez",
    "Jorge Isaacs",
    "Enrique Buenaventura",
    "Arturo Álape",
    "Alfredo Iriarte",
    "Tomás Carrasquilla",
    "José Asunción Silva",
    "Fernando Vallejo"
       
    ],
    
    detalles:[
    "imagenes/2.1.1.1_escritores_colombianos/frontal.webp",
    "imagenes/2.1.1.1_escritores_colombianos/lateral.webp",
    "imagenes/2.1.1.1_escritores_colombianos/superior.webp",
    "imagenes/2.1.1.1_escritores_colombianos/inferior.webp"
    ]
    
    },

    {
      titulo:"Escritores Universales",
      src:"imagenes/2.1.1.2_escritores_universales/isometrico.webp",
      
      info:[
      "William Shakespeare",
      "León Tolstói",
      "Oscar Wilde",
      "Fiódor Dostoyevski",
      "Mark Twain",
      "Miguel de Unamuno",
      "Edgar Allan Poe",
      "Charles Dickens",
      "Ernest Hemingway",
      "Franz Kafka",
      "Pablo Neruda",
      "Miguel de Cervantes"
      
      
      ],
      
      detalles:[
      "imagenes/2.1.1.2_escritores_universales/frontal.webp",
      "imagenes/2.1.1.2_escritores_universales/lateral.webp",
      "imagenes/2.1.1.2_escritores_universales/superior.webp",
      "imagenes/2.1.1.2_escritores_universales/inferior.webp"
      ]
      
      },

      {
        titulo:"Matemáticos y Físicos",
        src:"imagenes/2.1.1.3_matemáticos/isometrico.webp",
        
        info:[
        "Jordan Gauss",
        "Joseph Fourier",
        "Isaac Newton",
        "James Clerk Maxwell",
        "Daniel Bernoulli",
        "Michael Faraday",
        "Pierre-Simon Laplace",
        "Albert Einstein",
        "Max Planck",
        "Nikola Tesla",
        "Ernest Rutherford",
        "Godofredo Leibniz",
        ],
        
        detalles:[
        "imagenes/2.1.1.3_matemáticos/frontal.webp",
        "imagenes/2.1.1.3_matemáticos/lateral.webp",
        "imagenes/2.1.1.3_matemáticos/superior.webp",
        "imagenes/2.1.1.3_matemáticos/inferior.webp"
        ]
        
        },

        {
          titulo:"Pintores Universales",
          src:"imagenes/2.1.1.5_pintores_universales/isometrico.webp",
          
          info:[
          "Salvador Dalí",
          "Francisco de Goya",
          "Diego Velázquez",
          "Edgar Degas",
          "Paul Gauguin",
          "Henri Lautrec",
          "Claude Monet",
          "Caravaggio",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Rembrandt",
          "Vincent van Gogh",
                 
          ],
          
          detalles:[
          "imagenes/2.1.1.5_pintores_universales/frontal.webp",
          "imagenes/2.1.1.5_pintores_universales/lateral.webp",
          "imagenes/2.1.1.5_pintores_universales/superior.webp",
          "imagenes/2.1.1.5_pintores_universales/inferior.webp"
          ]
          
          },
   ]
  
  },
  {
    id:2,
    titulo:"Volumen",
    altura:"4.4 cm",
    diametro:"7.2 cm",
    precio:"$15.000",
    nota:"Valor unitario",
    
    imagenes:[
    
    {
    titulo:"Mar del Plata",
    src:"imagenes/2.2.1.1_mar_del_plata/isometrico.webp",
    
    info:[
    
  "Diseño corporativo",
  "Información empresarial",
  "Presentación de productos"
    ],
    
    detalles:[
    "imagenes/2.2.1.1_mar_del_plata/frontal.webp",
    "imagenes/2.2.1.1_mar_del_plata/lateral.webp",
    "imagenes/2.2.1.1_mar_del_plata/superior.webp",
    "imagenes/2.2.1.1_mar_del_plata/inferior.webp"
    ]
    
    },
    
    {
    titulo:"Mundial",
    src:"imagenes/2.2.1.3_mundial/isometrico.webp",
    
    info:[
      "Diseño inspirado en el Mundial 2026",
  "Elementos icónicos",
  "Estadios emblemáticos",
  "Balón oficial ",
  "Trofeo",
  "Banderas representativas",
  "Mascotas",
    ],
    
    detalles:[
    "imagenes/2.2.1.3_mundial/frontal.webp",
    "imagenes/2.2.1.3_mundial/lateral.webp",
    "imagenes/2.2.1.3_mundial/superior.webp",
    "imagenes/2.2.1.3_mundial/inferior.webp"
    ]
    },
    ]
    },

    {
      id:3,
      titulo:"Jarrón",
      altura:"26 cm",
      diametro:"12.2 cm",
      precio:"$55.000",
      nota:"Valor unitario",
      
      imagenes:[
      {
      titulo:"Flores",
      src:"imagenes/1.1.1_flores/isometrico.webp",
      
      info:[
      "imagen flor individual",
      "fondo con degradado en tonos grises",
      ],
      
      detalles:[
      "imagenes/1.1.1_flores/frontal.webp",
      "imagenes/1.1.1_flores/lateral.webp",
      "imagenes/1.1.1_flores/superior.webp",
      "imagenes/1.1.1_flores/inferior.webp"
      ]
      },
      ]
      },

      {
        id:4,
        titulo:"Solitario",
        altura:"22 cm",
        diametro:"8.4 cm",
        precio:"$45.000",
        nota:"Valor unitario",
        
        imagenes:[
        {
        titulo:"Flores",
        src:"imagenes/1.2.1_flores/isometrico.webp",
        
        info:[
          "imagen flor individual",
          "fondo con degradado en tonos grises",
          ],
        
        detalles:[
        "imagenes/1.2.1_flores/frontal.webp",
        "imagenes/1.2.1_flores/lateral.webp",
        "imagenes/1.2.1_flores/superior.webp",
        "imagenes/1.2.1_flores/inferior.webp"
        ]
        },
        ]
        },

        {
          id:5,
          titulo:"PortaLapiz",
          altura:"10 cm",
          diametro:"8 cm",
          precio:"$30.000",
          nota:"Valor unitario",
          
          imagenes:[
          
          {
          titulo:"Condor",
          src:"imagenes/3.1.1.1_condor/isometrico.webp",
          
          info:[
          "Diseño decorativo",
          "La grandeza del cóndor",
          "Paisaje natural",
          "Laguna de Tota",
          ],
          
          detalles:[
          "imagenes/3.1.1.1_condor/frontal.webp",
          "imagenes/3.1.1.1_condor/lateral.webp",
          "imagenes/3.1.1.1_condor/superior.webp",
          "imagenes/3.1.1.1_condor/inferior.webp"
          ]
          
          },

          {
            titulo:"Frutas",
            src:"imagenes/3.1.1.2_frutas/isometrico.webp",
            
            info:[
            "Variedad de frutas",
            "Armonía de colores",
            "Refleja la frescura",
            "La forma",
            ],
            
            detalles:[
            "imagenes/3.1.1.2_frutas/frontal.webp",
            "imagenes/3.1.1.2_frutas/lateral.webp",
            "imagenes/3.1.1.2_frutas/superior.webp",
            "imagenes/3.1.1.2_frutas/inferior.webp"
            ]
            },
            ]
            },

          {
            id:6,
            titulo:"Volumen",
            altura:"7 cm",
            diametro:"7 cm",
            precio:"$15.000",
            nota:"Valor unitario",
            imagenes:[
            
            {
            titulo:"Dollar",
            src:"imagenes/3.2.1.1_dollar/isometrico.webp",
            
            info:[
            "Imagen decorativa",
            "Moneda oficial de EEUU"
            
            ],
            
            detalles:[
            "imagenes/3.2.1.1_dollar/frontal.webp",
            "imagenes/3.2.1.1_dollar/lateral.webp",
            "imagenes/3.2.1.1_dollar/superior.webp",
            "imagenes/3.2.1.1_dollar/inferior.webp"
            ]
            },
            ]
            },
        
  ];
  
  
  // Matriz principal
  
  function renderGalerias(){
  
  contenedorGalerias.innerHTML="";
  
  galeriaData.forEach(item=>{
  
    const card=document.createElement("div");
    card.className="modelo";
    
    card.innerHTML=`

    <div class="numero-modelo">No.${item.id}</div>
    
    <div class="img-contenedor">
      <img src="${item.imagenes[0].src}" loading="lazy">
    </div>
    
    <h3>${item.titulo}</h3>
    
    <button class="btn-modelo" onclick="abrirModal(${item.id})">
    Ver Modelos
    </button>
    
    `;
  
  contenedorGalerias.appendChild(card);
  
  });
  
  }
   
  //Abrir Modal
  
  window.abrirModal = function(id){
  
  const item=galeriaData.find(g=>g.id===id);
  if(!item) return;
  
  modalItemActual=item;
  imagenesActuales=item.imagenes;
  indiceImagenActual=0;
  
  modalGaleriaImg.src=imagenesActuales[0].src;
  
  actualizarTitulo(item,imagenesActuales[0].titulo);
  
  crearMiniaturas(item);
  
  mostrarDetalles(0);
  
  modal.style.display="flex";
  
  }
    
  //Crear Miniaturas
  
  function crearMiniaturas(item){
  
  miniaturasContainer.innerHTML="";
  
  item.imagenes.forEach((img,i)=>{
  
  const mini=document.createElement("img");
  
  mini.src=img.src;
  mini.title = img.titulo;
  mini.style.width="70px";
  mini.style.cursor="pointer";
  mini.style.margin="5px";
  
  mini.onclick=()=>{
  
  indiceImagenActual=i;
  
  modalGaleriaImg.src=imagenesActuales[i].src;
  
  actualizarTitulo(item,imagenesActuales[i].titulo);
  
  mostrarDetalles(i);
  
  };
  
  miniaturasContainer.appendChild(mini);
  
  });
  
  }
   
  // ===== TITULO =====
  
  function actualizarTitulo(item,titulo){
  
  modalTituloEl.innerHTML=`
  
  <h3>${titulo}</h3>
  
  <p>Altura: ${item.altura}</p>
  
  <p>Diámetro: ${item.diametro}</p>
  
  <p>Precio: ${item.precio}</p>

  <p>Nota: ${item.nota}</p>
  
  `;
  
  }
  
  // ===== TOOLTIP =====
  
  modalGaleriaImg.addEventListener("mouseenter", ()=>{
  
  const info = imagenesActuales[indiceImagenActual].info || [];
  
  tooltipLista.innerHTML="";
  
  const mitad=Math.ceil(info.length/2);
  
  const contenedorColumnas=document.createElement("div");
  
  contenedorColumnas.style.display="grid";
  contenedorColumnas.style.gridTemplateColumns="1fr 1fr";
  contenedorColumnas.style.columnGap="30px";
  
  const col1=document.createElement("div");
  const col2=document.createElement("div");
  
  info.forEach((texto,i)=>{
  
  const item=document.createElement("div");
  
  item.innerHTML=`<span style="color:#00c853;font-weight:bold;margin-right:6px;">✔</span>${texto}`;
  
  item.style.whiteSpace="nowrap";
  
  if(i<mitad){
  
  col1.appendChild(item);
  
  }else{
  
  col2.appendChild(item);
  
  }
  
  });
  
  contenedorColumnas.appendChild(col1);
  contenedorColumnas.appendChild(col2);
  
  tooltipLista.appendChild(contenedorColumnas);
  
  tooltip.classList.add("visible");
  
  });
  
  
  modalGaleriaImg.addEventListener("mouseleave", ()=>{
  
  tooltip.classList.remove("visible");
  
  });
  
  
  // ===== DETALLES =====
  
  function mostrarDetalles(index){
  
  const contenedor=document.getElementById("modal-detalles");
  
  contenedor.innerHTML="";
  
  const detalles=imagenesActuales[index].detalles || [];
  
  detalles.forEach(src=>{
  
  const img=document.createElement("img");
  
  img.src=src;
  
  
  
  contenedor.appendChild(img);
  
  });
  
  }
  
  
  // ===== CERRAR MODAL =====
  
  window.cerrarModal=function(){
  
  modal.style.display="none";
  
  modalGaleriaImg.src="";
  
  modalTituloEl.innerHTML="";
  
  };
  
  
  // ===== INICIAR =====
  
  renderGalerias();
  
  });

  document.getElementById("form-contacto").addEventListener("submit", function(e){

    e.preventDefault();
    
    emailjs.sendForm(
    'service_gczqlim',
    'template_3uobaym',
    this
    ).then(function(){
    
    alert("Mensaje enviado correctamente");
    
    }, function(error){
    
    alert("Error al enviar el mensaje");
    
    });
    
    });

    const form = document.getElementById("form-contacto");
const mensaje = document.getElementById("mensaje-envio");
const boton = document.getElementById("btn-enviar");

form.addEventListener("submit", function(e){

e.preventDefault();

boton.disabled = true;
boton.textContent = "Enviando...";

emailjs.sendForm(
'TU_SERVICE_ID',
'TU_TEMPLATE_ID',
this
).then(function(){

mensaje.textContent = "✅ Mensaje enviado correctamente";
mensaje.className = "mensaje-envio mensaje-exito";

form.reset();

boton.disabled = false;
boton.textContent = "Enviar mensaje";

}, function(){

mensaje.textContent = "❌ Error al enviar el mensaje";
mensaje.className = "mensaje-envio mensaje-error";

boton.disabled = false;
boton.textContent = "Enviar mensaje";

});

});

const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrarModal");

cerrar.addEventListener("click", function() {
    modal.style.display = "none";
});

const CACHE_NAME = "mi-app-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./icono.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Error:", err));
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log("PWA lista para instalar 🔥");

  // 👇 Crear botón manual
  const btn = document.createElement("button");
  btn.innerText = "Instalar App";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px";
  btn.style.background = "#007bff";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.zIndex = "9999";

  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === "accepted") {
        console.log("Usuario instaló la app");
      }
      deferredPrompt = null;
    });
  });
});

fetch("http://192.168.20.175:8000/pedidos")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });