document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.getElementById('image-container');
    const images = imageContainer.querySelectorAll('img');

    images.forEach(image => {
      const aspectRatio = image.naturalHeight / image.naturalWidth;
      const calculatedWidth = 200;
      const calculatedHeight = calculatedWidth * aspectRatio;

      // Calculate the number of rows the image should span
      const rowSpan = Math.ceil(calculatedHeight / 10);

      image.classList.add('image-item');
      image.style.width = `${calculatedWidth}px`;
      image.style.height = `${calculatedHeight}px`;
      image.style.gridRowEnd = `span ${rowSpan}`;
    });
  });