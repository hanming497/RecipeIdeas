var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    apiId: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('Recipe', recipeSchema);