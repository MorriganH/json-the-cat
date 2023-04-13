const fetchBreedDescription = require('./breedFetcher');

// get the query from CLI
let breedName = process.argv.slice(2);

// if the name of the cat is multiple words, combine them with underscore for the url
if (breedName.length > 1) {
  breedName = breedName.join('_');
}

// calls the function in breedFetcher.js
fetchBreedDescription(breedName, (error, desc) => {

  // if error was called back, display error
  if (error) {
    console.log("Error fetch details:\n", error);
  } else { // display breed description
    console.log(desc);
  }
});