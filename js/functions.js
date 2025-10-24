document.querySelectorAll('.video-container').forEach(container => {
  const video = container.querySelector('video');
  const button = container.querySelector('button');
  
  if (!video || !button) return;

  const playIcon = button.querySelector('.fa-circle-play');
  const pauseIcon = button.querySelector('.fa-circle-pause');

  if (!playIcon || !pauseIcon) return;

  let textSpan = button.querySelector('.btn-text');
  if (!textSpan) {
    textSpan = document.createElement('span');
    textSpan.classList.add('btn-text');
    textSpan.textContent = ' Play video';
    button.appendChild(textSpan);
  }

  button.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'inline-block';
      textSpan.textContent = ' Pause video';
    } else {
      video.pause();
      playIcon.style.display = 'inline-block';
      pauseIcon.style.display = 'none';
      textSpan.textContent = ' Play video';
    }
  });
});
