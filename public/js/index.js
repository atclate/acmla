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
