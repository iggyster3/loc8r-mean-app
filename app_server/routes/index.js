var express = require('express');
var router = express.Router();

var homepageController = function (req, res) {
  res.render('index', { title: 'Express' });
};

router.get('/', homepageController);

/* GET home page.
router.get('/', function(req, res, nex) {
  res.render('index', { title: 'Express' });
});

*/

module.exports = router;
