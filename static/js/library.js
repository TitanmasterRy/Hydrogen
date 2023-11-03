const dbName = 'songs';
const dbVersion = 1;
const objectStoreName = 'files';

const request = window.indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = function(event) {
  const db = event.target.result;

  if (!db.objectStoreNames.contains(objectStoreName)) {
    const objectStore = db.createObjectStore(objectStoreName, { keyPath: 'id', autoIncrement: true });
    objectStore.createIndex('name', 'name', { unique: false });
  }
};

request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction(objectStoreName, 'readwrite');
  const objectStore = transaction.objectStore(objectStoreName);
  const file = mp3FileInput.files[0];

  const fileData = {
    name: file.name,
    type: file.type,
    data: file
  };

  const addRequest = objectStore.add(fileData);

  addRequest.onsuccess = function(event) {
    console.log('File added to IndexedDB');
  };

  addRequest.onerror = function(event) {
    console.error('Error adding file to IndexedDB');
  };

  transaction.oncomplete = function(event) {
    db.close();
  };
};

request.onerror = function(event) {
  console.error('Error opening IndexedDB');
};

// Retrieve the file from IndexedDB
request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction(objectStoreName, 'readonly');
  const objectStore = transaction.objectStore(objectStoreName);

  const getRequest = objectStore.get(1); // Assuming the file is stored with key 1

  getRequest.onsuccess = function(event) {
    const fileData = event.target.result;

    if (fileData) {
      console.log('File retrieved successfully:', fileData);

      const audioPlayer = document.getElementById('audioPlayer');
      const audioURL = URL.createObjectURL(fileData.data);
      console.log('Audio URL:', audioURL);

      audioPlayer.src = audioURL;
      audioPlayer.play();
    }
  };

  getRequest.onerror = function(event) {
    console.error('Error retrieving file from IndexedDB');
  };

  transaction.oncomplete = function(event) {
    db.close();
  };
};

request.onerror = function(event) {
  console.error('Error opening IndexedDB');
};