
const User = require('../models/user');



function getUsers(req, res, next) {
    User.find({}, (err, users) => {
        if (err) {
            console.log(err);
        } else {
            res.send(users);
        }
    })
}

function addUser(req, res, next) {
    User.create(req.body, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.send(user);
        }
    })
}

module.exports = {
    getUsers,
    addUser
}