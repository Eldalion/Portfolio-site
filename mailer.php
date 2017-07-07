<?php

require 'PHPMailer/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging (0,1,2)
$mail->SMTPDebug = 0; 
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = 'smtp.websupport.sk';
//Set the SMTP port number
$mail->Port = 465;
//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'ssl';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = 'eldalion@frantisekmeciar.com';
//Password to use for SMTP authentication
$mail->Password = 'lSOhNwE0D8';
//Set who the message is to be sent from
$mail->setFrom('eldalion@frantisekmeciar.com', 'Portfolio Contact Form Message');
//Set who the message is to be sent to
$mail->addAddress('frantisek.meciar@gmail.com', 'Frantisek Meciar');

$name = strip_tags(trim($_POST["name"]));
$name = str_replace(array("\r","\n"),array(" "," "),$name);
$subject = strip_tags(trim($_POST["subject"]));
$subject = str_replace(array("\r","\n"),array(" "," "),$name);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"]);

$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

$mail->Subject = $subject;
$mail->Body    = $email_content;


                  
//send the message, check for errors
if(!$mail->send()) 
{
    header("Location: http://www.frantisekmeciar.com/contact.php?success=-1");
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} 
else 
{
    header("Location: http://www.frantisekmeciar.com/contact.php?success=1");
}

?>





















