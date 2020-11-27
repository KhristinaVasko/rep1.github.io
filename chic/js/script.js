$(function() {
    $(".header__lang-list-item").on("click", function(e) {
        $(this).addClass("active").siblings().removeClass("active");
    });
})