var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/homework-stu.html', function(req, res, next) {
    res.render('homework-stu', { title: '作业' });
});
router.get('/resource-stu.html', function(req, res, next) {
    res.render('resource-stu', { title: '作业' });
});
router.get('/team-stu.html', function(req, res, next) {
    res.render('team-stu', { title: '作业' });
});
router.get('/test.html', function(req, res, next) {
    res.render('test', { title: '作业' });
});
module.exports = router;
