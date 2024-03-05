// Create the Audio object once
const audio = new Audio("../assets/scary.mp3");

// Access the sound button by ID
const soundButton = document.getElementById("sound-button");

// Access the play and mute icons by ID
const playIcon = document.getElementById("sound-icon-play");
const muteIcon = document.getElementById("sound-icon-mute");

function toggleSound() {
  // Check if the audio is paused
  if (audio.paused) {
    audio.play();
    playIcon.style.display = "flex";
    muteIcon.style.display = "none";
  } else {
    audio.pause();
    playIcon.style.display = "none";
    muteIcon.style.display = "flex";
  }
}
