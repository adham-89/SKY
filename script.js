// ===== Floating Music Player =====
const playBtn = document.getElementById("playBtn");
const song = document.getElementById("song");
let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    song.play();
    playBtn.textContent = "⏸";
    isPlaying = true;
  } else {
    song.pause();
    playBtn.textContent = "▶";
    isPlaying = false;
  }
});

// ===== Heart Surprises =====
const hearts = document.querySelectorAll(".heart");
const surpriseMsg = document.getElementById("surpriseMsg");

hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    const message = heart.getAttribute("data-msg");
    surpriseMsg.textContent = message;
    surpriseMsg.style.opacity = 1;
  });
});
