<?php
include("menu.php");

$cadastro = <<< CADASTRO
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
    <link rel="stylesheet" href="_css/cadastrar_usuario_style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="icon" href="_imagens/logo_icone.jpg" type="image/x-icon" />
    <script src="node_modules/moment/moment.js"></script>
    <script src="_javascript/cadastrar_usuario.js"></script>
    <script src="jquery-3.3.1.js"></script>
    <title>Entregador</title>

</head>

<body onload="carregapagina()">

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
                <p>Carregando,por favor guarde Sr(a).  $username!</p>                
                <img id="gif"  src="_imagens/gif-carregando.gif" alt="carregandogif">
                <p><span>*Por favor, não atualize a página ou dados serão perdidos!</span></p>

            </div>
            
            <div id="formulario2" class="container flex">
            
             <div id="parte2" class="item flex-item-1">
                    <h1> Cadastrar funcionário <span id="cnpj_empresa"></span></h1>
                    <div>
                        <!--<div class="form-group">
                            <label for="nome">Id da empresa:</label>
                            <input type="text"   class="form-control" id="idEmpresa" name="nome" placeholder="Digite o nome ..."  maxlength="100" value ='' onkeydown = " return verificaNome(this)">
                    
                        </div> -->
                        <div class="form-group">
                            <label for="nome">Nome:</label>
                            <input type="text"   class="form-control" id="nome" name="nome" placeholder="Digite o nome ..."  maxlength="100" value ='' onkeydown = " return verificaNome(this)">
                    
                        </div>
                         <div class="form-group">
                            <label for="cpf">CPF:</label>
                            <input type="text" class="form-control" id="cpf" name="cpf" placeholder="Digite o cpf ..."  maxlength="11" value ='' >                    
                        </div>          
                        <div class="form-group">
                            <label for="celular">Celular:</label>
                            <input type="text" class="form-control" id="celular" name="celular" placeholder="Digite o celular ..."  maxlength="11" value ='' >                    
                        </div>             
                        
                       
                        <div class="form-group">
                            <label for="data_nasc">Data de nascimento:</label>
                            <input type="text" class="form-control" id="data_nasc" name="data_nasc" placeholder="DD/MM/AAAA"  maxlength="10" value =''>
                    
                        </div>
                       <!-- <div class="form-group" id="form-categoria">

                        </div> -->
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="text" class="form-control" id="email" name="email" placeholder="Digite o email"   value ='' >                    
                        </div>
                        <!--<div class="form-group">
                            <label for="senha">Senha:</label>
                            <input type="password" class="form-control" id="senha" name="senha" placeholder="Digite a senha"  minlength="6" value ='' onkeydown = " return verificaNome(this)">                    
                        </div>  -->                    
                        <div  id="fim">
                            <button id="enviar" type="submit" class="btn btn-primary" onclick="cadastrar_usuario()" value="$EMP_id">Cadastrar</button>
                            
                        </div>
                </div>
              </div>

            </div>
        </div>
    </div>
    
  $footer


   
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script> <!-- altera os ul dentro do menu -->

    <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>  
    <script>
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
           
            $("#cpf").mask('00000000000');              
            $("#celular").mask('(00) 00000-0000');  
            $("#data_nasc").mask('00/00/0000');  
           
        });
    </script>

</body>

</html>






CADASTRO;


?>


<?php

if ($_SESSION["login"] <> null && ($categoria == 10 || $categoria == 4))
    echo $cadastro;
else {
    echo "Você não tem permissões para acessar essa página, faça o <a href='index.html'>LOGIN!<a>";
}

?>