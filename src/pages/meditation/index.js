import '../meditation/style.css';
import '../../css/global.css'

const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.img__play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');

  //sound
  const sounds = document.querySelectorAll('.sound-picker button');

  //time display
  const timeDisplay = document.querySelector('.time-display');
  const timeSelect = document.querySelectorAll('.time-select button');

  //get the length of the outline
  const outlineLength = outline.getTotalLength();

  //duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //pick different sounds
  sounds.forEach((sound) => {
    sound.addEventListener('click', function () {
      song.src = this.getAttribute('data-sound');
      video.src = this.getAttribute('data-video');
      checkPlaying(song);
    });
  });

  //play sound
  play.addEventListener('click', () => {
    checkPlaying(song);
  });

  //select sound
  timeSelect.forEach((option) => {
    option.addEventListener('click', function () {
      console.log('+');
      fakeDuration = this.getAttribute('data-time');
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
    });
  });

  //create a function specific to stop and play the sound
  const checkPlaying = (song) => {
    if (song.paused) {
      song.play();
      video.play();
      play.style.backgroundImage = "url('../assets/img/meditation/pause.svg')";
    } else {
      song.pause();
      video.pause();
      play.style.backgroundImage = "url('../assets/img/meditation/play.svg')";
    }
  };

  //animate the circle
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    //animate the circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    //animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if (currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = './svg/play.svg';
      video.pause();
    }
  };
};

document.addEventListener(
  'DOMContentLoaded',
  function () {
    app();
  },
  false
);
