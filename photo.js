// Check and handle screen orientation
function checkOrientation() {
    const landscapeMessage = document.getElementById('landscape-message');
    const container = document.querySelector('.container');

    if (window.innerHeight > window.innerWidth) {
        // Portrait mode
        landscapeMessage.style.display = 'block';
        container.classList.add('disabled'); // Disable interactions
    } else {
        // Landscape mode
        landscapeMessage.style.display = 'none';
        container.classList.remove('disabled'); // Enable interactions
    }
}

// Add event listeners for orientation change
window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

// Example image URLs array
const imageUrls = [
  "https://cdn.glitch.global/cab54a64-85d6-4f39-9167-25f7e3296412/first_nat.jpg?v=1734015835905",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://cdn.glitch.global/cab54a64-85d6-4f39-9167-25f7e3296412/first_nat.jpg?v=1734015835905",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://cdn.glitch.global/cab54a64-85d6-4f39-9167-25f7e3296412/first_nat.jpg?v=1734015835905",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://cdn.glitch.global/cab54a64-85d6-4f39-9167-25f7e3296412/first_nat.jpg?v=1734015835905",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://cdn.glitch.global/cab54a64-85d6-4f39-9167-25f7e3296412/first_nat.jpg?v=1734015835905",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://cdn.glitch.global/cab54a64-85d6-4f39-9167-25f7e3296412/first_nat.jpg?v=1734015835905",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://cdn.glitch.global/cab54a64-85d6-4f39-9167-25f7e3296412/first_nat.jpg?v=1734015835905",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://cdn.glitch.global/cab54a64-85d6-4f39-9167-25f7e3296412/first_nat.jpg?v=1734015835905",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/f0/d7/29/f0d7292668653b38ec1866f348eb5024.jpg",
  // Add more image URLs here
];

// Function to generate the gallery
function generateGallery() {
    const galleryContainer = document.getElementById("gallery-container");

    // Ensure gallery container exists
    if (!galleryContainer) {
        console.error("Gallery container not found!");
        return;
    }
    
    // Loop through the image URLs and create elements
    imageUrls.forEach(url => {
        const picDiv = document.createElement('div');
        picDiv.classList.add('pic');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = "Photo";
        
        cardDiv.appendChild(img);
        picDiv.appendChild(cardDiv);
        
        const faderDiv = document.createElement('div');
        faderDiv.classList.add('fader');
        picDiv.appendChild(faderDiv);
        
        galleryContainer.appendChild(picDiv);
    });
}

// Call the function to generate the gallery on page load
document.addEventListener("DOMContentLoaded", generateGallery);

// Add click event to the "Next" button
document.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.getElementById("nextButton");
    
    if (nextButton) {
        nextButton.addEventListener("click", () => {
            window.location.href = "ending.html"; // Redirect to ending.html
        });
    } else {
        console.error("Next button not found!");
    }
});

const fullscreenBtn = document.getElementById('fullscreen-btn');
const container = document.querySelector('.container'); // Use .container instead of .wrapper

// Handle Fullscreen Button Click
fullscreenBtn.addEventListener('click', () => {
    if (window.innerHeight < window.innerWidth) { // Check if in landscape mode
      if (!document.fullscreenElement) {
        container.requestFullscreen().then(() => {
          container.style.overflowY = 'auto'; // Enable scrolling in fullscreen
        }).catch(err => {
          console.warn(`Error attempting to enable fullscreen mode: ${err.message}`);
        });
      }
    }
  })

// Check Orientation and Show Fullscreen Button
function checkOrientation() {
  const landscapeMessage = document.getElementById('landscape-message');

  if (window.innerHeight > window.innerWidth) {
    // Portrait Mode
    landscapeMessage.style.display = 'block';
    fullscreenBtn.style.display = 'none'; // Hide fullscreen button
  } else {
    // Landscape Mode
    landscapeMessage.style.display = 'none';
    fullscreenBtn.style.display = 'block'; // Show fullscreen button
  }
}

// Exit Fullscreen Handling
function handleFullscreenChange() {
    if (!document.fullscreenElement) {
      // Ensure container overflow is restored after exiting fullscreen
      container.style.overflowY = ''; // Reset to default (inherits from body or CSS)
      fullscreenBtn.style.display = 'block'; // Show fullscreen button again
    }
  }

// Listen for Fullscreen Change Events
document.addEventListener('fullscreenchange', handleFullscreenChange);

// Exit Fullscreen on Orientation Change to Portrait
window.addEventListener('orientationchange', () => {
  if (window.innerHeight > window.innerWidth && document.fullscreenElement) {
    document.exitFullscreen().catch(err => {
      console.warn(`Error attempting to exit fullscreen mode: ${err.message}`);
    });
  }
});

// Initial Orientation Check
window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

