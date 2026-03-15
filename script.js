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
  
  imagenes:[
  
  //miniatura_portalapiz_mundial 
  {
  titulo:"Mundial 2026",
  src:"imagenes/2.1.1.4._mundial/2.1.1.4.1._isometrico.webp",
  
  info:[
  "Maple",
  "Clutch",
  "Sayu",
  "Estadio Benz",
  "Estadio BC Place",
  "Estadio Azteca",
  "Bandera Colombia",
  "Bandera EEUU",
  "Bandera Canada",
  "Bandera México",
  "Balon",
  "Trofeo"
  ],
  
  detalles:[
  "imagenes/2.1.1.4._mundial/2.1.1.4.2._frontal.webp",
  "imagenes/2.1.1.4._mundial/2.1.1.4.3._lateral.webp",
  "imagenes/2.1.1.4._mundial/2.1.1.4.4._superior.webp",
  "imagenes/2.1.1.4._mundial/2.1.1.4.5._inferior.webp"
  ]
  
  },
  
  {
  titulo:"Mar del Plata",
  src:"imagenes/2.1.1.6._mar_del_plata/2.1.1.6.1._isometrico.webp",
  
  info:[
  "Logotipo de la empresa",
  "Dirección",
  "Productos"
  ],
  
  detalles:[
  "imagenes/2.1.1.6._mar_del_plata/2.1.1.6.2._frontal.webp",
  "imagenes/2.1.1.6._mar_del_plata/2.1.1.6.3._lateral.webp",
  "imagenes/2.1.1.6._mar_del_plata/2.1.1.6.4._superior.webp",
  "imagenes/2.1.1.6._mar_del_plata/2.1.1.6.5._inferior.webp"
  ]
  
  },

  {
    titulo:"Escritores Colombianos",
    src:"imagenes/2.1.1.1_escritores_colombianos/2.1.1.1.1._isometrico.webp",
    
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
    "imagenes/2.1.1.1_escritores_colombianos/2.1.1.1.2._frontal.webp",
    "imagenes/2.1.1.1_escritores_colombianos/2.1.1.1.3._lateral.webp",
    "imagenes/2.1.1.1_escritores_colombianos/2.1.1.1.4._superior.webp",
    "imagenes/2.1.1.1_escritores_colombianos/2.1.1.1.5._inferior.webp"
    ]
    
    },

    {
      titulo:"Escritores Universales",
      src:"imagenes/2.1.1.2_escritores_universales/2.1.1.2.1._isometrico.webp",
      
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
      "imagenes/2.1.1.2_escritores_universales/2.1.1.2.2._frontal.webp",
      "imagenes/2.1.1.2_escritores_universales/2.1.1.2.3._lateral.webp",
      "imagenes/2.1.1.2_escritores_universales/2.1.1.2.4._superior.webp",
      "imagenes/2.1.1.2_escritores_universales/2.1.1.2.5._inferior.webp"
      ]
      
      },

      {
        titulo:"Matemáticos y Físicos",
        src:"imagenes/2.1.1.3._matemáticos/2.1.1.3.1._isometrico.webp",
        
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
        "imagenes/2.1.1.3._matemáticos/2.1.1.3.2._frontal.webp",
        "imagenes/2.1.1.3._matemáticos/2.1.1.3.3._lateral.webp",
        "imagenes/2.1.1.3._matemáticos/2.1.1.3.4._superior.webp",
        "imagenes/2.1.1.3._matemáticos/2.1.1.3.5._inferior.webp"
        ]
        
        },

        {
          titulo:"Pintores Universales",
          src:"imagenes/2.1.1.5._pintores_universales/2.1.1.5.1._isometrico.webp",
          
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
          "imagenes/2.1.1.5._pintores_universales/2.1.1.5.2._frontal.webp",
          "imagenes/2.1.1.5._pintores_universales/2.1.1.5.3._lateral.webp",
          "imagenes/2.1.1.5._pintores_universales/2.1.1.5.4._superior.webp",
          "imagenes/2.1.1.5._pintores_universales/2.1.1.5.5._inferior.webp"
          ]
          
          },
      
    
  

  
  ]
  
  },
  {
    id:2,
    titulo:"Volumen",
    altura:"8.4 cm",
    diametro:"13.2 cm",
    precio:"$15.000",
    
    imagenes:[
    
    {
    titulo:"Mar del Plata",
    src:"imagenes/2.2.1.1._mar_del_plata/2.2.1.1.1._isometrico.webp",
    
    info:[
    "Maple",
    "Clutch",
    ],
    
    detalles:[
    "imagenes/2.2.1.1._mar_del_plata/2.2.1.1.2._frontal.webp",
    "imagenes/2.2.1.1._mar_del_plata/2.2.1.1.3._lateral.webp",
    "imagenes/2.2.1.1._mar_del_plata/2.2.1.1.4._superior.webp",
    "imagenes/2.2.1.1._mar_del_plata/2.2.1.1.5._inferior.webp"
    ]
    
    },
    
    {
    titulo:"Mundial",
    src:"imagenes/2.2.1.3._mundial/2.2.1.3.1._isometrico.webp",
    
    info:[
    "ffff",
    "Dirección",
    "Productos"
    ],
    
    detalles:[
    "imagenes/2.2.1.3._mundial/2.2.1.3.2._frontal.webp",
    "imagenes/2.2.1.3._mundial/2.2.1.3.3._lateral.webp",
    "imagenes/2.2.1.3._mundial/2.2.1.3.4._superior.webp",
    "imagenes/2.2.1.3._mundial/2.2.1.3.5._inferior.webp"
    ]
    
    },
  
  
    
    ]
    
    },

    {
      id:3,
      titulo:"Jarrón",
      altura:"26 cm",
      diametro:"12.2 cm",
      precio:"$60.000",
      
      imagenes:[
      
      {
      titulo:"Flores",
      src:"imagenes/1.1.1._flores/1.1.1.1._isometrico.webp",
      
      info:[
      "Maple",
      "Clutch",
      ],
      
      detalles:[
      "imagenes/1.1.1._flores/1.1.1.2._frontal.webp",
      "imagenes/1.1.1._flores/1.1.1.3._lateral.webp",
      "imagenes/1.1.1._flores/1.1.1.4._superior.webp",
      "imagenes/1.1.1._flores/1.1.1.5._inferior.webp"
      ]
      
      },
      
      
    
      
      ]
      
      },

      {
        id:4,
        titulo:"Solitario",
        altura:"22 cm",
        diametro:"84 cm",
        precio:"$50.000",
        
        imagenes:[
        
        {
        titulo:"Flores",
        src:"imagenes/1.2.1._flores/1.2.1.1._isometrico.webp",
        
        info:[
        "Maple",
        "Clutch",
        ],
        
        detalles:[
        "imagenes/1.2.1._flores/1.2.1.2._frontal.webp",
        "imagenes/1.2.1._flores/1.2.1.3._lateral.webp",
        "imagenes/1.2.1._flores/1.2.1.4._superior.webp",
        "imagenes/1.2.1._flores/1.2.1.5._inferior.webp"
        ]
        
        },
        
        
      
        
        ]
        
        },

        {
          id:5,
          titulo:"PortaLapiz",
          altura:"22 cm",
          diametro:"84 cm",
          precio:"$30.000",
          
          imagenes:[
          
          {
          titulo:"Condor",
          src:"imagenes/3.1.1.1._condor/3.1.1.1.1._isometrico.webp",
          
          info:[
          "Maple",
          "Clutch",
          ],
          
          detalles:[
          "imagenes/3.1.1.1._condor/3.1.1.1.2._frontal.webp",
          "imagenes/3.1.1.1._condor/3.1.1.1.3._lateral.webp",
          "imagenes/3.1.1.1._condor/3.1.1.1.4._superior.webp",
          "imagenes/3.1.1.1._condor/3.1.1.1.5._inferior.webp"
          ]
          
          },

          {
            titulo:"Frutas",
            src:"imagenes/3.1.1.2._frutas/3.1.1.2.1._isometrico.webp",
            
            info:[
            "Maple",
            "Clutch",
            ],
            
            detalles:[
            "imagenes/3.1.1.2._frutas/3.1.1.2.2._frontal.webp",
            "imagenes/3.1.1.2._frutas/3.1.1.2.3._lateral.webp",
            "imagenes/3.1.1.2._frutas/3.1.1.2.4._superior.webp",
            "imagenes/3.1.1.2._frutas/3.1.1.2.5._inferior.webp"
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
            nota:"Pedido más de 10 Unidades",
            imagenes:[
            
            {
            titulo:"Dollar",
            src:"imagenes/3.2.1.1._dollar/3.2.1.1.1._isometrico.webp",
            
            info:[
            "Maple",
            "Clutch",
            ],
            
            detalles:[
            "imagenes/3.2.1.1._dollar/3.2.1.1.2._frontal.webp",
            "imagenes/3.2.1.1._dollar/3.2.1.1.3._lateral.webp",
            "imagenes/3.2.1.1._dollar/3.2.1.1.4._superior.webp",
            "imagenes/3.2.1.1._dollar/3.2.1.1.5._inferior.webp"
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