<?php
include("menu.php");


$pedido = <<<PEDIDO
<!doctype html>
<html lang="pt-br">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="Content-Language" content="pt-br">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
    <link rel="stylesheet" href="_css/pedidos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="icon" href="_imagens/logo_icone.jpg" type="image/x-icon" />
    <script src="jquery-3.3.1.js"></script>
    <script src="node_modules/moment/moment.js"></script>
    <script src="_javascript/pedidos_scrpt.js"></script>
    <title>Entregador</title>

</head>







<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
    crossorigin="anonymous"></script> <!-- altera os ul dentro do menu -->


<script>

    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });

    });
    // window.addEventListener('keydown', function (e) {         //se atualziar a pagina , os dados sao perdidos !
    //     var code = e.which || e.keyCode;
    //     if (code == 116) {
    //         alert("Não atualize o navegador, dados serão perdidos !");
    //         e.preventDefault();
    //     }
    //     else return true;
    //     // fazer algo aqui para quando a tecla F5 for premida
    // });


</script>


<body onload = "CarregarPrimeiravez()">

    <div class="wrapper">
        
    $menu
        <div class="content" id="corpo">
            <div class="row" id="teto">
                <button onclick="oculta_div()" type="button" id="sidebarCollapse">
                    <img src="_imagens/menu.png" title="Menu">
                </button>

                <!-- <h1 id="tetoh1"> Meus itens</h1> -->
            <h1 id="pedidosNum">Carregando...</h1>
            <h5 id="auxh5">teste</h5>
            </div>
            

            <div id="carregando"class="container flex">
                <p>Aguarde enquanto carregamos seus pedidos Sr(a). $username</p> 
                <figure>               
                    <img id="gif"  src="_imagens/gif-carregando.gif" alt="carregandogif">             
                </figure>
            </div>
            <div id="filtros">
            <h5 id="titulofiltro">Filtrar por : </h5>
            <nav class="navbar navbar-light" id="navFiltros">
                <div class="form">
                    <button type="button" id="todos" class="btn btn-secondary" value=-1 onclick ="alterafiltro(todos.value)">Todos</button>
                    <button type="button" id="naovisto" class="btn btn-danger" value=0 onclick ="alterafiltro(naovisto.value)" >Não vistos</button>
                    <button type="button" id="recebidos" class="btn btn-outline-secondary" value=1  onclick ="alterafiltro(recebidos.value)"  >Recebidos</button>
                    <button type="button" id="em_andamento" class="btn btn-warning" value=2 onclick ="alterafiltro(em_andamento.value)" >Em andamento</button>
                    <button type="button" id="enviados" class="btn btn-success" value=3 onclick ="alterafiltro(enviados.value)" >Enviados</button>
                    

                </div>
            </nav>
            </div>

            <div id="pagina">
            

            </div>


            <div id="confirmar" class="container">
                <p>Marcar o <span id="confirmarpedido">Pedido XXX</span> como: <span id="confirmarstatus">recebido ?</span></p>
                <button id="sim" class="btn btn-success" onclick="resposta(this.id)">Sim</button>
                <button id="nao" class="btn btn-danger" onclick="resposta(this.id)">Não</button>

            </div>
                <div id="nenhum" class="container">
                <h1>Nenhum pedido recebido até o momento hoje... </h1>
            </div>




        </div>

    </div>
  $footer


</body>

</html>

PEDIDO;






?>
<?php

if ($_SESSION["login"] <> null)
    echo $pedido;
else {
    echo "Você não tem permissões para acessar essa página, faça o <a href='index.html'>LOGIN!<a>";
}

?>
