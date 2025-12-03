// REQUIREMENT: Events (DOMContentLoaded ensures HTML is ready before JS runs)
document.addEventListener("DOMContentLoaded", function () {

    // REQUIREMENT: Debugging (Logs a message to the browser console)
    console.log("Gallery script initialized successfully.");
  
    // REQUIREMENT: Arrays & Objects
    // We use an Array of Objects to store image data. 
    // This allows us to pair the URL with specific Alt text.
    const galleryData = [
      {
        url: "https://placehold.co/600x400/ccc/fff?text=Faellessalen+Interior",
        alt: "Lyst interiør i fællessalen",
        id: 1 // REQUIREMENT: Types (Number)
      },
      {
        url: "https://placehold.co/600x400/dcb8b8/fff?text=Yoga+Events",
        alt: "Yoga hold i gang",
        id: 2
      },
      {
        url: "https://placehold.co/600x400/4a5d43/fff?text=Nature+View",
        alt: "Udsigt over naturen",
        id: 3
      },
      {
        url: "https://placehold.co/600x400/333/fff?text=Evening+Mood",
        alt: "Aftenstemning med lys",
        id: 4
      },
      {
        url: "https://placehold.co/600x400/E8DFD4/333?text=Details",
        alt: "Detaljer i indretningen",
        id: 5
      },
      {
        url: "https://placehold.co/600x400/555/fff?text=Community",
        alt: "Fællesskab og hygge",
        id: 6
      }
    ];
  
    // REQUIREMENT: DOM (Selecting elements from the HTML)
    const galleryImage = document.getElementById("gallery-image");
    const prevBtn = document.getElementById("gallery-prev");
    const nextBtn = document.getElementById("gallery-next");
  
    // REQUIREMENT: Variables and Types
    // 'currentIndex' is a Number type. We use 'let' because it changes.
    let currentIndex = 0;
  
    // REQUIREMENT: Loops
    // We use a loop to "preload" images so they don't lag when the user clicks.
    // This iterates through our array of objects.
    for (let i = 0; i < galleryData.length; i++) {
      const imgObj = new Image();
      imgObj.src = galleryData[i].url;
    }
  
    // REQUIREMENT: Functions & Variable Scope
    // This function can access 'galleryData' because it's in the parent scope.
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
      // If we go past the end of the array, loop back to the start (0)
      if (currentIndex >= galleryData.length) {
        currentIndex = 0;
      }
  
      updateGallery();
    });
  
    prevBtn.addEventListener("click", function () {
      // REQUIREMENT: Operators (Decrement --)
      currentIndex--;
  
      // If we go below zero, jump to the last item in the array
      if (currentIndex < 0) {
        currentIndex = galleryData.length - 1;
      }
  
      updateGallery();
    });
  });