var express = require('express');
var router = express.Router();
var config = require('../config')

/* Find a recipe with format 'recipe-n'. */
function findRecipe(recipeId) {
  results = config.results
  recipes = results.recipes.concat(results.ingredients, results.myRecipe)

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
  // search for the recipe -_-
  let recipe = findRecipe(req.query.recipeId)

  res.json(recipe)
});

/* Create new recipe. */
router.post('/add', function (req, res, next) {
  let results = config.results

  // add the recipe to the config
  let recipe = req.body
  recipe.ingredients = JSON.parse(recipe.ingredients)
  recipe.instructions = JSON.parse(recipe.instructions)
  recipes = results.recipes.concat(results.recipes, results.myRecipe)
  recipe.id = recipes.length + 1
  config.results.myRecipe.push(recipe)
  config.results.recipes.push(recipe)

  res.status(200).send()
});

/* Delete existing recipe. */
router.post('/remove', function (req, res, next) {
  let results = config.results

  // remove the recipe from the config
  let recipeIdToDelete = req.query.recipeId
  
  // delete recipe in general recipes
  for(let i=0; i<results.recipes.length; i++) {
    let recipe = results.recipes[i]
    if('recipe-' + recipe.id === recipeIdToDelete) {
      results.recipes.splice(i, 1) // remove
      i=results.recipes.length // break
    }
  }

  // delete recipe in my recipes
  for(let i=0; i<results.myRecipe.length; i++) {
    let recipe = results.myRecipe[i]
    if('recipe-' + recipe.id == recipeIdToDelete) {
      results.myRecipe.splice(i, 1) // remove
      i=results.recipes.length // break
    }
  }
  
  res.status(200).send()
});


module.exports = router;
