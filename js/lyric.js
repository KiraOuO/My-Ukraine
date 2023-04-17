document.getElementById('anthem-image').addEventListener('click', function() {

  this.style.display = 'none';
  document.querySelector('.anthem-ukraine-poem').style.display = 'block';
});


document.getElementById('ukraine-text').addEventListener('click', function() {

this.style.display = 'none';
document.getElementById('anthem-image').style.display = 'block';
});



// JavaScript код для обработки событий нажатия на картинку
var audioImg = document.getElementById('audioImg');
var audioRange = document.getElementById('audioRange');
var playPauseButton = document.getElementById('playPauseButton');
var audioControls = document.getElementById('audioControls');
var audio = document.getElementById('audio');

audioImg.addEventListener('click', function() {
  audioControls.style.display = 'block'; // Отображение ползунка и кнопки play/pause
  audioRange.value = audio.currentTime; // Установка значения ползунка на текущую позицию аудио
  audio.play(); // Воспроизведение аудио
  audioImg.style.display = 'none'; // Скрытие изображения
});

// JavaScript код для обработки событий окончания аудио
audio.addEventListener('ended', function() {
  audioControls.style.display = 'none'; // Скрытие ползунка и кнопки play/pause
  audioImg.style.display = 'block'; // Отображение изображения
});

// JavaScript код для обработки событий изменения значения ползунка
audioRange.addEventListener('input', function() {
  audio.currentTime = audioRange.value; // Установка текущей позиции аудио в соответствии с положением ползунка
});

// JavaScript код для обработки событий нажатия на кнопку play/pause
playPauseButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play(); // Воспроизведение аудио
    playPauseButton.textContent = 'Pause'; // Изменение текста кнопки на "Pause"
  } else {
    audio.pause(); // Пауза аудио
    playPauseButton.textContent = 'Play'; // Изменение текста кнопки на "Play"
  }
});

// Обработчик события на изменение значения ползунка
audioRange.addEventListener('input', function() {
  audio.currentTime = audio.duration * (audioRange.value / 100);
});

// Обработчик события на изменение времени аудио-элемента
audio.addEventListener('timeupdate', function() {
  var progress = (audio.currentTime / audio.duration) * 100;
  audioRange.value = progress;
});