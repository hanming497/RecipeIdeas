require('./config/database');

const Ingredient = require('./models/ingredients');
const scrapeIt = require("scrape-it")


Ingredient.remove({}, function (err) {
    console.log("success");
});

scrapeIt("https://food.ndtv.com/ingredient/vegetables", {
    ingredients: {
        listItem: ".vdo_lst ul li",
        data: {
            ingredient: {
                selector: ".vdo_img_cont a",
                attr: "title"
            },
            img: {
                selector: ".vdo_img_cont a img",
                attr: "content"
            }
        }
    }

}).then(({ data, response }) => {
    console.log(`Status Code: ${response.statusCode}`)
    // console.log(data.ingredients)
    return data.ingredients.forEach(ingredient => {
        createIngredient(ingredient.ingredient, "vegetables", ingredient.img)
    })

})


scrapeIt("https://food.ndtv.com/ingredient/meat", {
    ingredients: {
        listItem: ".vdo_lst ul li",
        data: {
            ingredient: {
                selector: ".vdo_img_cont a",
                attr: "title"
            },
            img: {
                selector: ".vdo_img_cont a img",
                attr: "content"
            }
        }
    }

}).then(({ data, response }) => {
    console.log(`Status Code: ${response.statusCode}`)
    // console.log(data.ingredients)
    return data.ingredients.forEach(ingredient => {
        createIngredient(ingredient.ingredient, "meats", ingredient.img)
    })

})

scrapeIt("https://food.ndtv.com/ingredient/spices-and-herbs", {
    ingredients: {
        listItem: ".vdo_lst ul li",
        data: {
            ingredient: {
                selector: ".vdo_img_cont a",
                attr: "title"
            },
            img: {
                selector: ".vdo_img_cont a img",
                attr: "content"
            }
        }
    }

}).then(({ data, response }) => {
    console.log(`Status Code: ${response.statusCode}`)
    // console.log(data.ingredients)
    return data.ingredients.forEach(ingredient => {
        createIngredient(ingredient.ingredient, "spices", ingredient.img)
    })

})



async function createIngredient(ingredientName, ingredientCategory, ingredientImage) {

    let ingredient = new Ingredient({
        name: ingredientName,
        category: ingredientCategory,
        picture: ingredientImage
    });
    await ingredient.save();

}
