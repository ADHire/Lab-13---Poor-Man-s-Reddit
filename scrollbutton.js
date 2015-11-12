$(document).ready(function() {
	$('a#toTop, a[href=#top]').click(function(){ 
		$('html,body').animate({scrollTop:0}, 1500); return false;
	});
}); 