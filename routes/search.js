var express = require('express');
var router = express.Router();

router.get('/recipes', function(req, res, next) {
  res.render('search', { title: 'Recipes', pageStyle: 'recipes-page' });
});

router.get('/ingredients', function(req, res, next) {
  res.render('search', { title: 'Ingredients', pageStyle: 'ingredients-page', searchType: 'ingredients_search' });
});

router.get('/my-recipes', function(req, res, next) {
  res.render('search', { title: 'My Recipes', pageStyle: 'my-recipes-page' });
});

module.exports = router;
