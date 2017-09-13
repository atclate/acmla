
$( document ).ready(function() {
	$("#slides").slidesjs({
		width: 648,
		height: 250,
		//auto: 3000,
		//continuous: true,
		//interval: 4000,
        //autoHeight: true, 
        pagination: false,
        //generatePagination: false,
		//navigation: false
		play: {
		  active: false,
		  effect: "slide",
		  interval: 8000,
		  auto: true,
		  swap: true,
		  pauseOnHover: false,
		  restartDelay: 200
		},
		navigation: false
	});

	$(".pop").on("click", function() {
		$('#imagepreview').attr('src', $(this).attr('expanded')); // here asign the image to the modal when the user click the enlarge link
		$('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
	});
});

function addHash(str) {
    return str.startsWith("#")?str:"#"+str;
}

$("#contact_form").submit(function(e) {
    var url = "php_email.php"; // the script where you handle the form input.
	$('#contact_submit').prop("disabled",true);
	$('#contact_error').hide();
	
    $.ajax({
			type: "POST",
			url: url,
			data: $("#contact_form").serialize(), // serializes the form's elements.
			success: function(data)
			{
				$("#contact_form").hide();
				$('#contact_sent').show();
			},
			error: function(XMLHttpRequest, textStatus, errorThrown)
		    {
				$('#contact_error').show();
				$('#contact_error').html(XMLHttpRequest.responseText);
				$('#contact_submit').prop("disabled",false);
			}
		});

    e.preventDefault(); // avoid to execute the actual submit of the form.
});

/*$(function() {
    $("img.lazy").lazyload();
});*/
