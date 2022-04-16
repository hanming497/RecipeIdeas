var express = require('express');
var router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');




router.get('/ingredients', function (req, res, next) {
    ingredientsCtrl.getIngredients(req, res, next);

});

router.get('/oneingredient', function (req, res, next) {
    ingredientsCtrl.getOne(req, res, next);

});

router.post('/useringredient/:id/:ingredientId', function (req, res, next) {
    ingredientsCtrl.addIngredient(req, res, next);
})

router.delete('/useringredient/:id/:recipeId', function (req, res, next) {
    ingredientsCtrl.removeIngredient(req, res, next);
})

module.exports = router;
