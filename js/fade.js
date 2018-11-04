$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideMe:visible').each( function(i){
            var bottom_of_object = $(this).offset().top + ( $(this).outerHeight() / 2 );
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).removeClass('hideMe');
            }
        }); 
    });  
});


$(document).ready(function() {
    $(window).scroll( function(){
        $("#annotationAll").each( function(i){
            var bottom_of_object = $(this).offset().top + ( $(this).outerHeight() );
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('annotation-hideMe');
            }
        }); 
    });  
});

