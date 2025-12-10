// REQUIREMENT: Events (DOMContentLoaded ensures HTML is ready before JS runs)
document.addEventListener("DOMContentLoaded", function () {

  // REQUIREMENT: Debugging (Logs a message to the browser console)
  console.log("Gallery script initialized successfully.");

  // REQUIREMENT: Arrays & Objects
const galleryData = [
    {
      url: "images/gallery/1.png",
      alt: "Lyst interiør i fællessalen",
      id: 1 // REQUIREMENT: Types (Number)
    },
    {
      url: "images/gallery/2.png",
      alt: "Yoga hold i gang",
      id: 2
    },
    {
      url: "images/gallery/3.png",
      alt: "Udsigt over naturen",
      id: 3
    },
    {
      url: "images/gallery/4.png",
      alt: "Aftenstemning med lys",
      id: 4
    },
    {
      url: "images/gallery/5.png",
      alt: "Detaljer i indretningen",
      id: 5
    },
    {
      url: "images/gallery/6.png",
      alt: "Fællesskab og hygge",
      id: 6
    }
  ];

  // REQUIREMENT: DOM (Selecting elements from the HTML)
  const galleryImage = document.getElementById("gallery-image");
  const prevBtn = document.getElementById("gallery-prev");
  const nextBtn = document.getElementById("gallery-next");

  // REQUIREMENT: Variables and Types
  let currentIndex = 0;

  // REQUIREMENT: Loops
  // Preload images so they don't lag
  for (let i = 0; i < galleryData.length; i++) {
    const imgObj = new Image();
    imgObj.src = galleryData[i].url;
  }

  // REQUIREMENT: Functions & Variable Scope
  function updateGallery() {
    // REQUIREMENT: Operators (Assignment =)
    const currentSlide = galleryData[currentIndex];
    
    // Updating DOM properties
    galleryImage.src = currentSlide.url;
    galleryImage.alt = currentSlide.alt;

    // Debugging: Log which image we are on
    console.log("Now showing slide index:", currentIndex);
  }

  // REQUIREMENT: Events (Click listener)
  nextBtn.addEventListener("click", function () {
    // REQUIREMENT: Operators (Increment ++)
    currentIndex++;

    // REQUIREMENT: Control Structures (If/Else logic)
    if (currentIndex >= galleryData.length) {
      currentIndex = 0;
    }

    updateGallery();
  });

  prevBtn.addEventListener("click", function () {
    // REQUIREMENT: Operators (Decrement --)
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = galleryData.length - 1;
    }

    updateGallery();
  });

  // Initialize the gallery immediately to ensure correct state on load
  updateGallery();
});