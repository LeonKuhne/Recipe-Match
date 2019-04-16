var express = require('express');
var config = require('../config')
var router = express.Router();

router.get('/recipes', function (req, res, next) {
  res.render('search', { title: 'Recipes', placeholder: 'Search by name...', pageStyle: 'recipes-page', searchType: '', searchResults: config.results.recipes });
});

router.get('/ingredients', function (req, res, next) {
  res.render('search', { title: 'Ingredients', placeholder: 'Search by ingredients...', pageStyle: 'ingredients-page', searchType: 'ingredients-search', searchResults: config.results.recipes });
});

router.get('/my-recipes', function (req, res, next) {
  res.render('search', { title: 'My Recipes', placeholder: 'Search my recipes...', pageStyle: 'my-recipes-page', searchType: '', searchResults: config.results.myRecipe });
});

module.exports = router;
