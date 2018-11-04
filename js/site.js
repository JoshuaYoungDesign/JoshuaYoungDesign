window.onbeforeunload = function(){ window.scrollTo(0,0); }
$(document).ready(function(){
    $(this).scrollTop(0);
});

$("#portfolio-filter a").click(function() {
  var category = $(this).data("category");
    $('.portfolio-feature').addClass('fade-portfolio-item hide').removeClass('hideMe');
    $('.portfolio-feature.' + category).removeClass('fade-portfolio-item load');
    $('.portfolio-feature:visible').removeClass('hide');

    $(".load-hide").addClass('hideMe-display');

	$('.active').removeClass('active');
    $(this).addClass('active');

    $('.active-filter').addClass('active-filter-grey');

    $('.portfolio-feature:visible').css('width', '50%');
	$('.portfolio-feature:visible:first').css('width', '100%');

  return false;

});

$('.nav-switch').on('click', function(event) {
		$('.main-menu').fadeToggle(500);
		event.preventDefault();
});


$('.load-hide').on('click',function(){
    if ($('.portfolio-feature:hidden').length == 0);
    $('.portfolio-feature:hidden').slice(0,8).removeClass('load').slice(0,3).animate({opacity: 1}, 100);

    if  ($('#portfolio-items .last').is(":visible")) {
        $(".load-hide").addClass('hideMe-display');
    }
});


$('.control a').click(function() {
    $('html,body').animate({
        scrollTop: $('.portfolio-section').offset().top},
        'slow');
});

$('.scroll-to-top a').click(function() {
    $('html,body').animate({
        scrollTop: $('body').offset().top},
        'slow');
});