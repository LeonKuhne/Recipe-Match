var express = require('express');
var config = require('../config')
var router = express.Router();

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

function has(str, query){
  return str && str.toLowerCase().includes(query)
}

// does list of strings contain query
function listContains(collection, query) {
  for(let elem of collection) {
    if(has(elem, query)) {
      return true
    }
  }
  return false
}

// search filter functionality
function filterRecipes(collection, query) {
  let list = []
  for(let elem of collection) {
    if(has(elem.title, query) || has(elem.description, query) || listContains(elem.instructions, query)) {
    	list.push(elem)
    } else {
    	for(let ingredient of elem.ingredients) {
	  if(has(ingredient.ingredientName, query)) {
	    list.push(elem)
	  }
	}
    }
  }

  if(list.length == 0)  {
    return collection
  }

  return list
}

router.get('/recipes', function (req, res, next) {
  let results = filterRecipes(config.results.recipes, req.query.query)
  res.render('search', { title: 'Recipes', placeholder: 'Search by name...', pageStyle: 'recipes-page', searchType: '', searchResults: results });
});

router.get('/ingredients', function (req, res, next) {
  let results = filterRecipes(config.results.recipes, req.query.query)
  res.render('search', { title: 'Ingredients', placeholder: 'Search by ingredients...', pageStyle: 'ingredients-page', searchType: 'ingredients-search', searchResults: results });
});

router.get('/my-recipes', function (req, res, next) {
  let results = filterRecipes(config.results.myRecipe, req.query.query)
  res.render('search', { title: 'My Recipes', placeholder: 'Search my recipes...', pageStyle: 'my-recipes-page', searchType: '', searchResults: results });
});

module.exports = router;
