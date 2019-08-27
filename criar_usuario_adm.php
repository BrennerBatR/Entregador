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
    <link rel="stylesheet" href="_css/criar_usuario_adm.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="icon" href="_imagens/logo_icone.jpg" type="image/x-icon" />
    <script src="node_modules/moment/moment.js"></script>
    <script src="_javascript/criar_usuario_adm.js"></script>
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
                <p>Cadastrando usuário Sr(a).  $username,aguarde!</p>                
                <img id="gif"  src="_imagens/gif-carregando.gif" alt="carregandogif">
                <p><span>*Por favor, não atualize a página ou dados serão perdidos!</span></p>

            </div>
            
            <div id="corpoTable" style="width: 90%; margin-left: 5%; margin-top: 2%">
            <div id="title">
                <h1>Usuários cadastrados:</h1>
                <button id="novousuario" title="Adicionar novo usuário" type="button" class="btn btn-primary" data-toggle="modal" data-target="#criarusuario" data-whatever="@mdo">Novo</button>

            </div>
               <table id="table" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                    <thead>
                <tr>
                    <th style="width: 20%">ID</th>
                    <th style="width: 20%">CPF</th>
                    <th style="width: 40%">Nome</th>
                    <th style="width: 20%">Email</th>
                    <th style="width: 20%">Categoria</th>
                </tr>
                </thead>

                <tfoot>
                <tr>
                   <th style="width: 20%">ID</th>
                    <th style="width: 20%">CPF</th>
                    <th style="width: 40%">Nome</th>
                    <th style="width: 20%">Email</th>
                    <th style="width: 20%">Categoria</th>
                </tr>
                </tfoot>
            </table>
        </div>
            

            </div>
        </div>
    </div>
    
    
     <div class="modal fade" id="criarusuario" tabindex="-1" role="dialog" aria-labelledby="criarusuarioLabel" aria-hidden="true">
    <div class="modal-dialog" role="document" id="modalusuario">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="criarusuarioLabel">Novo usuario</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div>
                    <div class="form-group">
                        <label for="cpf" class="col-form-label">CPF:</label>
                        <input type="text" class="form-control" id="cpf" required>
                    </div>
                     <div class="form-group">
                        <label for="nome" class="col-form-label">Nome:</label>
                        <input type="text" class="form-control" id="nome" required>
                    </div>
                     <div class="form-group">
                        <label for="nasc" class="col-form-label">Data nascimento:</label>
                        <input type="text" class="form-control" id="nasc" required>
                    </div>
                     <div class="form-group">
                        <label for="celular" class="col-form-label">Celular:</label>
                        <input type="text" class="form-control" id="celular" required>
                    </div>
                     <div class="form-group">
                        <label for="email" class="col-form-label">Email:</label>
                        <input type="text" class="form-control" id="email" required>
                    </div>
                    
                    <div class="form-group">
                    <label for="categoria_usuario" class="col-form-label">Categoria do usuário:</label>
                     <select id='categoria_usuario' onchange="verificaempresa(this.value)" name='categoria_usuario' class="categoria_usuario" style="width: 100%" required>
                        
                      </select>
                     </div>
                     
                     <div class="form-group" id="divempresa">
                    <label for="empresa" class="col-form-label">Empresa do usuário:</label>
                     <select id='empresa'  name='empresa' class="empresa" style="width: 100%" >
                        
                      </select>
                     </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" id="closeusuario" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <button type="button" id="sendusuario" class="btn btn-primary" onclick="criarusuario()">Criar usuario</button>
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
    <link href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.min.css" rel="stylesheet" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.min.js"></script>
   

  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script> <!-- altera os ul dentro do menu -->

    <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>  
    
    <script>
     $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
    
      $(".categoria_usuario").select2({
        placeholder: 'Seleciona uma categoria:'
        });
      
       $(".empresa").select2({
        placeholder: 'Selecione a empresa:'
        });
        $(document).ready(function() {
        var table = $('#table').DataTable( {
            lengthChange: false,
            buttons: ['csv', 'pdf'],
            "order": [],
             /*language: {
                        "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Portuguese-Brasil.json"
                    }*/

        } );

        table.buttons().container()
            .appendTo( '#table_wrapper .col-md-6:eq(0)' );
                $("#cpf").mask('00000000000');              
                $("#celular").mask('(00) 00000-0000');  
                $("#nasc").mask('00/00/0000');  
            });
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