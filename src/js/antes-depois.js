let slideIndexAcne = 0;
let slideIndexMelasma = 0;


mostrarSlideAcne(slideIndexAcne);
mostrarSlideMelasma(slideIndexMelasma);

function mudarSlideAcne(n) {
  mostrarSlideAcne(slideIndexAcne += n);
}

function mudarSlideMelasma(n) {
  mostrarSlideMelasma(slideIndexMelasma += n);
}

function mostrarSlideAcne(n) {
  let imagens = document.querySelectorAll(".card-acne .slide img");
  if (n >= imagens.length) slideIndexAcne = 0;
  if (n < 0) slideIndexAcne = imagens.length - 1;
  
  imagens.forEach(img => img.style.display = "none");
  imagens[slideIndexAcne].style.display = "block";
}

function mostrarSlideMelasma(n) {
  let imagens = document.querySelectorAll(".card-melasma .slide img");
  if (n >= imagens.length) slideIndexMelasma = 0;
  if (n < 0) slideIndexMelasma = imagens.length - 1;
  
  imagens.forEach(img => img.style.display = "none");
  imagens[slideIndexMelasma].style.display = "block";
}
