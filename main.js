const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
console.log(input);

form.addEventListener("submit", function(){
    event.preventDefault();

    const searchTerm = input.value;
    console.log(searchTerm);
})