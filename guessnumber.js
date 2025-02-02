let randomNumber = Math.ceil(Math.random() * 100) + 1;
function checkGuess() {
    const userInput = document.getElementById("userGuess").value;
    const message = document.getElementById("message");

    let guess = Number(userInput); // Convert input to a number

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100!";
        message.style.color = "orange";
    } else if (guess > randomNumber) {
        message.textContent = "Too high! Try again.";
        message.style.color = "red";
    } else if (guess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "blue";
    } else {
        message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
        message.style.color = "green";
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Reset number
    document.getElementById("userGuess").value = ""; // Clear input
    document.getElementById("message").textContent = "Game restarted! Try again.";
    document.getElementById("message").style.color = "black";
}