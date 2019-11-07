$(function() {
	$('.breakdown > div').css('display','none');
	$('.breakdown').each(function(){
		$(this).find('h1').on('click', function() {
			if (!$(this).hasClass('open')) {
				$(this).next().slideDown();
				$(this).addClass('open');
			} else {
				$(this).next().slideUp();
				$(this).removeClass('open');
			}
			return false;
		});
	});
});