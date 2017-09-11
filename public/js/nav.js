$(function () {
	
	var selected;
	
    var current_hash;
    $('ul.nav > li.navbar-button a').each(function () {
        if ($(this).attr("href").endsWith(addHash(location.hash))) {
            var parent = $(this).closest('ul.nav > li.navbar-button');
			parent.addClass('open');
			selected = parent;
            $(this).addClass('selected');
            current_hash = location.hash;
            showHashContent(location.hash);
        }
    });
    if (current_hash == null) {
        showHashContent('#index');
    }
	
    $('ul.nav li.navbar-button').click(function(){
		$('li.navbar-button').not($(this)).removeClass('open');
		$(this).addClass('open');
		selected = $(this);
    });
    $('ul.nav > li.navbar-button a').click(function(){
		$('li.navbar-button.dropdown a').not($(this)).removeClass('selected');
		$(this).addClass('selected');
		//Insert event handling logic
	});
	
	$('ul.nav > li.navbar-button').hover(function(){ 
		// save previously clicked
		$('li.navbar-button').not($(this)).removeClass('open');
		$(this).addClass('open')
	}, function() {
		// unsave previously clicked
		if (selected != null) {
			$('ul.nav > li.navbar-button').not(selected).removeClass('open');
			selected.addClass('open');
		}
	});
	$('a[data-toggle="collapse"]').on('shown.bs.collapse', function (e) {
		$('.navbar-button').not($(this)).removeClass('active');
	});
});



window.onhashchange = function () {
	showHashContent(location.hash);
};

function showHashContent(hashtag) {
	if ($(hashtag).length > 0) {
		$('.container > div').not($(hashtag)).hide();
		$(hashtag).show();
	} else {
		// hash tag not found, showing index.
		if (hashtag != "#index") {
			showHashContent("#index");
		} else {
			console.log("failed showing #index");
		}
	}
}