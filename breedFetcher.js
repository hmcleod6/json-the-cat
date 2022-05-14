const request = require('request');
const catName = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (error, response, body) => {
  if (body) {
    const data = JSON.parse(body);
    data.length ? console.log(data[0].description) : console.log('Oops! Cat not found!');
  } else {
    console.log(`Error found: ${error}`);
  }
});