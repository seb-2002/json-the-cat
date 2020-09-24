const request = require("request");

// callback takes (error, data)
const fetchBreedDescription = (breedName, callback) => {
  //add the search term to the url using a string literal
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    // this is standard syntax for request
    if (error) {
      return callback(error, null); //return breaks the flow
    }
    const breeds = JSON.parse(body); // parse the body string into a JSON array
    if (breeds.length > 0) {
      callback(null, breeds[0].description); // pass the data into the data parameter of the callback
    } else {
      callback(null, "No cats by that name here!");
    }
  });
};

module.exports = fetchBreedDescription;
