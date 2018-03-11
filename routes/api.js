/**
 * Created by lynn on 2017/6/27.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
var json1 = {
    count: 2,
    team: [{
        name: "团队1",
        leader: "刘春晓",
        member: "于济凡 朱耀华 吴举豪",
        gmember: "刘春晓"
    }, {
        name: "团队2",
        leader: "冯凯文",
        member: "宋晏祯 王博",
        gmember: "刘春晓"
    }]
};
var json2 = {
    count: 2,
    team: [{
        name: "团队7",
        leader: "刘春晓",
        member: "于济凡 朱耀华 吴举豪",
        gmember: "刘春晓"
    }, {
        name: "团队8",
        leader: "冯凯文",
        member: "宋晏祯 王博",
        gmember: "刘春晓"
    }]
};
var grade = [{
    ID: "1",
    name: "RUA1",
    grade: "-1"
}, {
    ID: "2",
    name: "RUA2",
    grade: "100"
}];
var absent = [{
    stuID: "123",
    stuName: "123",
    stuTeam: "123",
    date: "123"
}];
var loginjson = {
    success: "true",
    obj: {
        userName: "user1",
        userId: "20180311",
        departId: "20170311",
        rankName: "财务负责人",
        rankId: "20160311",
        realName: "LiMing",
        departName: "Depart",
        token: "XAIKL1257XDFQF"
    }
};
var loginjson1 = {
    userName: "user1",
    userId: "20180311",
    departId: "20170311",
    rankName: "财务负责人",
    rankId: "20160311",
    realName: "LiMing",
    departName: "Depart",
    token: "XAIKL1257XDFQF"
};
var changePass = {
    success: "true",
    msg: "success"
};
var getTodo = {
    success: "true",
    msg: "success",
    obj: [{
        id: "id1",
        code: "code",
        departname: "departname",
        PLAN_TYPE: "资产定额预算（一上）",
        PLAN_YEAR: "2018",
        PLAN_MONTH: "02",
        PLAN_DATE: "25",
        bill_date: "2018-02-25"
    }, {
        id: "id2",
        code: "code",
        departname: "departname",
        PLAN_TYPE: "资产定额预算（二上）",
        PLAN_YEAR: "2018",
        PLAN_MONTH: "02",
        PLAN_DATE: "25",
        bill_date: "2018-02-25"
    }, {
        id: "id3",
        code: "code",
        departname: "departname",
        PLAN_TYPE: "船舶维修预算（一上）",
        PLAN_YEAR: "2018",
        PLAN_MONTH: "02",
        PLAN_DATE: "25",
        bill_date: "2018-02-25"
    }, {
        id: "id4",
        code: "code",
        departname: "departname",
        PLAN_TYPE: "船舶维修预算（二上）",
        PLAN_YEAR: "2018",
        PLAN_MONTH: "02",
        PLAN_DATE: "25",
        bill_date: "2018-02-25"
    }, {
        id: "id5",
        code: "code",
        departname: "departname",
        PLAN_TYPE: "正式卡片",
        PLAN_YEAR: "2018",
        PLAN_MONTH: "02",
        PLAN_DATE: "25",
        bill_date: "2018-02-25"
    }]
};
var getTodo1 = [{
    id: "id1",
    code: "code",
    departname: "departname",
    functionname: "资产定额预算（一上）",
    year: "2018",
    realname: "Liming",
    amount_sum: "1000000"
}, {
    id: "id2",
    code: "code",
    departname: "departname",
    functionname: "资产定额预算（二上）",
    year: "2018",
    realname: "Liming",
    amount_sum: "1000000"
}, {
    id: "id3",
    code: "code",
    departname: "departname",
    functionname: "船舶维修预算（一上）",
    year: "2018",
    realname: "Liming",
    amount_sum: "1000000"
}, {
    id: "id4",
    code: "code",
    departname: "departname",
    functionname: "船舶维修预算（二上）",
    year: "2018",
    realname: "Liming",
    amount_sum: "1000000"
}, {
    id: "id5",
    code: "code",
    departname: "departname",
    functionname: "正式卡片",
    year: "2018",
    realname: "Liming",
    amount_sum: "1000000"
}, {
    id: "id6",
    code: "code",
    departname: "departname",
    functionname: "资产定额预算（一上）",
    year: "2018",
    realname: "Liming",
    amount_sum: "1000000"
}];
var getDone = {
    success: "true",
    msg: "success",
    obj: [{
        id: "id1",
        code: "code",
        departname: "departname",
        PLAN_TYPE: "资产定额预算（一上）",
        PLAN_YEAR: "2018",
        PLAN_MONTH: "02",
        PLAN_DATE: "25",
        bill_date: "2018-02-25"
    }, {
        id: "id2",
        code: "code",
        departname: "departname",
        PLAN_TYPE: "资产定额预算（二上）",
        PLAN_YEAR: "2018",
        PLAN_MONTH: "02",
        PLAN_DATE: "25",
        bill_date: "2018-02-25"
    }, {
        id: "id3",
        code: "code",
        departname: "departname",
        PLAN_TYPE: "船舶维修预算（一上）",
        PLAN_YEAR: "2018",
        PLAN_MONTH: "02",
        PLAN_DATE: "25",
        bill_date: "2018-02-25"
    }, {
        id: "id4",
        code: "code",
        departname: "departname",
        PLAN_TYPE: "船舶维修预算（二上）",
        PLAN_YEAR: "2018",
        PLAN_MONTH: "02",
        PLAN_DATE: "25",
        bill_date: "2018-02-25"
    }, {
        id: "id5",
        code: "code",
        departname: "departname",
        PLAN_TYPE: "正式卡片",
        PLAN_YEAR: "2018",
        PLAN_MONTH: "02",
        PLAN_DATE: "25",
        bill_date: "2018-02-25"
    }]
};
var getDone1 = [{
    id: "id1",
    code: "code",
    departname: "departname",
    functionname: "资产定额预算（一上）",
    year: "2018",
    realname: "Liming",
    amount_sum: "1000000"
}, {
    id: "id2",
    code: "code",
    departname: "departname",
    functionname: "资产定额预算（二上）",
    year: "2018",
    realname: "Liming",
    amount_sum: "1000000"
}, {
    id: "id3",
    code: "code",
    departname: "departname",
    functionname: "船舶维修预算（一上）",
    year: "2018",
    realname: "Liming",
    amount_sum: "1000000"
}, {
    id: "id4",
    code: "code",
    departname: "departname",
    functionname: "船舶维修预算（二上）",
    year: "2018",
    realname: "Liming",
    amount_sum: "1000000"
}, {
    id: "id5",
    code: "code",
    departname: "departname",
    functionname: "正式卡片",
    year: "2018",
    realname: "Liming",
    amount_sum: "1000000"
}, {
    id: "id6",
    code: "code",
    departname: "departname",
    functionname: "资产定额预算（一上）",
    year: "2018",
    realname: "Liming",
    amount_sum: "1000000"
}];
var getDetail1 = {
    detailList: [{
        projectname:"预算科目",
        SUBJECT_NAME:"项目名称",
        specification:"规格型号",
        PLAN_PRICE:"10000",
        PLAN_COUNT:"10",
        PLAN_MONEY:"100000",
        declare_method:"申报方式"
    },{
        projectname:"预算科目",
        SUBJECT_NAME:"项目名称",
        specification:"规格型号",
        PLAN_PRICE:"10000",
        PLAN_COUNT:"10",
        PLAN_MONEY:"100000",
        declare_method:"申报方式"
    },{
        projectname:"预算科目",
        SUBJECT_NAME:"项目名称",
        specification:"规格型号",
        PLAN_PRICE:"10000",
        PLAN_COUNT:"10",
        PLAN_MONEY:"100000",
        declare_method:"申报方式"
    },{
        projectname:"预算科目",
        SUBJECT_NAME:"项目名称",
        specification:"规格型号",
        PLAN_PRICE:"10000",
        PLAN_COUNT:"10",
        PLAN_MONEY:"100000",
        declare_method:"申报方式"
    }],
    approvalList: [{
        rolename: "财务部负责人",
        approvalUserName: "Lily",
        departid: "财务部",
        createTime: "2018-03-05",
        approvalContent: "通过"
    },{
        rolename: "财务部负责人",
        approvalUserName: "Lily",
        departid: "财务部",
        createTime: "2018-03-05",
        approvalContent: "通过"
    },{
        rolename: "财务部负责人",
        approvalUserName: "Lily",
        departid: "财务部",
        createTime: "2018-03-05",
        approvalContent: "通过"
    },{
        rolename: "财务部负责人",
        approvalUserName: "Lily",
        departid: "财务部",
        createTime: "2018-03-05",
        approvalContent: "通过"
    }]
};
var getDetail = {
    success: "true",
    msg: "success",
    obj: {
        materialplan: [{
            id: "id1",
            code: "190145120180305",
            AUDIT_STATE: "FALSE",
            PLAN_TYPE: "船舶维修预算（二上）",
            department: "财务部",
            bill_date: "2018-03-05",
        }, {
            id: "id2",
            code: 190145120180305,
            AUDIT_STATE: "FALSE",
            PLAN_TYPE: "船舶维修预算（二上）",
            department: "财务部",
            bill_date: "2018-03-05",
        }, {
            id: "id3",
            code: 190145120180305,
            AUDIT_STATE: "FALSE",
            PLAN_TYPE: "船舶维修预算（二上）",
            department: "财务部",
            bill_date: "2018-03-05",
        }],
        detailList: [{
            materialname: "船舶维修",
            uniname: "财务部",
            SPECIFICATION: "CB001835",
            NUM: "10"
        }],
        approvalList: [{
            nowLevel: "财务部负责人",
            approvalUser: "Lily",
            departid: "财务部",
            creatTime: "2018-03-05",
            approvalContent: "通过"
        }, {
            nowLevel: "财务部",
            approvalUser: "Jane",
            departid: "财务部",
            creatTime: "2018-03-05",
            approvalContent: "通过"
        }, {
            nowLevel: "CEO",
            approvalUser: "John",
            departid: "CEO",
            creatTime: "2018-03-05",
            approvalContent: "通过"
        }]
    }
};

router.get('/course', function (req, res, next) {
    res.sendFile(__dirname + 'tc-cs.html');
});

router.get('/tc-getAcc', function (req, res, next) {
    res.json(json2);
});
router.get('/tc-getG', function (req, res, next) {
    //console.log(req.params.userName)
    res.json(json1);
});
router.get('/getGradeG', function (req, res, next) {
    res.json(grade);
});

router.get('/postGradeG', function (req, res, next) {
    res.json(json1);
});

router.get('/getAbsent', function (req, res, next) {
    res.json(absent);
});
router.get('/login', function (req, res, next) {
    //console.log(req.params.userName)
    res.json(loginjson1);
});
// router.get('/changePass', function(req, res, next) {
//     //console.log(req.params.userName)
//     res.json(changePass);
// });
router.post('/changePass', function (req, res, next) {
    //console.log(req.params.userName)
    res.json(changePass);
});
router.get('/getTodo', function (req, res, next) {
    //console.log(req.params.userName)
    res.json(getTodo1);
});
router.get('/getDone', function (req, res, next) {
    //console.log(req.params.userName)
    res.json(getDone1);
});
router.get('/getDetail', function (req, res, next) {
    //console.log(req.params.userName)
    res.json(getDetail1);
});
router.get('/audit', function (req, res, next) {
    //console.log(req.params.userName)
    res.json(json1);
});
module.exports = router;

