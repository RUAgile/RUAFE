/**
 * Created by lynn on 2017/6/27.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
var json1= {
    count: 2,
    team: [{
        name: "团队1",
        leader: "刘春晓",
        member: "于济凡 朱耀华 吴举豪"
    }, {
        name: "团队2",
        leader: "冯凯文",
        member: "宋晏祯 王博"
    }]
};
router.get('/course', function(req, res, next) {
    res.sendFile(__dirname+'tc-cs.html');
});

router.get('/tc-getAcc', function(req, res, next) {
    res.json(json1);
});

module.exports = router;

