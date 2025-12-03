document.addEventListener("DOMContentLoaded", function () {
    // 1. Array of images (Placeholders for now)
    const images = [
      "https://placehold.co/600x400/ccc/fff?text=Faellessalen+Interior",
      "https://placehold.co/600x400/dcb8b8/fff?text=Yoga+Events",
      "https://placehold.co/600x400/4a5d43/fff?text=Nature+View",
      "https://placehold.co/600x400/333/fff?text=Evening+Mood",
      "https://placehold.co/600x400/E8DFD4/333?text=Details",
      "https://placehold.co/600x400/555/fff?text=Community"
    ];
  
    // 2. Select the elements
    const galleryImage = document.getElementById("gallery-image");
    const prevBtn = document.getElementById("gallery-prev");
    const nextBtn = document.getElementById("gallery-next");
  
    // 3. Current position in the array
    let currentIndex = 0;
  
    // 4. Function to change image
    function updateImage() {
      // Optional: Add a quick fade effect
      galleryImage.style.opacity = "0.5";
      
      setTimeout(() => {
          galleryImage.src = images[currentIndex];
          galleryImage.alt = `Slide ${currentIndex + 1}`;
          galleryImage.style.opacity = "1";
      }, 200); 
    }
  
    // 5. Click Next
    nextBtn.addEventListener("click", function () {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0; // Loop back to start
      }
      updateImage();
    });
  
    // 6. Click Previous
    prevBtn.addEventListener("click", function () {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1; // Loop to end
      }
      updateImage();
    });
  });