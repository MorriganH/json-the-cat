const request = require('request');

// get the query from CLI
let query = process.argv.slice(2);

// if the name of the cat is multiple words, combine them with underscore for the url
if (query.length > 1) {
  query = query.join('_');
}

// request the specified cat data
request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {

  // if error, print error and exit
  if (error) {
    console.log(error);
    return;
  }

  // parse data into usable format
  const data = JSON.parse(body);
  
  // if data returned empty, breed must not exist.
  if (data.length === 0) {
    console.log("Breed not found");
    return;
  }

  // if everything worked, print the description
  console.log(data[0].description);
});