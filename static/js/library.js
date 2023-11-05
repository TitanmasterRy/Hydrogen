const uploadForm = document.getElementById('uploadForm');
const mp3FileInput = document.getElementById('mp3File');

uploadForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const file = mp3FileInput.files[0];
  
  // Store the file in localStorage
  localStorage.setItem('mp3File', file);
  
  // Clear the file input value
  mp3FileInput.value = '';
});

// Retrieve the file from localStorage
const file = localStorage.getItem('mp3File');

if (file) {
  const audioPlayer = document.getElementById('audioPlayer');
  file.push(data);
  audioPlayer.src = URL.createObjectURL(new Blob(file, {type: "audio/mp3"}));
}
