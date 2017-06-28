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
    res.render('resource-stu', { title: '资源' });
});
router.get('/team-stu.html', function(req, res, next) {
    res.render('team-stu', { title: '团队' });
});
router.get('/test.html', function(req, res, next) {
    res.render('test', { title: '测试' });
});
router.get('/im-stu.html', function(req, res, next) {
    res.render('im-stu', { title: '交流' });
});
router.get('/classinfo-stu.html', function(req, res, next) {
    res.render('classinfo-stu', { title: '课程信息' });
});
module.exports = router;
