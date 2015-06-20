$(function(){
	//function that shows the content corresponding to the tab
	function showContent(tabIndex) {
		$('.residents-tab').eq(tabIndex).removeClass('not-active').addClass('active');
		$('.residents-content').eq(tabIndex).addClass('is-open').fadeIn();
	}
	//showing the first tab's content
	showContent(2);

	//setting the 
	$('.residents-tab').on('click', function(){
		console.log($(this).index());
		$('.is-open').removeClass('is-open').hide();
		var tabIndex = $(this).index();
		$(this).parent().find('.active').removeClass('active').addClass('not-active');
		showContent(tabIndex);
	});
});