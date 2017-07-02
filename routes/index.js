var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SEPS' });
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
router.get('/im-stu.html', function(req, res, next) {
    res.render('im-stu', { title: '交流' });
});
router.get('/classinfo-stu.html', function(req, res, next) {
    res.render('classinfo-stu', { title: '课程信息' });
});
router.get('/index.html',function (req,res,next) {
    res.render('index',{title:'SEPS'});
});
router.get('/tc-src.html',function (req,res,next) {
    res.render('tc-src',{title:'SEPS'});
});
router.get('/tc-hw.html',function (req,res,next) {
    res.render('tc-hw',{title:'SEPS'});
});
router.get('/tc-tm.html',function (req,res,next) {
    res.render('tc-tm',{title:'SEPS'});
});
router.get('/dn-course.html',function (req,res,next) {
    res.render('dn-course',{title:'SEPS'});
});
router.get('/dn-account.html',function (req,res,next) {
    res.render('dn-account',{title:'SEPS'});
});
module.exports = router;
