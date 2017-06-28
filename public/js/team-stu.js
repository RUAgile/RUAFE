$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});
$('.teamlist').click(function () {
    var _this=this;
//        $(_this).find('.hwContent').toggle('normal');
    if($(_this).css('margin-bottom')=='8px') {
        $(_this).closest('.row').next().find('.teamContent').slideDown('normal');
        $(_this).css('margin-bottom','0px');
        $(_this).next().css('margin-bottom','0px');
    }else{
        $(_this).closest('.row').next().find('.teamContent').slideUp('normal');
        setTimeout(function(){
            $(_this).css('margin-bottom','8px');
            $(_this).next().css('margin-bottom','8px');
        },300);
    }
})