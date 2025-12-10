document.addEventListener("DOMContentLoaded", function() {

  // Image data array
  const galleryData = [
    { url: "images/gallery/1.png", alt: "Lyst interiør i fællessalen", id: 1 },
    { url: "images/gallery/2.png", alt: "Yoga hold i gang", id: 2 },
    { url: "images/gallery/3.png", alt: "Udsigt over naturen", id: 3 },
    { url: "images/gallery/4.png", alt: "Aftenstemning med lys", id: 4 },
    { url: "images/gallery/5.png", alt: "Detaljer i indretningen", id: 5 },
    { url: "images/gallery/6.png", alt: "Fællesskab og hygge", id: 6 }
  ];

  const galleryImage = document.getElementById("gallery-image");
  let currentIndex = 0;

  // Preload images
  for (let i = 0; i < galleryData.length; i++) {
    new Image().src = galleryData[i].url;
  }

  function showImage() {
    galleryImage.src = galleryData[currentIndex].url;
    galleryImage.alt = galleryData[currentIndex].alt;
    
    console.log("Current index:", currentIndex);
  }

  // Next button logic
  document.getElementById("gallery-next").addEventListener("click", function() {
    currentIndex++; 

    // Loop back to start if at the end
    if (currentIndex >= galleryData.length) {
      currentIndex = 0; 
    }

    showImage();
  });

  // Previous button logic
  document.getElementById("gallery-prev").addEventListener("click", function() {
    currentIndex--; 

    // Loop to end if at the start
    if (currentIndex < 0) {
      currentIndex = galleryData.length - 1; 
    }

    showImage();
  });
});