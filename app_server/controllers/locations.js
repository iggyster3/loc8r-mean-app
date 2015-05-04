/* GET Home Page */
module.exports.homelist = function(req, res) {
  res.render('index', { title: 'Home'});
};

/* GET Location Page */
module.exports.locationInfo = function(req, res) {
  res.render('index', { title: 'Location info'});
};

/* GET Add Review Page */
module.exports.addReview = function(req, res) {
  res.render('index', { title: 'Add Review'});
};
