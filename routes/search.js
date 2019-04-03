var express = require('express');
var config = require('../config')
var router = express.Router();

router.get('/recipes', function (req, res, next) {
  res.render('search', { title: 'Recipes', pageStyle: 'recipes-page', searchResults: config.results.recipe });
});

router.get('/ingredients', function (req, res, next) {
  res.render('search', { title: 'Ingredients', pageStyle: 'ingredients-page', searchType: 'ingredients_search', searchResults: config.results.ingredients });
});

router.get('/my-recipes', function (req, res, next) {
  res.render('search', { title: 'My Recipes', pageStyle: 'my-recipes-page', searchResults: config.results.myRecipe });
});

module.exports = router;
