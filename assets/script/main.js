$(document).ready(function(){
	$(".hamburger-button").on("click", function(){
		$(".sp-nav").slideToggle();
	});
});


$(document).ready(function(){
    $('.tab-headers li').click(function(){
        $('.tab-headers li').removeClass('active');
        $(this).addClass('active');

        $('.tab-content').removeClass('active');
        var tab_id = $(this).attr('data-tab');
        $('#' + tab_id).addClass('active');
    });
});