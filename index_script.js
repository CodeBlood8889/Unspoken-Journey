// Global Variables
const envelope = document.querySelector('.envelope');
const topElem = document.querySelector('.top.flap');
const letter = document.querySelector('.letter');
const navigateButton = document.querySelector('.navigate-button');
const landscapeMessage = document.getElementById('landscape-message');

// GSAP Timeline for Animation
const timeline = gsap.timeline({ paused: true, duration: 0.25 });

// Envelope Click Event
envelope.addEventListener('click', () => {
  if (!timeline.isActive()) {
    timeline.play();
  }
});

// Envelope Animation Sequence
timeline
  .to(topElem, {
    rotateX: 180,
    ease: "power2.out"
  })
  .set(topElem, {
    zIndex: 1,
    pointerEvents: "none"
  })
  .set(envelope, {
    pointerEvents: "none"
  })
  .to(letter, {
    y: "-120%",
    ease: "back.out(2)"
  })
  .set(letter, {
    zIndex: 3
  })
  .to(letter, {
    scale: 1.75,
    y: "10%",
    ease: "back.out(1)"
  })
  .to(letter, {
    scale: 4.5,
    duration: 1.3,
    ease: "power2.out",
    onComplete: () => {
      const message = document.querySelector('.letter .message');
      message.style.fontSize = "6.5px";
      message.style.pointerEvents = "auto";
      navigateButton.style.display = "block";

      // Change the cursor style of the envelope to default
      envelope.style.cursor = "default"; // Disable the pointer cursor
    }
  })
  .to(document.querySelector('.shadow'), {
    scaleX: 4.5,
    scaleY: 1.5,
    duration: 1.3,
  }, "-=1");

// Handle Scrolling Inside Letter
letter.addEventListener('wheel', (event) => {
  event.preventDefault();
  letter.scrollTop += event.deltaY * 0.2;
});

// Handle Navigation Button Click
navigateButton.addEventListener('click', () => {
  window.location.href = './journey.html';
});

const fullscreenBtn = document.getElementById('fullscreen-btn');
const wrapper = document.querySelector('.wrapper');

// Handle Fullscreen Button Click
fullscreenBtn.addEventListener('click', () => {
  if (window.innerHeight < window.innerWidth) { // Check if in landscape mode
    if (!document.fullscreenElement) {
      wrapper.requestFullscreen().catch(err => {
        console.warn(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
    }
  }
});

// Check Orientation and Show Fullscreen Button
function checkOrientation() {
  const landscapeMessage = document.getElementById('landscape-message');
  const envelope = document.querySelector('.envelope');

  if (window.innerHeight > window.innerWidth) {
    // Portrait Mode
    landscapeMessage.style.display = 'block';
    envelope?.classList.add('disabled');
    fullscreenBtn.style.display = 'none'; // Hide fullscreen button
  } else {
    // Landscape Mode
    landscapeMessage.style.display = 'none';
    envelope?.classList.remove('disabled');
    fullscreenBtn.style.display = 'block'; // Show fullscreen button
  }
}

// Exit Fullscreen Handling
function handleFullscreenChange() {
  if (!document.fullscreenElement && window.innerHeight < window.innerWidth) {
    // Ensure the fullscreen button is visible after exiting fullscreen in landscape
    fullscreenBtn.style.display = 'block';
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


