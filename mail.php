<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        
        # FIX: Replace this email with recipient email
        $mail_to = "contato@lifeconnectionsbr.com.br";
        $subject = "Contato site";
        # Sender Data
        $tel = trim($_POST["tel"]);
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        
        if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($subject) OR empty($message)) {
            # Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "<script>alert('Preencha todos os campos!');window.location.assign('https://lifeconnectionsbr.com.br#contact');</script>";
            exit;
        }
        
        # Mail Content
        $content = "Nome: $name\n";
        $content .= "Email: $email\n\n";
        $content .= "Telefone: $tel\n\n";
        $content .= "Mensagem:\n$message\n";

        # email headers.
        $headers = "From: $name <$email>";

        # Send the email.
        $success = mail($mail_to,$subject,$content, $headers);
        if ($success) {
            # Set a 200 (okay) response code.
            http_response_code(200);
            echo "<script>alert('Sua mensagem foi enviada com sucesso.');window.location.assign('https://lifeconnectionsbr.com.br#contact');</script>";
        } else {
            # Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "<script>alert('Ocorreu algum erro! Tente novamente mais tarde.');window.location.assign('https://lifeconnectionsbr.com.br#contact');</script>";
        }

    } else {
        # Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "<script>alert('Ocorreu algum erro! Tente novamente mais tarde.');window.location.assign('https://lifeconnectionsbr.com.br#contact');</script>";
    }

?>
