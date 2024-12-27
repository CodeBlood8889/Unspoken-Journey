const envelope = $('.envelope');
const topElem = $('.top.flap');
const letter = $('.letter');
const close = $('.letter .close');
const shadow = $('.shadow');
const navigateButton = document.querySelector('.navigate-button'); // Target the button

const timeline = gsap.timeline({ paused: true, duration: 0.25 });

$(envelope).on('click', e => {
  e.stopImmediatePropagation();
  timeline.play();
});
$(close).on('click', e => {
  e.stopImmediatePropagation();
  timeline.reverse();
});

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
    scale: 4.5, // Increase scale for the letter to become bigger
    duration: 1.3, // Duration of the scale transition
    ease: "power2.out",
    onComplete: () => {
      // Adjust font size dynamically after the transition
      const message = document.querySelector('.letter .message');
      message.style.fontSize = "6.5px";
      message.style.pointerEvents = "auto"; // Enable interaction for scrolling
      navigateButton.style.display = "block"; // Make the button visible after transition
    }
  })
  .to(shadow, {
    scaleX: 4.5, // Adjust shadow scaling proportionally
    scaleY: 1.5,
    duration: 1.3,
  }, "-=1"); // Sync shadow scaling with letter scaling

// Target the parent container of the `.message` for scrolling
const letterElement = document.querySelector('.letter');

letterElement.addEventListener('wheel', (event) => {
  event.preventDefault(); // Prevent default fast scrolling
  letterElement.scrollTop += event.deltaY * 0.2; // Adjust the multiplier for speed
});

// Add navigation functionality to the button
navigateButton.addEventListener('click', () => {
  window.location.href = './journey.html'; // Path to the next HTML file
});
