var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes');




router.get('/recipes', function (req, res, next) {

    recipesCtrl.searchRecipe(req, res, next);

});

router.post('/userrecipe/:id/:recipeId', function (req, res, next) {
    recipesCtrl.addRecipe(req, res, next);
})

router.delete('userrecipe/:id/:recipeId', function (req, res, next) {
    recipesCtrl.deleteRecipe(req, res, next);
})

module.exports = router;
