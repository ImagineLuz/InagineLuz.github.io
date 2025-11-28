const imagenes = [
  "assets/previews/img1.jpg",
  "assets/previews/img2.jpg",
  "assets/previews/img3.jpg"
];

const galeria = document.querySelector(".gallery");

imagenes.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Imagen ImagineLuz";
  galeria.appendChild(img);
});
