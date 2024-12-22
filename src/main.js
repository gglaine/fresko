import './style.css';

// Path to the public folder (Vite automatically serves from /public)
const imagePath = '/instagram/';

// Image filenames (you can automate this if filenames are consistent)
const imageCount = 27;
const images = Array.from({ length: imageCount }, (_, i) => `Screenshot 2024-${i + 1}.png`);

// Reference to the gallery container
const gallery = document.getElementById('gallery');

// Create thumbnails and append to the gallery
images.forEach((image) => {
  const img = document.createElement('img');
  img.src = `${imagePath}${image}`;
  img.alt = image;
  img.className = 'w-full h-full object-cover rounded-lg shadow hover:scale-105 transform transition duration-300';

  const container = document.createElement('div');
  container.className = 'overflow-hidden rounded-lg';
  container.appendChild(img);

  gallery.appendChild(container);
});
