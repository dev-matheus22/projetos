<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <title>Cadastro - MySQLi</title>
</head>
<body>
    <a href="index.php">
    <i class="bi bi-arrow-return-left" style="width: 150px; height: 50px;"></i>
    </a>

    <div class="container">
        <h1 class="">Cadastro amigos</h1>

        <form action="cadastroAction.php" class="container form-group">
            <label class="text-primary">Código</label>
            <input name="txtID" class="form-control" disableda>
            <label class="text-primary">Nome</label>
            <input name="txtNome" type="text" class="form-control">
            <label class="text-primary">Apelido</label>
            <input name="txtApelido" class="form-control" type="text">
            <label class="text-primary">Email</label>
            <input name="txtEmail" class="form-control" type="text">
            <button class="btn btn-primary" name="btnAdicionar">
    <i class="bi bi-plus-square" style="margin-right: 5px;"></i>
    Adicionar
</button>

        </form>
    </div>
</body>
</html>