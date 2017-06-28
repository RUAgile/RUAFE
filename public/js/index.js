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
    $('.edit-submit').click(function () {
        var dagang=$('.input-dagang').val();
        $('.show-dagang').text('教学大纲: '+dagang);
        $('.edit-dagang').css('display','none');
        $('.show-dagang').css('display','block');
        $('#dagang-btn').css('display','inline-block');

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
        $("[name='checkbox']").each(function(){
            if(!$(this).attr("checked")){
                $(this).prop("checked",'true');
            }
        });
        // alert($('#src1').is(':checked'));

    });
    $('.choosenot').click(function () {

            $("[name='checkbox']").each(function(){//反选
                $(this).prop('checked',function (index,attr) {
                    return !attr;
                })
            })
    });
    
    $('.src-public').click(function () {
        var header=$('#srcheadline').val();
        var content=$('#srccontent').val();
        if(header&&content){
            var headerhtml='<li> <div class="collapsible-header"> <div class="col s1 m1 selectDown"> <form> <p> <input type="checkbox" name="checkbox" class="filled-in" id="src1"> <label for="src1"></label> </p> </form> </div> <i class="material-icons">filter_drama</i>';
            var middlehtml='<i class="material-icons text-black right">play_for_work</i> </div> <div class="collapsible-body"> <span>';
            var footerhtml='</span> </div> </li>';

            $('.show-src').append(headerhtml+header+middlehtml+content+footerhtml);

        } else{
            alert('请完整输入标题和文本说明');
        }
    });

    $('.modal').modal();


    //tc-tm.html

    $('.app-pass').click(function () {
        var _this=this;
        var li=$(_this).parent().parent();
        $('.show-tm').append(li);
        $(_this).next().remove();
        $(_this).remove();

    });

    $('.app-reject').click(function () {
        var _this=this;
        var li=$(_this).parent().parent();
        $(li).css('display','none');
    });


    
    
})
