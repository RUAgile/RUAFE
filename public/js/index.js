/**
 * Created by lynn on 2017/6/26.
 */
$(function () {
    $('.side-bar').click(function () {
        var _this=this;
        $('.side-bar').removeClass('baractive');
        $(_this).addClass('baractive');
    });
    
    $('#dagang-btn').click(function () {
        var _this=this;
        $('.edit-dagang').css('display','block');
        $('.show-dagang').css('display','none');
        $(_this).css('display','none');

    });
    $('.edit-cancel').click(function () {
        $('.edit-dagang').css('display','none');
        $('.show-dagang').css('display','block');
        $('#dagang-btn').css('display','inline-block');
    });
    $('.side-bar ').click(function () {
        var _this=this;
        var id=_this.id;

        switch (id){
            case 'courses':
                var content=$.get('course-teacher.html');
                $('.right-content').html(content);
        }
    });
    $('.collapsible').collapsible();
})
