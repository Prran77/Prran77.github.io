// Inside your script.js file
console.log("My script.js file is connected!"); 
const images = document.querySelectorAll('#image-carousel .image-container img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentImageIndex = 0;

function showImage() {
    images.forEach(image => {
        image.style.display = 'none'; // Hide all images first
     });

    images[currentImageIndex].style.display = 'block'; // Show only the current image 
    images.forEach(image => {
        image.style.transform = 'translateX(-' + currentImageIndex * 100 + '%)'; 
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage();
}

// Initial display
showImage(); 

// Add click event listeners to buttons
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
