window.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");
  const music = document.getElementById("bg-music");
  const musicToggle = document.getElementById("music-toggle");
  const cursor = document.getElementById("custom-cursor");
  const animatedBackground = document.getElementById("animated-background");

  // Переход к сайту после клика по письму
  intro.addEventListener("click", () => {
    intro.classList.add("hidden");
    mainContent.classList.remove("hidden");
    animatedBackground.classList.remove("hidden"); // Показываем анимированный фон
    music.play();
  });

  // Музыка вкл/выкл
  musicToggle.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicToggle.textContent = "🔊";
    } else {
      music.pause();
      musicToggle.textContent = "🔇";
    }
  });

  // Курсор
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
});