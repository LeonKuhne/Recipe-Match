var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/recipes', function(req, res, next) {
  res.render('search', { title: 'Recipes' });
});

router.get('/ingredients', function(req, res, next) {
  res.render('search', { title: 'Ingredients' });
});

router.get('/my-recipes', function(req, res, next) {
  res.render('search', { title: 'My Recipes' });
});

module.exports = router;
