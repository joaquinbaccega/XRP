const derecha = document.getElementById("derecha");
const izquierda = document.getElementById("izquierda");
const divsArrastrables = document.querySelectorAll(".opciones");
const contenedorDerecha = document.getElementById("derecha");
const imagenContainer = document.getElementById("imagenContainer");
const dragDiv = document.getElementById("dragDiv");
const objeto = document.getElementById("botones");

let titilando = false;
let intervalo;

izquierda.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("id", e.target.id);
  e.dataTransfer.setData("text", e.target.id);
  crearDiv();
});

derecha.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.target.classList.add("hover");
});

derecha.addEventListener("dragleave", (e) => {
  e.target.classList.remove("hover");
  detenerTitilacion();
});

derecha.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("id");
  const dragElement = document.getElementById(e.dataTransfer.getData("text"));

  e.target.classList.remove("hover");

  console.log(id);

  e.target.appendChild(document.getElementById(id));

  if (id === "rectangulo") {
    const miRectangulo = crearRectangulo(contenedorDerecha, 200, 100, "#3498db");
    const div = document.getElementById(id);
    div.style.display = "none";
  } else if (id === "Separador-Horizontal") {
    const miSeparador = crearSeparadorHorizontal();
    const div = document.getElementById(id);
    div.style.display = "none";
  } else if (id === "divisor-horizontal") {
    const miRectangulo = crearRectangulo(contenedorDerecha, "auto", 7, "#3498db");
    const div = document.getElementById(id);
    div.style.display = "none";
  } else if (id === "Filas") {
    crearRectanguloDividido(contenedorDerecha);
    const div = document.getElementById(id);
    div.style.display = "none";
  } else if (id === "Texto") {
    agregarTexto();
    const div = document.getElementById(id);
    div.style.display = "none";
  } else if (dragElement === dragDiv) {
    const inputImagen = document.createElement("input");
    inputImagen.type = "file";
    inputImagen.accept = "image/*";
    inputImagen.click();

    // Manejar la carga de la imagen seleccionada
    inputImagen.addEventListener("change", function () {
      const file = inputImagen.files[0];

      // Verificar si el archivo es una imagen
      if (file && file.type.startsWith("image/")) {
        // Crear un objeto URL para la imagen
        const imageURL = URL.createObjectURL(file);

        // Crear un elemento de imagen
        const imagen = document.createElement("img");
        imagen.id = "Titilacion";
        imagen.src = imageURL;

        imagen.style.maxWidth = "100%"; // Máximo ancho
        imagen.style.maxHeight = "100%"; // Máxima altura

        // Limpiar el contenedor de imagen y agregar la nueva imagen
        imagenContainer.innerHTML = "";
        imagenContainer.appendChild(imagen);
      } else {
        alert("Por favor, selecciona una imagen válida.");
      }
    });
    const div = document.getElementById(id);
    div.style.display = "none";
  }
});

function crearRectangulo(contenedor, ancho, alto, color) {
  // Crear un nuevo elemento div
  const rectangulo = document.createElement("div");
  // Establecer el ancho y alto del rectángulo
  rectangulo.style.width = ancho + "px";
  rectangulo.style.height = alto + "px";
  rectangulo.id = "Titilacion";
  // Establecer el color de fondo del rectángulo
  rectangulo.style.backgroundColor = color;
  // Agregar el rectángulo al contenedor especificado
  contenedor.appendChild(rectangulo);
  return rectangulo; // Devolver el elemento div creado
}

function crearRectanguloDividido(contenedor) {
  const rectangulo = document.createElement("div");
  rectangulo.id = "Titilacion";
  rectangulo.style.width = "auto";
  rectangulo.style.height = "200px";
  rectangulo.style.backgroundColor = "#3498db";
  rectangulo.style.left = "20px";
  rectangulo.style.top = "20px";
  rectangulo.style.display = "flex";
  rectangulo.style.flexWrap = "wrap";
  rectangulo.style.justifyContent = "space-between";
  rectangulo.style.alignItems = "center";
  contenedorDerecha.appendChild(rectangulo);
  for (let i = 0; i < 3; i++) {
    const cuadrado = crearRectangulo(rectangulo, 90, 90, "#e74c3c");
  }
}

function crearSeparadorHorizontal() {
  const separador = document.createElement("div");
  separador.id = "Titilacion";
  separador.style.width = "100%";
  separador.style.height = "7px";
  separador.style.backgroundColor = "white";
  separador.style.left = "20px";
  separador.style.top = "20px";
  separador.style.display = "flex";
  separador.style.flexWrap = "wrap";
  separador.style.justifyContent = "space-between";
  separador.style.alignItems = "center";

  contenedorDerecha.appendChild(separador);
}

function agregarTexto() {
  const texto = document.createElement("input");
  texto.id = "Titilacion";
  texto.style.width = "auto";
  texto.style.height = "auto";
  texto.style.backgroundColor = "white";
  texto.style.left = "20px";
  texto.style.top = "20px";
  texto.style.display = "flex";
  texto.style.flexWrap = "wrap";
  texto.style.justifyContent = "space-between";
  texto.style.alignItems = "center";
  texto.style.fontFamily = "Arial";
  texto.style.fontSize = "20px";
  texto.style.color = "black";
  texto.style.fontWeight = "bold";
  texto.style.textAlign = "center";
  texto.style.padding = "10px";
  texto.style.margin = "10px";
  texto.style.border = "1px solid black";
  texto.style.borderRadius = "5px";
  texto.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  texto.style.cursor = "move";
  texto.setAttribute("draggable", "true");
  texto.setAttribute("id", "texto");
  texto.setAttribute("class", "opciones");
  texto.setAttribute("ondragstart", "drag(event)");
  texto.innerHTML = "Texto";
  contenedorDerecha.appendChild(texto);
}
