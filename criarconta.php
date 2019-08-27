
<?php

$token = $_GET['token'];

$criar =<<<CRIAR
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Entregador</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" type="text/css" media="screen" href="_css/mudarsenha_style.css" />
        <link rel="icon" href="_imagens/logo_icone.jpg" type="image/x-icon" />
        <script src="_javascript/recuperarsenha_scrpt.js"></script>
        <script src="jquery-3.3.1.js"></script>
        </head>
    
    <body>
        <div class="container-fluid" style="position: fixed">
            <div id="carregando"class="container flex">
                <p style="color:white">Carregando dados,aguarde!</p>                
                <img id="gif"  src="_imagens/gif-carregando.gif" alt="carregandogif">
                <p><span>*Por favor, não atualize a página ou dados serão perdidos!</span></p>

                 </div>
            <div class="row-fluid d-flex justify-content-center ">
                <div class="col-xs-1 text-center" id="login" >
             
                    <div id="form1">
                        <div class="form-group" >
                            <h1 id="titulo">Criar senha</h1>
                        </div>
                        <div class="form-group">                
                            <input type="password" class="form-control" id="senha1" name="senha1" placeholder="Digite a nova senha ..." maxlength = "15">
                            <input type="password" class="form-control" id="senha2" name="senha" placeholder="Confirme a senha ..." maxlength = "15">
                            <input id="token" style="display: none" name="token" value="$token">
                            <input type="submit" class="form-control" id="submit" onclick="verificasenha()" value="Criar">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </body>
    
    </html>
CRIAR;

if (isset($_GET['token'])) {
    echo $criar;
}
else
    echo "ERRO! Token não recebido!";