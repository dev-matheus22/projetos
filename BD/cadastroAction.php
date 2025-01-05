<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "amizades";
    $conexao = new mysqli($servername, $username, $password, $dbname);
    if ($conexao->connect_error) {
    die("Connection failed: " . $conexao->connect_error);
    }

    $sql = "INSERT INTO amigos (nome, apelido, email)
            VALUES ('".$_POST['txtNome']."', '".$_POST['txtApelido']."', '".$_POST['txtEmail']."')";

            if ($conexao->query($sql) === TRUE){
                echo '
                <a href="index.php">
                    <h1 class="btn btn-primary">Amigo salvo com sucesso! </h1>
                    </a>
                ';
            } else {
                echo '
                    <a href="index.php">
                    <h1 class="w3-button w3-teal">ERRO! </h1>
                    </a>
                    ';
            } $conexao-> close();
            



?>