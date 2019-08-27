<?php
include("menu.php");
ini_set('display_errors', 0);


$configEmpresa = <<<EMPRESA
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
    <link rel="stylesheet" href="_css/configurar_empresa_style.css">
    <script src="jquery-3.3.1.js"></script>
    <script src="_javascript/configurar_empresa.js"></script>
    <link rel="icon" href="_imagens/logo_icone.jpg" type="image/x-icon" />
    <script src="node_modules/moment/moment.js"></script>
    <script src="https://compressjs.herokuapp.com/compress.js"></script>
    <link href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.min.css" rel="stylesheet" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.min.js"></script>


    
    <title>Entregador</title>

</head>

<body onload="carregaEmpresa()">

    <div class="wrapper">
       $menu
        <div class="content" id="corpo">
            <div class="row" id="teto">
                <button onclick="oculta_div()" type="button" id="sidebarCollapse" >
                    <img src="_imagens/menu.png" title="Menu">
                </button>
                <!-- <h1 id="tetoh1"> Meus itens</h1> -->
            </div>

           <div id="carregando"class="container flex">
                <p>Verificando configurações da sua empresa Sr(a).  $username,aguarde!</p>                
                <img id="gif"  src="_imagens/gif-carregando.gif" alt="carregandogif">
                <p><span>*Por favor, não atualize a página ou dados serão perdidos!</span></p>

            </div>

<div id="detalhes_empresa" class="container col-12">
    <div>
     <input id="EMP_id" style="display: none" name="EMP_id" value="$EMP_id">
        <section id="detalhes" class="container flex">
            <div class="item flex-item-1" id="parte1">

                <h1 id="titulo_item"></h1>

              <!--<div class="form-group">
                    <label for="detalhesnome">Nome:</label>
                    <input type="text" class="form-control" id="detalhesnome" name="detalhesnome"
                           placeholder="" maxlength="20" value=''>

                </div>-->
                
                <div class="form-group">
                    <label for="detalhesnomeFantasia">Nome Fantasia:</label>
                    <input type="text" class="form-control" id="detalhesnomeFantasia" name="detalhesnomeFantasia"
                           placeholder="" maxlength="20" value=''>

                </div>

                <div class="form-group">
                    <label for="detalhestelefone">Telefone:</label>
                    <input type="text" class="form-control" id="detalhestelefone" name="detalhestelefone" placeholder=""
                           maxlength="20" value=''>


                </div>
                <!--                <div  class="form-group"  id="form-categoria">
                                             <label for='categoria_empresa'>Categorias:</label>
                                           <select id="categoria_empresa" class="js-example-theme-single"style="width: 100%" multiple="multiple" ">
                                           
                                           </select>
                                </div>
                                -->


            </div>
            <div id="imagem" class="item flex-item-1">

                <img id="detalhesimagem" src="">

               <div id="upload" class="form-group">
                         <form action="" method="post" id="enviaImg" enctype="multipart/form-data"> 
                                <input id="EMP_id" style="display: none" name="EMP_id" value="$EMP_id">
                                <input id="auxDiretorio" style="display: none" name="auxDiretorio">

                            <div class="custom-file">
                                <input type="file" class="custom-file-input"  id="customFile" name = "arquivo" accept=".jpg,.png,.jpeg" >
                                <label class="custom-file-label" id="nomefile" for="customFile">Trocar imagem</label>
                            </div>
                        </div>
                <div id="botoes">
                    <button id="salvar" type="submit" name="submit" class="btn btn-success "
                            value="salvar">Salvar
                    </button>
                    <button onclick="voltar()" id="aaa" type="button" class="btn">Voltar</button>
                </div>
            </div>
        </section>
    </div>

</div>



</div>


</div>





<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
crossorigin="anonymous"></script> <!-- altera os ul dentro do menu -->

<script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>



<script>

// var options = {
//     translation: {
//     'A': {pattern: /[A-Z]/}, //so maiusculas 
//     'a': {pattern: /[a-zA-Z]/}, //so letras
//    'S': {pattern: /[a-zA-Z0-9]/}, //letras e numeros
//     'L': {pattern: /[a-z]/}  
//    }
// }

$(".js-example-theme-single").select2();


$(document).ready(function () {
$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});
$("#detalhestelefone").mask('(00)00000-0000'); 

});

 const upload = document.getElementById('upload');

    upload.addEventListener('change', (evt) => {
        if (verificaExtensao()) 
            TrocaImagem(evt);
    }, false);


</script>

</body>

</html>
$footer

EMPRESA;
echo $configEmpresa;
