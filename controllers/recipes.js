const Recipe = require('../models/recipe');
var axios = require("axios").default;
const User = require('../models/user');

function searchRecipe(req, res, next) {

    var options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
        params: {
            ingredients: req.query['1'],
            number: '5',
            ignorePantry: 'true',
            ranking: '1'
        },
        headers: {
            'x-rapidapi-host': process.env.RAPIDAPI,
            'x-rapidapi-key': process.env.RAPIDAPIKEY
        }
    };

    axios.request(options).then(function (response) {

        console.log(response.data);
        res.send(response.data)
        response.data.forEach((recipe) => {
            Recipe.create({
                name: recipe.title,
                apiId: recipe.id
            })
        })

    }).catch(function (error) {
        console.error(error);
    });


}

function addRecipe(req, res, next) {

    User.findById(req.params.id, (err, user) => {
        Recipe.findById(req.params.recipeId, (err, recipe) => {

            user.recipes.push(recipe);
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

function deleteRecipe(req, res, next) {
    User.findById(req.params.id, (err, user) => {

        let text = user.recipes.filter((recipe) => {
            return recipe == req.params.recipeId
        });

        user.recipes.splice(user.recipes.indexOf(text[0]), 1);

        user.save(function (err) {
            res.send('removed');
        });

    }
    )
}

module.exports = {
    searchRecipe,
    addRecipe,
    deleteRecipe
}