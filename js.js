$( document ).ready(function(){
    $( ".open-but" ).click(function(){
        $( ".worklist" ).fadeIn();
    });
    $( ".close-but" ).click(function(){
        $( ".worklist" ).fadeOut();
    });
});