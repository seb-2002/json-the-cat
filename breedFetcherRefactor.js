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
      console.log(breeds.length);
      const descriptionArray = []; // accumulator
      for (let i = 0; i < breeds.length - 2; i++) {
        descriptionArray.push(breeds[i].description);
      }
      callback(null, descriptionArray); // pass the data into the data parameter of the callback
    } else {
      callback("No cats by that name here!");
    }
  });
};

module.exports = fetchBreedDescription;

// const parse = (error, response, body) => {
//   // pull the JSON string from the next
//   if (error) throw error;
//   let data = JSON.parse(body); // declare data equal to the parsed string
//   if (data.length === 0) {
//     // check that there is something in the data array
//     console.log("No cats by that name here!");
//   } else {
//     console.log(data); // print the data string to the console
//   }
// };
