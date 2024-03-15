// Array of image URLs
const images = [
	'image1.jpg',
	'image2.jpg',
	'image3.jpg'
];

// Get the image element
const imageElement = document.getElementById('slideshow-image');

// Set initial image index
let currentImageIndex = 0;

// Function to update the image source
function updateImage() {
	imageElement.src = images[currentImageIndex];
}

// Function to cycle through the images
function cycleImages() {
	// Increment the image index
	currentImageIndex++;

	// Reset the index if it exceeds the array length
	if (currentImageIndex >= images.length) {
		currentImageIndex = 0;
	}

	// Update the image source
	updateImage();
}

// Start the slideshow
setInterval(cycleImages, 3000); // Change the interval time (in milliseconds) as needed