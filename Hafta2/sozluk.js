// Create an indexed collection for the encyclopedia
var encyclopedia = new Map();

// Add a new meaning for a given term
function addMeaning(term, meaning) {
    if (!encyclopedia.has(term)) {
        // If the term does not exist, create it
        encyclopedia.set(term, []);
    }
    // Add the meaning to the term's list of meanings
    encyclopedia.get(term).push(meaning);
}

// Find the meaning of a given term
function findMeaning(term) {
    if (!encyclopedia.has(term)) {
        console.log("The term '" + term + "' does not exist in the encyclopedia.");
    } else {
        console.log("Meanings for the term '" + term + "':");
        console.log(encyclopedia.get(term));
    }
}

// Get the form and textarea elements
var form = document.getElementById("encyclopedia-form");
var textarea = document.getElementById("term-meaning");

// Add an event listener to the form's "Perform Operations" button
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the input from the textarea
    var input = textarea.value;

    // Split the input into a term and a meaning
    var splitInput = input.split(":");
    var term = splitInput[0].trim();
    var meaning = splitInput[1].trim();

    // Perform the appropriate operation based on whether the input contains a ":"
    if (input.indexOf(":") === -1) {
        findMeaning(term);
    } else {
        addMeaning(term, meaning);
    }
});