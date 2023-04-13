const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  
  // request the specified cat data
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    // if error, callback error and exit
    if (error) {
      callback(error);
      return;
    }
    
    // parse data into usable format
    const data = JSON.parse(body);
    
    // if data returned empty, breed must not exist.
    if (data.length === 0) {
      callback('Breed not found');
      return;
    }
    
    // if everything worked, callback the description
    callback(error, data[0].description);
  });
};
  
module.exports = fetchBreedDescription;