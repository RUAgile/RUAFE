/**
 * Created by lynn on 2017/6/27.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/course', function(req, res, next) {
    res.sendFile(__dirname+'tc-cs.html');
});

module.exports = router;

