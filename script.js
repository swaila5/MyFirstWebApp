const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nameInput.value.trim() === "") {
        message.innerHTML = "Please enter your name.";
    } else {
        message.innerHTML = "Thank you, " + nameInput.value + "! We received your email: " + emailInput.value;
    }
});

const infoButton = document.getElementById("infoButton");
const infoMessage = document.getElementById("infoMessage");

infoButton.addEventListener("click", function() {
    if (infoMessage.style.display === "none") {
        infoMessage.style.display = "block";
        infoMessage.style.color= "blue";
        infoMessage.innerHTML = "Welcome to my website!";
        infoMessage.style.fontSize = "30px";
        infoMessage.style.backgroundColor = "yellow";
        infoMessage.style.fontWeight = "bold";
        infoButton.innerHTML = "Hide Message";
        infoButton.style.backgroundColor = "blue";
    } else {
        infoMessage.style.display = "none";
        infoButton.innerHTML = "Show Message";
        infoButton.style.backgroundColor ="";
    }
});