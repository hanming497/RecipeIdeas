var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    picture: String

}, {
    timestamps: true
});


module.exports = mongoose.model('Ingredient', ingredientSchema);