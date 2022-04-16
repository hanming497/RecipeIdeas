var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/', function (req, res, next) {
  usersCtrl.getUsers(req, res, next);
});

router.post('/new', function (req, res, next) {
  usersCtrl.addUser(req, res, next);
});
module.exports = router;
