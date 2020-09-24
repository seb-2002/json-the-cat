const request = require("request");

// variables
let url = "https://api.thecatapi.com/v1/breeds/search?q=";
let searchTerm = process.argv[2];

// append the search term to the url
let generateSearchSite = (searchTerm, url) => url + searchTerm; // and if there is more than one search term?

// call the function to generate the complete url
let site = generateSearchSite(searchTerm, url);

// pull the JSON
request(site, (error, response, body) => {
  if (error) throw error;
  parse(body);
});

const parse = (data) => {
  data = JSON.parse(data); // turns the body string into a JSON array
  if (data.length === 0) {
    console.log("No cats by that name here!");
  } else {
    console.log(data);
  }
};
