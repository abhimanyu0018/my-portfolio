document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typewriter-text');
    const textContent = textElement.innerText;
    let index = 0;

    // Clear the original text content
    textElement.innerText = '';

    function typeWriter() {
        if (index < textContent.length) {
            textElement.innerHTML += textContent.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust the typing speed (milliseconds)
        } else {
            // After typing, start backspacing
            setTimeout(backspace, 1000); // Adjust the delay before backspacing
        }
    }

    function backspace() {
        if (index >= 0) {
            const newText = textContent.substring(0, index);
            textElement.innerHTML = newText;
            index--;
            setTimeout(backspace, 50); // Adjust the backspacing speed (milliseconds)
        } else {
            // After backspacing, restart typing
            index = 0;
            setTimeout(typeWriter, 500); // Adjust the delay before restarting typing
        }
    }

    // Start the typing animation
    typeWriter();
});