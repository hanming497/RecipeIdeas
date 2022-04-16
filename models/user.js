var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }]

}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);