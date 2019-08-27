<?php
include("menu.php");


$empresas = <<< EMPRESAS
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
    <link rel="stylesheet" href="_css/empresas.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="icon" href="_imagens/logo_icone.jpg" type="image/x-icon" />
    <script src="node_modules/moment/moment.js"></script>
    <script src="_javascript/empresas.js"></script>
    <script src="jquery-3.3.1.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css">
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
    <title>Entregador</title>
    
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.5.2/css/buttons.bootstrap4.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap4.min.css">

    

</head>

<body onload="loadingPage()">

    <div class="wrapper">
        $menu

        <div class="content" id="corpo">
            <div class="row" id="teto">
                <button type="button" id="sidebarCollapse" >
                    <img src="_imagens/menu.png" title="Menu">
                </button>
                 <!-- <h1 id="tetoh1"> Meus itens</h1> -->
            </div>

            <div id="carregando"class="container flex">
                <p>Cadastrando empresa Sr(a).  $username,aguarde!</p>                
                <img id="gif"  src="_imagens/gif-carregando.gif" alt="carregandogif">
                <p><span>*Por favor, não atualize a página ou dados serão perdidos!</span></p>

            </div>
            <div id="datas">
                 <input type="text" class="form-control" id="datainicial" name="datainicial" placeholder="Data inicial"  maxlength="10" value ='' title="Dia inicial para o relatório">
                 <input type="text" class="form-control" id="dataFinal" name="dataFinal" placeholder="Data final"  maxlength="10" value ='' title="Dia final para o relatório">
                <button id="buscar" type="submit" class="btn btn-primary" onclick="BuscaDatas()">Buscar</button>
            </div>
            
            <div style="width: 90%; margin-left: 5%; margin-top: 2%">
            <div id="title">
                <h1>Empresas cadastradas:</h1>
                <h2 id="msg"></h2>
            </div>
              <table id="table" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">

                <thead>
                <tr>
                <th style="width: 20%">CNPJ</th>
                <th style="width: 40%">Nome </th>
                <th style="width: 20%">Faturamento</th>
                <th style="width: 20%">Fat. Retido</th>
                <th style="width: 20%">Filiação</th>
                <th style="width: 20%">Dinheiro</th>
                <th style="width: 20%">Cartão</th>
                <th style="width: 20%">Frete</th>
                <th style="width: 20%">Pedidos</th>
                <th style="width: 20%">Deletar</th>
                </tr>
                </thead>

                <tfoot>
                <tr>
                <th style="width: 20%">CNPJ</th>
                <th style="width: 40%">Nome </th>
                <th style="width: 20%">Faturamento</th>
                <th style="width: 20%">Fat. Retido</th>
                <th style="width: 20%">Filiação</th>
                <th style="width: 20%">Dinheiro</th>
                <th style="width: 20%">Cartão</th>
                <th style="width: 20%">Frete</th>
                <th style="width: 20%">Pedidos</th>
                <th style="width: 20%">Deletar</th>
                </tr>
                </tfoot>
            </table>
        </div>
            

            </div>
        </div>
    </div>
    
 $footer


<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.bootstrap4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.3/js/responsive.bootstrap4.min.js"></script>
   



    <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>  
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script> <!-- altera os ul dentro do menu -->

    <script>
     $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
    
      $(document).ready(function() {
        var table = $('#table').DataTable( {
            lengthChange: false,
            buttons: ['csv', 'pdf',
             'colvis'
             
             ],
            "order": [],
             /*language: {
                        "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Portuguese-Brasil.json"
                    }*/

        } );


        table.buttons().container()
            .appendTo( '#table_wrapper .col-md-6:eq(0)' );
    } );
      
       $("#datainicial").mask('00/00/0000'); 
       $("#dataFinal").mask('00/00/0000'); 
    </script>

</body>

</html>






EMPRESAS;


?>


<?php

if ($_SESSION["login"] <> null && ($categoria == 10))
    echo $empresas;
else {
    echo "Você não tem permissões para acessar essa página, faça o <a href='index.html'>LOGIN!<a>";
}

?>