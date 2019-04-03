var express = require('express');
var router = express.Router();

let recipeResults = []

let potatoResults = [
  {
    id: 0,
    picture: 'fresh.png',
    title: 'Fresh Potato',
    description: 'Izza big potato with lotz of sauze.',
    duration: '2 hours',
    difficulty: 'hard'
  },
  {
    id: 1,
    picture: 'baked.png',
    title: 'Baked Potato',
    description: 'Izza baked potato with lotz of sauze.',
    duration: '30 min',
    difficulty: 'easy'
  }
]

let myRecipeResults = []

router.get('/recipes', function(req, res, next) {
  res.render('search', { title: 'Recipes', pageStyle: 'recipes-page', searchResults:  recipeResults});
});

router.get('/ingredients', function(req, res, next) {
  res.render('search', { title: 'Ingredients', pageStyle: 'ingredients-page', searchType: 'ingredients_search', searchResults: potatoResults});
});

router.get('/my-recipes', function(req, res, next) {
  res.render('search', { title: 'My Recipes', pageStyle: 'my-recipes-page', searchResults: myRecipeResults });
});

module.exports = router;
