





const quote = document.getElementById("quote");
const author = document.getElementById("author");

// Corrected API URL
const api_url = "https://icanhazdadjoke.com/";

async function getquote(url) {
    // Added headers to accept JSON
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    });

    var data = await response.json();

    // Corrected the property names to match the API response
    quote.innerHTML = data.joke;
    author.innerHTML = "Anonymous"; // 'author' field is not provided by icanhazdadjoke API
}

// Initial call to load the first joke
getquote(api_url);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML, "tweet window", "width=600,height=300");
}






















