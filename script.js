const startCallButton = document.getElementById('startCall');
const endCallButton = document.getElementById('endCall');
const videoContainer = document.getElementById('videoContainer');

startCallButton.addEventListener('click', () => {
  // Show the video container with animation
  videoContainer.classList.add('active');
});

endCallButton.addEventListener('click', () => {
  // Hide the video container with animation
  videoContainer.classList.remove('active');
});
