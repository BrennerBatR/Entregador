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
    <script src="_javascript/pedidosfechados_scrpt.js"></script>
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
</script>


<body>

    <div class="wrapper">
        
        $menu

        <div class="content" id="corpo">
        
            <div class="row" id="teto">
                <button onclick="oculta_div()" type="button" id="sidebarCollapse">
                    <img src="_imagens/menu.png" title="Menu">
                </button>
                <!-- <h1 id="tetoh1"> Meus itens</h1> -->
            </div>

            <div id="carregando"class="container flex" style="border-color: black">
                <p>Aguarde enquanto carregamos seus pedidos fechados Sr(a). $username</p> 
                <figure>               
                    <img id="gif"  src="_imagens/gif-carregando.gif" alt="carregandogif" >
                    <p><span id="segundos"></span></p>
                </figure>
            </div>
               <div class="container flex" id="data">
                               <!-- <label for="data_nasc">Digite a data:</label>-->
                 <input type="text" class="form-control" id="data_pedido" name="data_pedido" placeholder="Digite a data"  maxlength="10" value ='' title="Dia que fechou os pedidos">
                 <button id="buscar" type="submit" class="btn btn-primary" onclick="Pedidos_fechados()">Buscar</button>

                 </div>
        
            <div id="nenhum_titulo" class="container">              
           
                      <h1>Pedidos fechados do dia <span id="dia_fechado"></span></h1>              
         
              </div>
            <div id="pagina">
            

            </div>

            <div id="nenhum" class="container">
                <h1>Nenhum pedido fechado nesta data ... </h1>
            </div>

        </div>

    </div>
      
   
    <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>  
   
    <script>
    $("#data_pedido").mask('00/00/0000'); 

    </script>
$footer


</body>

</html>

PEDIDO;






?>
<?php

    echo $pedido;

?>
