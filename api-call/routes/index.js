const router = require("express").Router();
const axios = require('axios');

/* GET home page */
router.get("/", (req, res, next) => {
  // get the data from the star wars api
  axios.get('https://swapi.py4e.com/api/people')
    .then(response => {
      const characters = response.data.results;

      res.render("index", { characters: characters });
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;
