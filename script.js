$(document).ready(function() {
	$.get("https://www.reddit.com/r/aww/.json",function(response) {

		var posts = response.data.children;

		$.each(posts, function(index, post) {
			var $container = $('<div />').appendTo('section');
			var $title = $('<a />').html('<h1>' + post.data.title + '</h1')
			.appendTo($container);
			var postDate = new Date( post.data.created * 1000);

			$title.attr('href', post.data.url);
			$('<img />').attr('src', post.data.thumbnail).appendTo($container);
			$('<p class="author" />').text("Author: " + post.data.author).appendTo($container);
			$('<p />').text('Posted: ' + postDate.getMonth() + '/' + postDate
			.getDay() + '/' + postDate.getFullYear() ).appendTo($container);
		});
	});
});