console.log("Hello from JavaScript!");
alert("Welcome to TRNCHKDS");

const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

window.addEventListener('load', () => {
  const playPromise = bgMusic.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {

      musicToggle.innerText = "🔇 Music Off";
    });
  }
});

musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.innerText = "🔊 Music On";
  } else {
    bgMusic.pause();
    musicToggle.innerText = "🔇 Music Off";
  }
});
