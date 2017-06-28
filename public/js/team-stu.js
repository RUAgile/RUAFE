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
});
function revealTeamMng() {//TODO:有bug
    alert(1);
    $('#create-team').modal('close');
    $('#team-choose').css('display','none');
    $('#team-manage').css('display','block');
}
function revealTeamCheck() {
    $('#find-team').modal('close');
    $('#team-choose').css('display','none');
    $('#team-check').css('display','block');
}
$('.agree').click(function () {
    var _this=this;
    var _li=$(_this).parent().parent();
    $(_this).parent().parent().slideUp('normal');
    setTimeout(function () {
        $(_li).find('div a').css('display','none');
        $('#teamMem').append(_li);
        $(_li).slideDown('normal');
    },300);

});
$('.disagree').click(function () {
    var _this=this;
    var _li=$(_this).parent().parent();
    $(_this).parent().parent().slideUp('normal');
});
function disableTeamApply() {
    $('#submit-team-apply').addClass('disabled').html('团队申请已提交');
}