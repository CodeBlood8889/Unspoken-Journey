const sendButton = document.getElementById("sendButton");
const userMessage = document.getElementById("userMessage");
const loadingSpinner = document.getElementById("loadingSpinner");

function updateButtonText() {
    if (!userMessage.value.trim()) {
        sendButton.textContent = "Exit Without Saying Anything";
    } else {
        sendButton.textContent = "Send";
    }
}

// Update the button text when typing in the textarea
userMessage.addEventListener("input", updateButtonText);

// Handle the send button click
sendButton.addEventListener("click", () => {
    if (!userMessage.value.trim()) {
        alert("You chose to exit without saying anything.");
        return;
    }

    // Show the spinner and disable the button
    loadingSpinner.style.display = "block";
    sendButton.disabled = true;

    emailjs
        .send("service_mo94e8f", "template_a2brcba", { message: userMessage.value })
        .then(() => {
            // Hide the spinner and re-enable the button
            loadingSpinner.style.display = "none";
            sendButton.disabled = false;

            // Successfully sent email
            const thankYouMessage = document.getElementById("thankYouMessage");
            thankYouMessage.classList.remove("hidden");
            thankYouMessage.classList.add("visible");
            userMessage.value = ""; // Clear the textarea
            updateButtonText(); // Update the button text
        })
        .catch((error) => {
            // Hide the spinner and re-enable the button
            loadingSpinner.style.display = "none";
            sendButton.disabled = false;

            console.error("Failed to send the email:", error);
            alert("Oops! Something went wrong. Please try again.");
        });
});
