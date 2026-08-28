```javascript
// ================================
// PORTFOLIO BUTTON INTERACTIONS
// ================================

// Get the button
const button = document.querySelector(".button");

// Add click effect
button.addEventListener("click", function () {

    // Change button text temporarily
    button.textContent = "Welcome! 🌸";

    // Return to the original text after 1.5 seconds
    setTimeout(function () {
        button.textContent = "Learn More About Me";
    }, 1500);

});
```
