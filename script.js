let countdownTimer = document.getElementById("countdown-timer");

function updateCountdown() {
  const eventDate = new Date("2024-12-15T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance > 0) {
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdownTimer.innerHTML = hours + ":" + minutes + ":" + seconds;
  } else {
    countdownTimer.innerHTML = "¡Es el gran día!";
  }
}

setInterval(updateCountdown, 1000);

// Función para cambiar de página
function goToPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById('page' + pageNumber).classList.add('active');
}

// Confirmación de asistencia
function confirmAttendance() {
  alert("¡Gracias por confirmar tu asistencia! Te esperamos.");
}

// Inicialización de mapa
function initMap() {
  const mapOptions = {
    zoom: 15,
    center: { lat: -17.7833, lng: -63.1833 },  // Coordenadas de ejemplo
  };
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
