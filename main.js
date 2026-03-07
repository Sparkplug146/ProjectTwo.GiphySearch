const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
console.log(input);

form.addEventListener("submit", function(){
    event.preventDefault();

    const searchTerm = input.value;
    console.log(searchTerm);
})

const apiKey = "YOUR_API_KEY";

async function searchGifs(searchTerm) {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=$9rkKRrjFQIofMVpMWFXUvEjf0p3BAIEx&q=${searchTerm}&limit=12`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

}