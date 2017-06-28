var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SEPS' });
});

router.get('/index.html',function (req,res,next) {
    res.render('index',{title:'SEPS'});

});
router.get('/src-teacher.html',function (req,res,next) {
    res.render('src-teacher',{title:'SEPS'})
})


module.exports = router;
