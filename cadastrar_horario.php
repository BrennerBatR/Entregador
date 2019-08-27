<?php
/**
 * Created by PhpStorm.
 * User: brenner
 * Date: 23/03/19
 * Time: 07:05
 */

include("menu.php");

$horario = <<< HORARIO
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
    <link rel="stylesheet" href="_css/horario.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="icon" href="_imagens/logo_icone.jpg" type="image/x-icon" />
    <script src="jquery-3.3.1.js"></script>
    <script src="_javascript/cadastrar_horario.js"></script>
    <script src="node_modules/moment/moment.js"></script>
    <title>Entregador</title>

</head>

<body onload="verificatela()">

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
                <p>Carregando dados Sr(a).  $username,aguarde!</p>                
                <img id="gif"  src="_imagens/gif-carregando.gif" alt="carregandogif">
                <p><span>*Por favor, não atualize a página ou dados serão perdidos!</span></p>

            </div>
            <div id="formulario" class="container flex">
 <input id="EMP_id" style="display: none" name="EMP_id" value="$EMP_id">
                <div id="parte1" class="item flex-item-1">
                    <h1> Cadastrar horários </h1>
                    <h2>Abre no(a):</h2>
                    <div class="was-validated">
                        <div class="custom-control custom-checkbox mb-4" id="dia_7">
                            <input type="checkbox" class="custom-control-input" id="domingoValidation" required>
                            <label class="custom-control-label" for="domingoValidation">Domingo</label>
                            <div class="valid-feedback">
                                <input type="text" class="form-control is-valid" id="domingoA"  placeholder="Abre às: hh:mm" value="" required minlength="4">
                                <input type="text" class="form-control is-valid" id="domingoF"  placeholder="Fecha às: hh:mm" value="" required minlength="4">
                            </div>
                        </div> 
                        <div class="custom-control custom-checkbox mb-4" id="dia_1">
                            <input type="checkbox" class="custom-control-input" id="segundaValidation" required>
                            <label class="custom-control-label" for="segundaValidation">Segunda-feira</label>
                            <div class="valid-feedback">
                                <input type="text" class="form-control is-valid" id="segundaA" placeholder="Abre às: hh:mm" value="" required minlength="4">
                                <input type="text" class="form-control is-valid" id="segundaF" placeholder="Fecha às: hh:mm" value="" required minlength="4">
                            </div>
                        </div> 
                        <div class="custom-control custom-checkbox mb-4" id="dia_2">
                            <input type="checkbox" class="custom-control-input" id="tercaValidation" required >
                            <label class="custom-control-label" for="tercaValidation">Terça-feira</label>
                           <div class="valid-feedback">
                                <input type="text" class="form-control is-valid" id="tercaA" placeholder="Abre às: hh:mm" value="" required minlength="4">
                                <input type="text" class="form-control is-valid" id="tercaF" placeholder="Fecha às: hh:mm" value="" required minlength="4">
                            </div>
                        </div>
                         <div class="custom-control custom-checkbox mb-4" id="dia_3">
                            <input type="checkbox" class="custom-control-input" id="quartaValidation" required>
                            <label class="custom-control-label" for="quartaValidation">Quarta-feira</label>
                            <div class="valid-feedback">
                                <input type="text" class="form-control is-valid" id="quartaA" placeholder="Abre às: hh:mm" value="" required minlength="4">
                                <input type="text" class="form-control is-valid" id="quartaF" placeholder="Fecha às: hh:mm" value="" required minlength="4">
                            </div>
                        </div>
                         <div class="custom-control custom-checkbox mb-4" id="dia_4">
                            <input type="checkbox" class="custom-control-input" id="quintaValidation" required >
                            <label class="custom-control-label" for="quintaValidation">Quinta-feira</label>
                            <div class="valid-feedback">
                                <input type="text" class="form-control is-valid" id="quintaA" placeholder="Abre às: hh:mm" value="" required minlength="4">
                                <input type="text" class="form-control is-valid" id="quintaF" placeholder="Fecha às: hh:mm" value="" required minlength="4">
                            </div>
                        </div>
                         <div class="custom-control custom-checkbox mb-4" id="dia_5">
                            <input type="checkbox" class="custom-control-input" id="sextaValidation" required >
                            <label class="custom-control-label" for="sextaValidation">Sexta-feira</label>
                            <div class="valid-feedback">
                                <input type="text" class="form-control is-valid" id="sextaA" placeholder="Abre às: hh:mm" value="" required minlength="4">
                                <input type="text" class="form-control is-valid" id="sextaF" placeholder="Fecha às: hh:mm" value="" required minlength="4">
                            </div>
                        </div>
                        <div class="custom-control custom-checkbox mb-4" id="dia_6">
                            <input type="checkbox" class="custom-control-input" id="sabadoValidation" required >
                            <label class="custom-control-label" for="sabadoValidation">Sábado</label>
                            <div class="valid-feedback">
                                <input type="text" class="form-control is-valid" id="sabadoA" placeholder="Abre às: hh:mm" value="" required minlength="4">
                                <input type="text" class="form-control is-valid" id="sabadoF" placeholder="Fecha às: hh:mm" value="" required minlength="4">
                            </div>
                        </div>
                            
                        <div id="fim">
                            <button id="enviar" type="submit" class="btn btn-primary" onclick="CadastrarHorario()">Confirmar
                            </button>
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
            $("#domingoA").mask('00:00'); 
            $("#domingoF").mask('00:00'); 
            $("#segundaA").mask('00:00'); 
            $("#segundaF").mask('00:00'); 
            $("#tercaA").mask('00:00'); 
            $("#tercaF").mask('00:00'); 
            $("#quartaA").mask('00:00'); 
            $("#quartaF").mask('00:00'); 
            $("#quintaA").mask('00:00'); 
            $("#quintaF").mask('00:00'); 
            $("#sextaA").mask('00:00'); 
            $("#sextaF").mask('00:00'); 
            $("#sabadoA").mask('00:00'); 
            $("#sabadoF").mask('00:00'); 
           
        });
    </script>

</body>

</html>


HORARIO;


?>


<?php

if ($_SESSION["categoria"] <> null && ($categoria == 4 || $categoria == 10))
    echo $horario;
else {
    echo "Você não tem permissões para acessar essa página, faça o <a href='index.html'>LOGIN!<a>";
}

?>