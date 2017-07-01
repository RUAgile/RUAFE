var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SEPS' });
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

router.get('/tc-mk.html',function (req,res,next) {
    res.render('tc-mk',{title:'SEPS'});
});
router.get('/tc-ci.html',function (req,res,next) {
    res.render('tc-ci',{title:'SEPS'});
});
module.exports = router;
