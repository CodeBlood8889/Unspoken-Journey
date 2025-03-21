let isAnimating = false;

// Split text into spans for animation
function splitTextIntoSpans(selector) {
    document.querySelectorAll(selector).forEach(element => {
        element.innerHTML = element.innerText.split("").map(
            char => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`
        ).join("");
    });
}

// Initialize card positions and animations
function initializeCards() {
    const slider = document.querySelector(".slider");
    const cards = Array.from(slider.querySelectorAll(".card"));

    gsap.set(cards, {
        rotationY: 0,
        opacity: (i) => i === cards.length - 1 ? 1 : 0,
        zIndex: (i) => i,
        transformStyle: "preserve-3d",
    });
}

// Show the text box for the active card only after the image is loaded and then delay
function showTextboxForActiveCard(card) {
    const textBoxClass = card.dataset.textbox;
    const textBox = card.querySelector(`.${textBoxClass}`);
    const backPhoto = card.querySelector('.back-photo img'); // Select the image inside back-photo

    if (textBox && backPhoto) {
        backPhoto.onload = () => {
            setTimeout(() => {
                textBox.style.display = 'block'; // Display the textbox after the delay
                addNextButton(textBox, card); // Add Next button inside the textbox
            }, 2900); // Delay in milliseconds
        };

        // Fallback for cached images
        if (backPhoto.complete) {
            setTimeout(() => {
                textBox.style.display = 'block'; // Display the textbox after the delay
                addNextButton(textBox, card); // Add Next button inside the textbox
            }, 2900);
        }
    }
}

// Add a Next button to the textbox
function addNextButton(textBox, card) {
    if (!textBox.querySelector('.next-card-button')) {
        const button = document.createElement('button');
        button.className = 'next-card-button';
        button.textContent = 'Next';
        button.onclick = () => flipToNextCard(card);
        textBox.appendChild(button);
    }
}

// Flip to the next card
function flipToNextCard(currentCard) {
    if (isAnimating) return;
    isAnimating = true;

    const slider = document.querySelector(".slider");
    const cards = Array.from(slider.querySelectorAll(".card"));

    const lastCard = cards.pop();
    const nextCard = cards[cards.length - 1];

    // Pause video if the current card contains a video
    const video = currentCard.querySelector("video");
    if (video && !video.paused) {
        video.pause();
    }

    // Animate the current card turning
    gsap.to(currentCard, {
        rotationY: -160,
        x: -30,
        z: -80,
        opacity: 0,
        duration: 2,
        ease: "power1.inOut",
        bezier: {
            type: "soft",
            values: [{ x: 0, z: 0 }, { x: -15, z: -40 }, { x: -30, z: -80 }]
        },
        transformOrigin: "left center",
        onComplete: () => {
            slider.prepend(lastCard);
            initializeCards();
            showTextboxForActiveCard(nextCard); // Show text for the new active card
            isAnimating = false;
        }
    });

    // Animate the text leaving the current card
    gsap.to(currentCard.querySelectorAll("h1 span"), {
        y: 200,
        duration: 1.5,
        ease: "power1.inOut"
    });

    // Bring the next card into view
    gsap.set(nextCard, { opacity: 1, zIndex: 1 });
    gsap.to(nextCard.querySelectorAll("h1 span"), {
        y: 0,
        duration: 1.8,
        ease: "power1.inOut",
        stagger: 0.05
    });
}

// Check and handle screen orientation
function checkOrientation() {
    const landscapeMessage = document.getElementById('landscape-message');
    const slider = document.getElementById('slider');

    if (window.innerHeight > window.innerWidth) {
        landscapeMessage.style.display = 'block';
        slider.classList.add('disabled');
    } else {
        landscapeMessage.style.display = 'none';
        slider.classList.remove('disabled');
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

// Handle video click - prevent card flip
document.querySelectorAll('.video-container video').forEach(video => {
    video.addEventListener('click', function(event) {
        event.stopPropagation();  // Prevent the event from bubbling up to the parent element
        if (video.paused) {
            video.play(); // Play the video
        } else {
            video.pause(); // Pause the video
        }
    });
});

// Handle scroll for video card, ensure scrolling only happens in the video card
document.querySelector('#card-third .video-container').addEventListener('wheel', function(event) {
    event.stopPropagation();  // Prevent the scroll event from affecting other cards
    this.scrollTop += event.deltaY; 
});

document.addEventListener("DOMContentLoaded", () => {
    splitTextIntoSpans(".copy h1");
    initializeCards();
    gsap.set("h1 span", { y: -200 });
    gsap.set(".slider .card:last-child h1 span", { y: 0 });
    showTextboxForActiveCard(document.querySelector(".card:last-child")); // Start with the last card
});

// Prevent click propagation for all scrollable text boxes
document.querySelectorAll('.scrollable-text_first, .scrollable-text_second, .scrollable-text_extra, .scrollable-text_fourth, .scrollable-text_fifth').forEach(textbox => {
    textbox.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

function redirectToMsgPage(event) {
    // Stop the event from bubbling up and triggering card animation
    event.stopPropagation();

    // Redirect to the new page
    window.location.href = "conclusion.html";
}

// Prevent video controls from triggering the card click
document.querySelector('#card-sixth .video-container video').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent element
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const totalCards = cards.length;

    cards.forEach((card, index) => {
        const cardNumber = document.createElement("div");
        cardNumber.className = "card-number";

        // Reverse the index (start from 5 and decrement)
        cardNumber.innerText = totalCards - index;
        card.appendChild(cardNumber);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const videoCards = document.querySelectorAll(".card:not([data-textbox])"); // Select cards without a textbox

    videoCards.forEach((card) => {
        const nextButton = document.createElement("button");
        nextButton.className = "next-card-video-button";
        nextButton.textContent = "Next";
        nextButton.onclick = (event) => {
            event.stopPropagation(); // Prevent triggering other click events
            // Check if the card has the ID "card-sixth"
            if (card.id === "card-sixth") {
                redirectToMsgPage(event); // Call the redirect function
            } else {
                flipCard(card); // Call the card flip functionality
            }
        };
        card.appendChild(nextButton);
    });
});

// Function to handle card flipping for the video card
function flipCard(card) {
    if (isAnimating || document.getElementById('landscape-message').style.display === 'block') return;

    isAnimating = true;

    const slider = document.querySelector(".slider");
    const cards = Array.from(slider.querySelectorAll(".card"));

    const lastCard = cards.pop();
    const nextCard = cards[cards.length - 1];

    // Pause video if the last card contains a video
    const video = lastCard.querySelector("video");
    if (video && !video.paused) {
        video.pause();
    }

    // Animate the current card turning
    gsap.to(lastCard, {
        rotationY: -160,
        x: -30,
        z: -80,
        opacity: 0,
        duration: 2,
        ease: "power1.inOut",
        bezier: {
            type: "soft",
            values: [{ x: 0, z: 0 }, { x: -15, z: -40 }, { x: -30, z: -80 }]
        },
        transformOrigin: "left center",
        onComplete: () => {
            slider.prepend(lastCard);
            initializeCards();
            showTextboxForActiveCard(nextCard); // Show text for the new active card
            isAnimating = false;
        }
    });

    // Animate the text leaving the current card
    gsap.to(lastCard.querySelectorAll("h1 span"), {
        y: 200,
        duration: 1.5,
        ease: "power1.inOut"
    });

    // Bring the next card into view
    gsap.set(nextCard, { opacity: 1, zIndex: 1 });
    gsap.to(nextCard.querySelectorAll("h1 span"), {
        y: 0,
        duration: 1.8,
        ease: "power1.inOut",
        stagger: 0.05
    });
}

const fullscreenBtn = document.getElementById('fullscreen-btn');
const wrapper = document.querySelector('.container'); // Changed to match the HTML structure

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
  const envelope = document.querySelector('.envelope'); // Ensure this exists in your HTML

  if (window.innerHeight > window.innerWidth) {
    // Portrait Mode
    landscapeMessage.style.display = 'block';
    envelope?.classList.add('disabled'); // Ensure envelope exists
    fullscreenBtn.style.display = 'none'; // Hide fullscreen button
  } else {
    // Landscape Mode
    landscapeMessage.style.display = 'none';
    envelope?.classList.remove('disabled'); // Ensure envelope exists
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