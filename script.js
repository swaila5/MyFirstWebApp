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

const duckButton = document.getElementById("duckButton");
const duckImage = document.getElementById("duckImage");
const duckMessage = document.getElementById("duckMessage");

duckButton.addEventListener("click", function() {
    duckImage.src = "https://random-d.uk/api/randomimg?random=" + Date.now();
    duckMessage.innerHTML = "Here is your random duck!";
});


const filmSearchForm = document.getElementById("filmSearchForm");
const filmTitle = document.getElementById("filmTitle");
const filmResults = document.getElementById("filmResults");

filmSearchForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const searchTerm = filmTitle.value.trim();

    if (searchTerm === "") {
        filmResults.textContent = "Please enter a film title.";
        return;
    }

    filmResults.textContent = "Searching for films...";

    try {
        const response = await fetch(
            "https://www.omdbapi.com/?apikey=aec4c862&s=" + 
            encodeURIComponent(searchTerm)
        );

        const data = await response.json();

        if (data.Response === "False") {
            filmResults.textContent =
                data.Error || "No films found. Try another title.";
            return;
        }

        filmResults.replaceChildren();

        data.Search.forEach(function(movie) {
            const movieCard = document.createElement("article");
            const title = document.createElement("h3");
            const details = document.createElement("p");

            title.textContent = movie.Title;
            details.textContent =
                "Year: " + movie.Year +
                " | Type: " + movie.Type;

            movieCard.appendChild(title);
            movieCard.appendChild(details);

            if (movie.Poster && movie.Poster !== "N/A") {
                const poster = document.createElement("img");
                poster.src = movie.Poster;
                poster.alt = movie.Title + " poster";
                poster.width = 100;
                movieCard.appendChild(poster);
            }

            filmResults.appendChild(movieCard);
        });

    } catch (error) {
        filmResults.textContent =
            "Sorry, we could not load film information. Please try again.";
    }
});
