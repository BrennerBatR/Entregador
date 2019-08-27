<?php
include("_php/username.php");


$principal =<<<CADASTROERRO

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Entregador</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="_imagens/logo_icone.jpg" type="image/x-icon" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="_css/erro_cadastro.css" />
</head>

<body>
    <div id="principal" class="container flex">
        <div id="opcoes" class="col-sm-5 offset-sm-3">
            <p><span id="erro">Erro</span>,tente novamente!</p>
            <p><span id="desculpa">Desculpe-nos o transtorno.</span></p>
            <p>O que deseja fazer Sr(a). $username ?</p>
            <a href="ver_produtos.php" class="btn btn-outline-secondary" role="button" aria-pressed="true">Ver Itens</a>
            <a href="cadastrar_item.php" class="btn btn-outline-success" role="button" aria-pressed="true">
                Cadastrar Item</a>
            <a href="principal.php" class="btn btn-outline-info" role="button" aria-pressed="true">Página Inicial</a>
        </div>
    </div>


</body>

</html>
CADASTROERRO;

?>

<?php

    if (isset($_SESSION))
        echo $principal;
    else{
        echo "Você não tem permissões para acessar essa página, faça o <a href='index.html'>LOGIN!<a>";
    }

?>