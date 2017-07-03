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
        member: "于济凡 朱耀华 吴举豪",
        gmember:"刘春晓"
    }, {
        name: "团队2",
        leader: "冯凯文",
        member: "宋晏祯 王博",
        gmember:"刘春晓"
    }]
};
var json2= {
    count: 2,
    team: [{
        name: "团队7",
        leader: "刘春晓",
        member: "于济凡 朱耀华 吴举豪",
        gmember:"刘春晓"
    }, {
        name: "团队8",
        leader: "冯凯文",
        member: "宋晏祯 王博",
        gmember:"刘春晓"
    }]
};
var grade=[{
    ID:"1",
    name:"RUA1",
    grade:"-1"
},{
    ID:"2",
    name:"RUA2",
    grade:"100"
}];
var absent=[{
    stuID:"123",
    stuName:"123",
    stuTeam:"123",
    date:"123"
}]
router.get('/course', function(req, res, next) {
    res.sendFile(__dirname+'tc-cs.html');
});

router.get('/tc-getAcc', function(req, res, next) {
    res.json(json2);
});
router.get('/tc-getG', function(req, res, next) {
    res.json(json1);
});
router.get('/getGradeG', function(req, res, next) {
    res.json(grade);
});

router.get('/postGradeG', function(req, res, next) {
    res.json(json1);
});

router.get('/getAbsent', function(req, res, next) {
    res.json(absent);
});
module.exports = router;

