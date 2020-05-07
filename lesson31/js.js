$(function(){

    $('.tab-title li').not('.active').click(function(){
        var index = $(this).index();
        var content = $('.tab-content li').eq(index);
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab-content li').css('display', 'none').eq(index).css('display', 'block');
    })
    
        $('.tab-title li:first').addClass('active');
        $('.tab-content li:first').css('display', 'block');
    
    })