// Array di nomi delle immagini (assumendo che le immagini siano nella cartella "images")
const images = [
    "slide/1.jpg",
    "slide/2.jpg",
    "slide/3.jpg",
    "slide/4.jpg",
    "slide/5.jpg",
    "slide/6.jpg"
  ];

  // Funzione per caricare le immagini nel carosello
  function loadCarouselImages() {
    const carouselInner = document.getElementById('carousel-images');
    
    images.forEach((image, index) => {
      // Crea un div per ogni immagine
      const div = document.createElement('div');
      div.classList.add('carousel-item');
      
      // Se è la prima immagine, impostiamo la classe "active"
      if (index === 0) {
        div.classList.add('active');
      }
      
      // Crea un tag <img> per l'immagine
      const img = document.createElement('img');
      img.src = image;
      img.classList.add('d-block', 'w-100');
      img.alt = `Immagine ${index + 1}`;
      
      // Aggiungi l'immagine al div
      div.appendChild(img);
      
      // Aggiungi il div al carosello
      carouselInner.appendChild(div);
    });
  }

  // Carica le immagini al caricamento della pagina
  window.onload = loadCarouselImages;

      // Ottieni l'anno corrente
      const currentYear = new Date().getFullYear();

      // Seleziona il paragrafo con ID "footer-text"
      const footerText = document.getElementById('footer-text');
  
      // Imposta il contenuto del paragrafo con l'anno attuale
      footerText.innerHTML = `© 2007-${currentYear} fotocronachegermogli.com. P.Iva 0484113048`;


      // Disabilita tasto destro
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disabilita combinazioni di tasti
document.addEventListener('keydown', function (e) {
  const key = e.key.toLowerCase();

  // F12
  if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
  }

  // Ctrl+Shift+I / Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && (key === 'i' || key === 'j')) {
      e.preventDefault();
  }

  // Ctrl+U
  if (e.ctrlKey && key === 'u') {
      e.preventDefault();
  }

  // Ctrl+S o Cmd+S (Salva)
  if ((e.ctrlKey || e.metaKey) && key === 's') {
      e.preventDefault();
  }

  // Ctrl+P o Cmd+P (Stampa)
  if ((e.ctrlKey || e.metaKey) && key === 'p') {
      e.preventDefault();
  }

  // Ctrl+C o Cmd+C (Copia)
  if ((e.ctrlKey || e.metaKey) && key === 'c') {
      e.preventDefault();
  }
});