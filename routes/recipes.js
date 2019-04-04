var express = require('express');
var router = express.Router();
var config = require('../config')

/* Find a recipe with format 'recipe-n'. */
function findRecipe(recipeId) {
  results = config.results
  recipes = results.recipe.concat(results.ingredients, results.myRecipe)

  for (let recipe of recipes) {
    if ('recipe-' + recipe.id === recipeId) {
      return recipe
    }
  }

  console.log('ERROR: found unknown recipe with id: ' + recipeId)
  return {}
}

/* Create new recipe. */
router.get('/', function (req, res, next) {
  // add the recipe to the config
  console.log('id is: ' + req.query.recipeId)

  // search for the recipe -_-
  let recipe = findRecipe(req.query.recipeId)

  res.json(recipe)
});

/* Create new recipe. */
router.post('/add', function (req, res, next) {
  // add the recipe to the config
  console.log('the body is:' + req.body)
  config.results.myRecipe.push(req.body)

  res.status(200).send()
});

module.exports = router;
