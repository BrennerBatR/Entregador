<?php
 
include("menu.php");

$servername = $_SERVER['SERVER_NAME'];


$principal =<<<PRINCIPAL

<!doctype html>
<html>

<head>
    <!-- Required meta tags -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
    <link rel="stylesheet" href="_css/principal.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="icon" href="_imagens/logo_icone.jpg" type="image/x-icon" />
    <script src="_javascript/principal.js"></script>
    <script src="node_modules/moment/moment.js"></script>
    <script src="jquery-3.3.1.js"></script>

    <title>Entregador</title>

</head>

<body onload="verificatela()">

    <div class="wrapper">
        
    $menu

        <div class="content" id="corpo">
            <div class="row" id="teto">
                <button onclick="oculta_div()" type="button" id="sidebarCollapse">
                    <img src="_imagens/menu.png" title="Menu">
                </button>
                <!-- <h1 id="tetoh1"> Meus itens</h1> -->
            </div>



            <div id="oculta" class="container flex">
                <div id="titulo" class="item flex-item-1">
                    <h1 >Bem-vindo(a), $username</h1>
                </div>
                   <input id="auxEmpId" style="display: none" value = "$EMP_id">
          
                <div id="indices" class="container flex">    
                <div id="subtitulo" class="item flex-item-1">
                <img id="voltar" onclick="voltar_mes()" src="_imagens/seta_esquerda.jpeg" title="Voltar um mês">
                    <h3><span id="mes"></span> de <span id="ano"></span> </h3>
                <img id="avancar" onclick="avancar_mes()" src="_imagens/seta_direita.jpeg" title="Adiantar um mês">
                </div>  
                <div class="item flex-item-1" id="valor">
                    <div id="imagem">
                        <img src="_imagens/money.png" title="Valor vendido">
                    </div>
                    <div id="dados">
                        <h2>Faturamento: <b>(R$)</b>:</h2>
                        <p><span id="total_valor">0,00</span></p>
                    </div>
                </div>
                <div class="item flex-item-1" id="numero_pedidos">
                    <div id="imagem">
                        <img src="_imagens/pedidos.png" title="Pedidos entregues">
                    </div>
                    <div id="dados">
                        <h2>Pedidos:</h2>
                        <p><span id="total_pedidos">0</span></p>
                    </div>

                </div>
                <div class="item flex-item-1" id="ticket">
                     <div id="imagem">
                        <img src="_imagens/ticket.png" title="Ticket médio">
                    </div>
                    <div id="dados">
                        <h2>Ticket médio:</h2>
                        <p><span id="ticket_medio">0</span></p>
                    </div>

                </div>
                <div class="item flex-item-1" id="rating">
                     <div id="imagem">
                        <img src="_imagens/rating.png" title="Feedback da empresa">
                    </div>
                    <div id="dados">
                        <h2>Feedback:</h2>
                        <p><span id="feedback"></span>/5</p>
                    </div>

                </div>
            </div>

                <div class="item flex-item-1" id="notificacao_row">
                    <div id="notificacao" >
                    <div onclick= "verpedidos('$servername')" id="divclicar">
                        <h5>Você tem pedidos em aberto!</h5>
                    </div>
                        <img id="fechar" onclick="fechar()" title="fechar" src="_imagens/X.png">
                    </div>
                </div>
            </div>
           
           <div id="carregando"class="container flex">
                <p>Estamos carregando seus dados Sr(a). <b>$username!</b></p> 
                <figure>               
                    <img id="gif"  src="_imagens/gif-carregando.gif" alt="carregandogif">             
                </figure>
          </div>
        </div>


    </div>
    
  $footer


    

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script> <!-- altera os ul dentro do menu -->


    <script>
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });  
    </script>





</body>

</html>

PRINCIPAL;

?>

<?php

if ($_SESSION["login"] <> null && ($categoria == 10 || $categoria == 4))
    echo $principal;
else {
    echo "Você não tem permissões para acessar essa página, faça o <a href='index.html'>LOGIN!<a>";
}

?>