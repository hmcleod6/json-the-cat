const request = require('request');
const catName = process.argv.slice(2);
console.log(catName);

request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (error, response, body) => {
  // console.log('body:', body); 
  // console.log(typeof body)
  if (body) {
    const data = JSON.parse(body);
    // console.log(data);
    if (data.length < 1) {
      console.log('Error! Cat not found.');
    } else {
      console.log(data[0].description);
    }
  }

});