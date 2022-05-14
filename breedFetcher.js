const request = require('request');


const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      return callback(response.statusCode, null);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      return callback(`No such breed: ${breedName} is not found`, null);
    }
    return callback(null, data[0].description);

  });
};
module.exports = { fetchBreedDescription };