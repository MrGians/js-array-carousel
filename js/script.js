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
const carouselGallery = document.getElementById("gallery");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");


// Array contenente il percorso delle immagini
const gallerySources = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

// Creo variabile di appoggio per immagine corrente
let galleryIndex = 0;


// Creo dinamicamente le immagini
for(let i = 0; i < gallerySources.length; i++) {

  // Creo l'elemento immagine
  let images = `<img src="${gallerySources[i]}" alt="immagine-${i + 1}">`;
    
  // Stampo l'elemento immagine sul DOM ad ogni ciclo
  carouselGallery.innerHTML += images;

}


// Seleziono tutti gli elementi IMG dal DOM ed al primo aggiungo la classe Active
document.querySelectorAll("img")[galleryIndex].classList.add("active")

  