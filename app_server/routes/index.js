var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/*
var homepageController = function (req, res) {
  res.render('index', { title: 'Express' });
};
*/

router.get('/', ctrlMain.index);

/* GET home page.
router.get('/', function(req, res, nex) {
  res.render('index', { title: 'Express' });
});

*/

module.exports = router;
