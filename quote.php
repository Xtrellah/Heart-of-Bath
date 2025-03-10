<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Composer/vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $date = isset($_POST['date']) ? implode(" to ", $_POST['date']) : "No dates selected";
    $services = isset($_POST['services']) ? implode(", ", $_POST['services']) : "No services selected";
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);
    
    try {
        // SMTP Config
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'saidaihoshi@gmail.com'; // Add Email
        $mail->Password = 'hiqm yraq blct alxw'; // Add App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;  

        // Email Setup
        $mail->setFrom($email, $name);
        $mail->addAddress('saidaihoshi@gmail.com', 'Business Owner'); // Add Email
        $mail->Subject = 'New Quote Request';
        $mail->Body = "Name: $name\nEmail: $email\nDates: $date\nServices: $services\nMessage: $message";

        $mail->send();
        echo "Email sent successfully!";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
?>
