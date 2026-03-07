const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const results = document.getElementById("results");
console.log(input);

form.addEventListener("submit", function(event){
    event.preventDefault();

    const searchTerm = input.value;
    console.log(searchTerm);

    searchGifs(searchTerm);
})

const apiKey = "9rkKRrjFQIofMVpMWFXUvEjf0p3BAIEx";

async function searchGifs(searchTerm) {

   const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=12`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    results.innerHTML = "";

data.data.forEach(function(gif) {

    const gifUrl = gif.images.fixed_height.url;

    const img = document.createElement("img");

    img.src = gifUrl;

    results.appendChild(img);

});

}
