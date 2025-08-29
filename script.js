// Example: Display image in a larger element when clicked
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-container img');
  const displayImage = document.getElementById('displayed-img'); // Assumes you have an <img id="displayed-img">

  images.forEach(img => {
    img.addEventListener('click', (event) => {
      if (displayImage) {
        displayImage.src = event.target.src;
        displayImage.alt = event.target.alt;
      }
    });
  });
});