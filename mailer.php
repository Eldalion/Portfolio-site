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
$mail->setFrom('eldalion@frantisekmeciar.com', 'Mailer');
//Set who the message is to be sent to
$mail->addAddress('frantisek.meciar@gmail.com', 'Frantisek Meciar');


$mail->Subject = 'Here is the subject';
$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

                  
//send the message, check for errors
if(!$mail->send()) 
{
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} 
else 
{
    echo 'Message has been sent';
}

?>





















