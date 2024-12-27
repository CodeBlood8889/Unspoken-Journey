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

// Show the text box for the active card with a delay
function showTextboxForActiveCard(card) {
    const textBoxClass = card.dataset.textbox;
    const textBox = card.querySelector(`.${textBoxClass}`);

    if (textBox) {
        setTimeout(() => {
            textBox.style.display = 'block';
        }, 2900); // Timer starts after the card becomes visible
    }
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
    // This makes sure only the video card can scroll
    this.scrollTop += event.deltaY; 
});

document.addEventListener("DOMContentLoaded", () => {
    splitTextIntoSpans(".copy h1");
    initializeCards();
    gsap.set("h1 span", { y: -200 });
    gsap.set(".slider .card:last-child h1 span", { y: 0 });
    showTextboxForActiveCard(document.querySelector(".card:last-child")); // Start with the last card
});

document.addEventListener("click", (event) => {
    if (isAnimating || document.getElementById('landscape-message').style.display === 'block') return;

    // Check if the clicked element is the sixth card or its container
    if (event.target.closest("#card-sixth") || (event.target.closest("#container-id") && document.getElementById('card-sixth'))) {
        return; // If it's the sixth card or its container, do nothing, just redirect
    }

    // Proceed with card animation for other clicks
    isAnimating = true;

    const slider = document.querySelector(".slider");
    const cards = Array.from(slider.querySelectorAll(".card"));

    const lastCard = cards.pop();
    const nextCard = cards[cards.length - 1];

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
