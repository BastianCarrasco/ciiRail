const carouselElement = document.querySelector('#carouselExample');
const carousel = new bootstrap.Carousel(carouselElement, {
  interval: false,  // Desactiva el cambio automático
  ride: false       // Evita que se inicie automáticamente
});