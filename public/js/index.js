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
                var content=$.get('tc-cs.html');
                $('.right-content').html(content);
        }
    });
    
    //course-teacher
    $('.collapsible').collapsible();
    
    $('.choosesrc').click(function () {
        $("[name='checkbox']").each(function(){
            if(!$(this).attr("checked")){
                $(this).prop("checked",'true');
            }
        })
    });
    $('.choosenot').click(function () {

            $("[name='checkbox']").each(function(){//反选
                $(this).prop('checked',function (index,attr) {
                    return !attr;
                })
            })
    });

    $('.modal').modal();

    
    
})
