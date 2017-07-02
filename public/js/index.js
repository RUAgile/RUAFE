/**
 * Created by lynn on 2017/6/26.
 */
$(function () {

    var url = {
        tmapp: "/api/tc-getG",
        tminfo: "/api/tc-getAcc",
        tmdel: "/api/tc-delG",
        uploadsrc: "/api/tc-up-src"
    };
    var tmapp = {
        count: 3,
        team: [{
            name: "团队1",
            leader: "刘春晓",
            member: "于济凡 朱耀华 吴举豪"
        }, {
            name: "团队2",
            leader: "冯凯文",
            member: "宋晏祯 王博"
        }, {
            name: "团队3",
            leader: "刘春晓",
            member: "于济凡 朱耀华 吴举豪"
        }]
    };


    var tminfo = {
        count: 3,
        team: [{
            name: "团队1",
            leader: "刘春晓",
            member: "于济凡 朱耀华 吴举豪"
        }, {
            name: "团队2",
            leader: "冯凯文",
            member: "宋晏祯 王博"
        }, {
            name: "团队3",
            leader: "刘春晓",
            member: "于济凡 朱耀华 吴举豪"
        }]
    };

    $('.side-bar').click(function () {
        var _this = this;
        $('.side-bar').removeClass('baractive');
        $(_this).addClass('baractive');
    });

    $('#dagang-btn').click(function () {
        var _this = this;
        $('.edit-dagang').css('display', 'block');
        $('.show-dagang').css('display', 'none');
        $(_this).css('display', 'none');

    });
    $('.edit-cancel').click(function () {
        $('.edit-dagang').css('display', 'none');
        $('.show-dagang').css('display', 'block');
        $('#dagang-btn').css('display', 'inline-block');
    });
    $('.edit-submit').click(function () {
        var dagang = $('.input-dagang').val();
        $('.show-dagang').text('教学大纲: ' + dagang);
        $('.edit-dagang').css('display', 'none');
        $('.show-dagang').css('display', 'block');
        $('#dagang-btn').css('display', 'inline-block');

    });
// $('.side-bar ').click(function () {
//     var _this=this;
//     var id=_this.id;
//
//     switch (id){
//         case 'courses':
//             var content=$.get('tc-cs.html');
//             $('.right-content').html(content);
//     }
// });

//course-teacher
    $('.collapsible').collapsible();


//src-tc
    $('.choosesrc').click(function () {
        $("[name='checkbox']").each(function () {
            if (!$(this).attr("checked")) {
                $(this).prop("checked", 'true');
            }
        });
        // alert($('#src1').is(':checked'));

    });

    $('.choosenot').click(function () {

        $("[name='checkbox']").each(function () {//反选
            $(this).prop('checked', function (index, attr) {
                return !attr;
            })
        })
    });


// tc-hw


    $('.modal').modal();


//tc-tm.html

//tc-ci.html

    $('ul.tabs').tabs();
})
