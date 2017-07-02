$(function () {
    $('.edit').css('display','none');
    $('.edit-button').css('display','none');
    $('#course-date-start-edit').pickadate({
        selectMonths: true,
        selectYears:1
    })
    $('#course-date-end-edit').pickadate({
        selectMonths: true,
        selectYears:1
    })
})
$('#course-edit').click(function () {

    /*修改表单预设值*/
    $('#course-name-edit').attr('placeholder',$('#course-name').text());
    $('#course-info-edit').attr('placeholder',$('#course-info').text());
    $('#course-teacher-edit').attr('placeholder',$('#course-teacher').text());
    $('#course-place-edit').attr('placeholder',$('#course-place').text());
    $('#course-score-edit').attr('placeholder',$('#course-score').text());

    $('.edit').css('display','block');
    $('.edit-button').css('display','inline');
    $('.origin-info').css('display','none');
});
$('#course-cancel').click(function () {
    $('.edit').css('display','none');
    $('.edit-button').css('display','none');
    $('.origin-info').css('display','inline');
})
$('#course-save').click(function () {
    $('.edit').css('display','none');
    $('.edit-button').css('display','none');
    $('.origin-info').css('display','inline');
    var data= {
        name: $('#course-name-edit').val(),
        info: $('#course-info-edit').val(),
        teacher: $('#course-teacher-edit').val(),
        place: $('#course-place-edit').val(),
        score: $('#course-score-edit').val(),
        dateSt: $('#course-date-start-edit').val(),
        dateEd: $('#course-date-end-edit').val(),
    };
    var _url='dn-course-save';
    $.post(_url,data,function (json) {
        var ret = eval('('+json+')').status;
        if(0==ret){
            window.location.reload();
        }else{
            alert(保存失败,请重新保存);
        }
    })
})