// script.js

// Function to change the text color of an element
function changeTextColor() {
    // Get the element with the id "text-to-change"
    var textElement = document.getElementById("text-to-change");

    // Generate a random color (hex format)
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Change the text color to the random color
    textElement.style.color = randomColor;
}

// You can add more functions or interactivity as needed
