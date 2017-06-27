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

    })
})
