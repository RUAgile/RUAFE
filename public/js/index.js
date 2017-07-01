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

    $('.tm-app').on('click', '.app-pass', function () {
        var _this = this;
        var newbutton = '<a class="waves-effect waves-light btn tm-edit">调整团队</a> <a class="waves-effect waves-light btn red tm-del">解散团队</a>';

        var li = $(_this).parent().parent();
        var div = $(_this).parent();
        $(div).append(newbutton);

        var divbro = $(div).prev();
        var divspan = $(divbro).children('.badge')

        $(divspan).remove();
        $(divbro).append('<span class="badge cyan new" data-badge-caption="已审核"></span>');

        $('.show-tm').append(li);
        $(_this).next().remove();
        $(_this).remove();

        var teamname = $(li).find('tm-name').text();
        var params = {
            name: teamname,
            status: 1
        };

        $.post(url.tmapp, params, function () {
            console.log('accepted');
        });
    });

    $('.tm-app').on('click', '.app-reject', function () {
        var _this = this;
        var li = $(_this).parent().parent();
        $(li).css('display', 'none');

        var teamname = $(li).find('tm-name').text();
        var params = {
            name: teamname,
            status: 0
        };

        $.post(url.tmapp, params, function () {
            console.log('rejected');
        });
    });


    $('.show-tm').on('click', '.tm-del', function () {
        var _this = this;
        var li = $(_this).parent().parent();
        $(li).css('display', 'none');
        var teamname = $(li).find('tm-name').text();

        var params = {
            name: teamname
        };
        $.post(url.tmdel, params, function () {
            console.log('deleted');
        });
    });

    $('.tm-edit').click(function () {
        //TODO
    });


    function loadtm() {
        //ajax here

        //gettminfo();
        //gettmapp();
        $.get(url.tmapp, function (json) {
            // tminfo = eval('(' + json + ')');
            tmapp = json;


            var appcount = tmapp.count;


            for (var i = 0; i < appcount; i++) {
                var model1 = $('.model-app').clone();

                model1.find('.tm-name').html(tmapp.team[i].name);
                model1.find('.tm-leader').html(tmapp.team[i].leader);
                model1.find('.tm-member').html(tmapp.team[i].member);

                $('.tm-app').append(model1);

                model1.removeClass('model-app');

            }

            $('.model-app').remove();
        });
        $.get(url.tminfo, function (json) {
            // tmapp = eval('(' + json + ')');
            tminfo = json;

            var infocount = tminfo.count;
            for (var j = 0; j < infocount; j++) {
                var model2 = $('.model-info').clone();

                model2.find('.tm-name').html(tminfo.team[j].name);
                model2.find('.tm-leader').html(tminfo.team[j].leader);
                model2.find('.tm-member').html(tminfo.team[j].member);

                $('.show-tm').append(model2);
                model2.removeClass('model-info');

            }
            $('.model-info').remove();
        });

    }

    loadtm();

//tc-ci.html

    $('ul.tabs').tabs();
})
