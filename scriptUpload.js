const fileInput = document.getElementById('file-input');
const imageContainer = document.getElementById('image-container');
const maxUploads = 10;

fileInput.addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const files = event.target.files;

    if (files.length > 0) {
        // Clear old images
        imageContainer.innerHTML = '';

        // Display up to maxUploads images
        for (let i = 0; i < Math.min(files.length, maxUploads); i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                imageContainer.appendChild(img);
            };

            reader.readAsDataURL(file);
        }
    }
}

// Automatically delete old images (not permanently, just remove from the display)
function deleteOldImages() {
    const images = imageContainer.querySelectorAll('img');
    if (images.length > maxUploads) {
        for (let i = 0; i < images.length - maxUploads; i++) {
            images[i].remove();
        }
    }
}

// Call deleteOldImages function periodically (for example, every minute)
setInterval(deleteOldImages, 60000); // 60000 milliseconds = 1 minute





const textInput = document.getElementById('text-input');
const textContainer = document.getElementById('text-container');
const maxEntries = 50;

textInput.addEventListener('input', handleTextEntry);

function handleTextEntry(event) {
    const text = event.target.value.trim();

    // Clear old entries
    textContainer.innerHTML = '';

    // Split text into individual entries and display up to maxEntries
    const entries = text.split('\n').slice(0, maxEntries);
    entries.forEach(entry => {
        if (entry.trim() !== '') {
            const div = document.createElement('div');
            div.className = 'text-entry';
            div.textContent = entry;
            textContainer.appendChild(div);
        }
    });
}

// Automatically delete old entries starting from the first one
function deleteOldEntries() {
    const entries = textContainer.querySelectorAll('.text-entry');
    if (entries.length > maxEntries) {
        for (let i = 0; i < entries.length - maxEntries; i++) {
            entries[i].remove();
        }
    }
}

// Call deleteOldEntries function periodically (for example, every minute)
setInterval(deleteOldEntries, 60000); // 60000 milliseconds = 1 minute






document.addEventListener("DOMContentLoaded", function () {
    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});


