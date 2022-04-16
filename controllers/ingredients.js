const Ingredient = require('../models/ingredient');
const User = require('../models/user');

function getIngredients(req, res, next) {
    Ingredient.find({}, (err, ingredients) => {
        if (err) {
            console.log(err);
        } else {
            res.send(ingredients);
        }
    })
}
function getOne(req, res, next) {
    Ingredient.find({}, (err, ingredients) => {
        if (err) {
            console.log(err);
        } else {
            let random = Math.floor(Math.random() * ingredients.length);
            res.send(ingredients[random]);
        }
    })
}

function addIngredient(req, res, next) {

    User.findById(req.params.id, (err, user) => {
        Ingredient.findById(req.params.ingredientId, (err, ingredient) => {

            user.ingredients.push(ingredient);
            user.save((err, user) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(user);
                }
            })

        })
    }
    )
}

function removeIngredient(req, res, next) {
    User.findById(req.params.id, (err, user) => {

        let text = user.ingredients.filter((ingredient) => {
            return ingredient == req.params.ingredientId
        });

        user.ingredients.splice(user.ingredients.indexOf(text[0]), 1);

        user.save(function (err) {
            res.send('removed');
        });

    }
    )
}















module.exports = {
    getIngredients,
    getOne,
    addIngredient,
    removeIngredient
}