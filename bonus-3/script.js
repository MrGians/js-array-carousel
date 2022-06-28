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



// Variabili Globali DOM
const gallery = document.getElementById("gallery");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const thumbBox = document.getElementById("thumb-box");

// Array Sources Immagini Carosello
const imgSource = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg"];

// Variabile d'appoggio per l'immagine di Default del Carosello
let imgSourceIndex = 0;


// Creo elementi img tanti quanti presenti nell'array nel DOM dentro #gallery
for (let i = 0; i < imgSource.length; i++) {

  // Main Image
  const image = document.createElement("img");
  image.classList.add("carousel-item");
  image.src = imgSource[i];
  console.log(image);

  gallery.appendChild(image);

  // Thumbnail Image
  const thumbImage = document.createElement("img");
  thumbImage.classList.add("thumb-img");
  thumbImage.src = imgSource[i];
  console.log(thumbImage);

  thumbBox.appendChild(thumbImage);

}


// Racchiudo gli elementi img del carosello creati in un array
const imgElements = document.querySelectorAll("img.carousel-item");
console.log(imgElements);

// Racchiudo gli elementi img Thumbnail creati in un array
const thumbImgElements = document.querySelectorAll("img.thumb-img");
console.log(thumbImgElements);

// Aggiungo la classe "active" all'immagine di default del carosello
imgElements[imgSourceIndex].classList.add("active");

// Aggiungo la classe "active" all'immagine Thumbnail rispetto al carosello
thumbImgElements[imgSourceIndex].classList.add("active");



// Aggiungo un evento al Click ai Bottoni "Previous" & "Next"
// Next Button
nextBtn.addEventListener("click", function(){

  // Rimuovo la classe "active" dall'elemento precedente
  imgElements[imgSourceIndex].classList.remove("active");
  thumbImgElements[imgSourceIndex].classList.remove("active");

  // Incremento il numero dell'indice per poter cambiare l'immagine attiva
  imgSourceIndex++;

  // Controllo che l'array abbia ancora elementi da scorrere, altrimenti torno al primo
  if (imgSourceIndex == imgSource.length) imgSourceIndex = 0;

  // Aggiungo la classe "active" dall'elemento successivo
  imgElements[imgSourceIndex].classList.add("active");
  thumbImgElements[imgSourceIndex].classList.add("active");

})


// Previous Button
prevBtn.addEventListener("click", function(){

  // Rimuovo la classe "active" dall'elemento precedente
  imgElements[imgSourceIndex].classList.remove("active");
  thumbImgElements[imgSourceIndex].classList.remove("active");

  // Decremento il numero dell'indice per poter cambiare l'immagine attiva
  imgSourceIndex--;

  // Controllo che l'array abbia ancora elementi da scorrere, altrimenti torno all'ultimo
  if (imgSourceIndex == -1) imgSourceIndex = imgSource.length - 1;

  // Aggiungo la classe "active" dall'elemento successivo
  imgElements[imgSourceIndex].classList.add("active");
  thumbImgElements[imgSourceIndex].classList.add("active");

})
