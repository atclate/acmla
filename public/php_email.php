<?php
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'a2plcpnl0408.prod.iad2.secureserver.net';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'inquiry@acm-la.org';                 // SMTP username
$mail->Password = 'Wwjd@62872';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('inquiry@acm-la.org', 'ACM-LA Inquiry');
//$mail->addAddress('inquiry@acm-la.org', 'ACM-LA Inquiry');     // Add a recipient //TODO: Change to patrick@acm-la.org
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo('inquiry@acm-la.org', 'ACM-LA Inquiry');
$mail->addAddress('patrick@acm-la.org', 'Patrick Leung');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

if(isset($_POST['email'])) {
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    function died($error) {
        // your error code can go here
        //echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        //echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        //echo "Please go back and fix these errors.<br /><br />";
		http_response_code(500);
        die();
    }
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
	
	
	if(!isset($_POST['first_name'])) {
		$error_message .= 'First Name is required.<br />';
		$_POST['first_name'] = "";
	}
	if(!isset($_POST['last_name'])) {
		$error_message .= 'Last Name is required.<br />';
		$_POST['last_name'] = "";
	}
	if(!isset($_POST['email'])) {
		$error_message .= 'Email is required.<br />';
		$_POST['email'] = "";
	}
	if(!isset($_POST['subject'])) {
		$error_message .= 'Subject is required.<br />';
		$_POST['subject'] = "";
	}
	if(!isset($_POST['message'])) {
		$error_message .= 'Message is required.<br />';
		$_POST['message'] = "";
	}
	
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
    $email_from = $_POST['email']; // required
	$email_subject = "Thank you for contacting ACMLA: ".$_POST['subject']; // 
    $comments = $_POST['message']; // required
	
 
	
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
 
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
 
  if(strlen($_POST['subject']) < 2) {
    $error_message .= 'The Subject you entered do not appear to be valid.<br />';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= 'The Message you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Message: ".clean_string($comments)."\n";
	
	$email_message_html = "<html>".
	"<head>".
	"	<title>subject</title>".
	"</head>".
	"<body>".
	"	<div style=\"background-color: #F2F3F4;\">".
	"		<div style=\"font-size:11pt;font-family:Calibri;\">".
	"			<p><img src=\"http://acm-la.org/img/brand.png\" alt=\"ACMLA\" style=\"width: 60px; height: 40px;\"></p>".
	"		</div>".
	"		<p>Thank you for contacting us.</p>".
	"		<p>We will get back to you as soon as possible regarding the following message:</p>".
	"		<p>First Name: ".clean_string($first_name)."</p>".
	"		<p>Last Name: ".clean_string($last_name)."</p>".
	"		<p>Email: ".clean_string($email_from)."</p>".
	"		<p>Message: ".clean_string($comments)."</p>".
	"	</div>".
	"	</body>".
	"</html>";
	 
	$mail->Subject = $email_subject;
	$mail->Body    = $email_message_html;
	$mail->AltBody = $email_message;
	$mail->addAddress($email_from);

	if(!$mail->send()) {
		http_response_code(500);
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		http_response_code(200);
		echo 'Message has been sent';
	}
}