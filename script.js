const heartsContainer = document.querySelector(".hearts");

// Función para generar corazones flotantes distribuidos por toda la pantalla
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // FORZAR distribución completa — incluso extremos
  const position = Math.floor(Math.random() * screenWidth);
  heart.style.left = position + "px";

  // Inicia desde la parte inferior
  heart.style.top = screenHeight + "px";

  // Tamaño y visibilidad
  const size = Math.random() * 10 + 15;
  heart.style.width = size + "px";
  heart.style.height = size + "px";
  heart.style.opacity = Math.random() * 0.7 + 0.3;

  // Animación personalizada
  heart.style.position = "absolute";
  heart.style.animation = `float ${Math.random() * 2 + 3}s linear 1`;

  // Agregar y limpiar
  heartsContainer.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

// Siempre adaptar al tamaño del viewport
function updateHeartsContainerSize() {
  heartsContainer.style.width = window.innerWidth + "px";
  heartsContainer.style.height = window.innerHeight + "px";
}
window.addEventListener("resize", updateHeartsContainerSize);
updateHeartsContainerSize();

// 💥 Tasa base de generación: proporcional al tamaño de pantalla
let baseRate = Math.max(3, Math.floor(window.innerWidth / 100));

// 💓 Aumentar cantidad de corazones con el tiempo
let wave = 0;
function rampUpHearts() {
  for (let i = 0; i < baseRate + wave; i++) {
    createFloatingHeart();
  }
  wave = Math.min(wave + 1, 50); // máx 50 nuevos corazones por ciclo
}
setInterval(rampUpHearts, 500); // cada 0.5 segundos se crean más corazones
