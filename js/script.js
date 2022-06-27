// TRACCIA
// Creato un array contenente una lista di cinque immagini tra quelle fornite, creare un carosello.

// MILESTONE 1
// Creare il markup statico e lo stile per poterci poi concentrare solamente sull'aspetto logico.

// MILESTONE 2
// Rimuovere tutto il markup statico e inserire le immagini dinamicamente servendoci dell'array fornito e di un ciclo for.

// MILESTONE 3
// Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider al posto della precedente.

// BONUS 1:
// Aggiungere un ciclo infinito del carosello (Arrivati alla fine di una direzione, si ricomincia da capo dal rispettivo verso).

// BONUS 2:
// Creare delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a quella attiva.

// Variabili Globali
const carousel = document.getElementById("carousel");
const carouselGallery = document.querySelectorAll("#carousel .gallery");


// Array contenente il percorso delle immagini
const gallerySources = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];


// Creo variabile di appoggio
let galleryIndex = 0;


for(let i = 0; i < gallerySources.length; i++) {
  
  let images = document.createElement("img");

  images.src = gallerySources[galleryIndex];
  images.classList.add("active");
  console.log(images)

  galleryIndex++;
}