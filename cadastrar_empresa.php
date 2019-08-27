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
    <link rel="stylesheet" href="_css/cadastrar_empresa_style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="icon" href="_imagens/logo_icone.jpg" type="image/x-icon" />
    <script src="node_modules/moment/moment.js"></script>
    <script src="_javascript/cadastrar_empresa.js"></script>
    <script src="jquery-3.3.1.js"></script>
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
                <p>Cadastrando empresa Sr(a).  $username,aguarde!</p>                
                <img id="gif"  src="_imagens/gif-carregando.gif" alt="carregandogif">
                <p><span>*Por favor, não atualize a página ou dados serão perdidos!</span></p>

            </div>
            <div id="formulario" class="container flex">
                
                <div id="parte1" class="item flex-item-1">
                    <h1> Cadastrar Empresa </h1>
                    <div >

                        <div class="form-group">
                            <label for="nome">CNPJ da empresa:</label>
                            <input type="text"    class="form-control" id="cnpj" name="cnpj" placeholder="Digite o CNPJ ..."  maxlength="14" value =''  >
                    
                        </div>
                         <div class="form-group" id="oppagamento">
                        <label for="oppagamento">Forma de pagamento:</label>
                        <div class="was-validated">
                            <div class="custom-control custom-checkbox mb-4" id="mensalidadediv">
                                <input type="checkbox" class="custom-control-input" id="mensalidade" onclick="formapag(this.id)" checked = true required>
                                <label class="custom-control-label" for="mensalidade">Mensalidade</label>
                                <div class="valid-feedback">

                                </div>
                            </div>
                        </div>
                        <div class="was-validated">
                            <div class="custom-control custom-checkbox mb-4" id="porcentagemdiv">
                                <input type="checkbox"  class="custom-control-input" id="porcentagem" onclick="formapag(this.id)" required>
                                <label class="custom-control-label" for="porcentagem">Porcentagem</label>
                                <div class="valid-feedback">
                                    <input type="text" class="form-control is-valid" id="porcentagemVal"
                                           placeholder="000.00%" value="" required minlength="1">
                                </div>
                            </div>
                        </div>
                        
                    </div>
              
                        <div  id="fim">
                            <button id="enviar"  class="btn btn-primary" onclick="verificaForm()">Cadastrar</button>
                            
                        </div>
                    </div>
                </div>

            </div>

            <div id="formulario2" class="container flex">
            
             <div id="parte2" class="item flex-item-1">
                    <h1> Cadastrar dono da empresa <span id="cnpj_empresa"></span></h1>
                    <div>
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
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="text" class="form-control" id="email" name="email" placeholder="Digite o email"   value ='' >                    
                        </div>
                        <!--<div class="form-group">
                            <label for="senha">Senha:</label>
                            <input type="password" class="form-control" id="senha" name="senha" placeholder="Digite a senha"  minlength="6" value ='' onkeydown = " return verificaNome(this)">                    
                        </div>-->
                        
                        <input id="idEmpresa" style="display: none"> 
              
                        <div  id="fim">
                            <button id="enviar" type="submit" class="btn btn-primary" onclick="cadastrar_dono()">Cadastrar</button>
                            
                        </div>
                </div>
              </div>
            </div>


<div id="formularioManual" class="container flex">
            <div id="cadastroManual" class="item flex-item-1">
                <h1> Dados da Empresa</h1>

                <div class="form-group">
                    <label for="cnpjManual">CNPJ da empresa:</label>
                    <input required type="text" class="form-control" id="cnpjManual" name="cnpjManual" placeholder="Digite o CNPJ ..."  maxlength="14" value =''  >

                </div>
                <div class="form-group">
                    <label for="nomeFantasia">Nome da Empresa:</label>
                    <input type="text"  ondrop="return false" class="form-control" id="nomeFantasia"
                           name="nomeFantasia" placeholder="Digite o nome ..." required maxlength="100" value=''>
                    
                </div>
                <div class="form-group">
                    <label for="nomeManual">Nome fantasia:</label>
                    <input type="text"  ondrop="return false" class="form-control" id="nomeManual"
                           name="nomeManual" placeholder="Digite o nome fantasia ..." required maxlength="100" value=''>
                 
                </div>
                <div class="form-group">
                    <label for="telefone">Telefone:</label>
                    <input type="text" class="form-control" id="telefone" name="telefone" placeholder="(00) 00000-0000"  maxlength="11" value ='' >
                </div>
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="email@email.com"  value ='' >
                </div>

                <div class="form-group">
                    <label for="capital_social">Capital Social:</label>
                    <div id="campo_capital_social">
                        <span class="input-group-text" id="cifrao">R$</span><input   ondrop="return false" class="form-control" id="capital_social" name="capital_social" placeholder="00.00" required maxlength="10" value =''>
                    </div>
                </div>
                <div class="form-group">
                    <label for="porte">Porte:</label>
                    <input type="text"  ondrop="return false" class="form-control" id="porte"
                           name="nomeManual" placeholder="Porte.." required maxlength="100" value=''>
                 
                </div>
                <div class="form-group">
                    <label for="abertura">Data de abertura:</label>
                    <input type="text"  ondrop="return false" class="form-control" id="abertura"
                           name="nomeManual" placeholder="XX/XX/XXXX" required maxlength="100" value=''>
                 
                </div>
                <div class="form-group">
                    <label for="natureza">Natureza Jurídica:</label>
                    <input type="text"  ondrop="return false" class="form-control" id="natureza"
                           name="nomeManual" placeholder="Digite a natureza jurídica ..." required maxlength="100" value=''>
                </div>
                 <div class="form-group">
                    <label for="status">Status:</label>
                    <input type="text"  ondrop="return false" class="form-control" id="status"
                           name="nomeManual" placeholder="Status da empresa ..." required maxlength="100" value=''>
                </div>
                 <div class="form-group">
                    <label for="principal">Atividade principal:</label>
                    <input type="text"  ondrop="return false" class="form-control" id="principal"
                           name="nomeManual" placeholder="Atividade principal da empresa ..." required maxlength="100" value=''>
                </div>
                 <div class="form-group">
                    <label for="data_situacao">Data Situação:</label>
                    <input type="text"  ondrop="return false" class="form-control" id="data_situacao"
                           name="nomeManual" placeholder="XX/XX/XXXX" required maxlength="100" value=''>
                </div> 
                  <div class="form-group">
                    <label for="tipo">Tipo:</label>
                    <input type="text"  ondrop="return false" class="form-control" id="tipo"
                           name="nomeManual" placeholder="Tipo da empresa ..." required maxlength="100" value=''>
                </div>   
                    
                 <div class="form-group">
                    <label for="tipo_filiacao">Valor %:<span style="color: red ; font-size : 12px"> Caso seja mensalidade, ignore esse campo </span></label>
                    <input type="text"  ondrop="return false" class="form-control" id="tipo_filiacao"
                           name="tipoPagameto" placeholder="Mensal ou %" required maxlength="100" value=''>
                </div>   
                    


            </div>
            <div id="enderecoManual" class="item flex-item-1">
                <h1> Endereço da Empresa</h1>

                <div class="form-group">
                    <label for="cep">CEP:</label>
                    <input type="text" class="form-control" id="cep" name="cep" placeholder="XX.XXX-XXX"  maxlength="14" value =''  >

                </div>
                <div class="form-group">
                    <label for="rua">Rua:</label>
                    <input type="text" class="form-control" id="rua"
                           name="rua" placeholder="Nome da Rua ..." required maxlength="100" value=''>
                </div>
                <div class="form-group">
                    <label for="bairroEnumero">Bairro e Número:</label>
                    <div id="bairroEnumero">
                        <input  class="form-control" id="bairro" name="bairro" placeholder="Digite o bairro ..."  maxlength="100" value =''  >
                        <input type="number" class="form-control" id="numero" name="numero" placeholder="Nº:"  value =''  >
                    </div>
                </div>
                 <div class="form-group">
                    <label for="cidade">Cidade:</label>
                    <input type="text" class="form-control" id="cidade"
                           name="cidade" placeholder="Nome da cidade ..." required maxlength="100" value=''>
                </div>
                <div class="form-group">
                    <label for="estado">Estado:</label>
                    <input type="text"  class="form-control" id="estado"
                           name="estado" placeholder=" ..." required maxlength="100" value=''>

                </div>
                <div class="form-group">
                    <label for="complemento">Complemento:</label>
                    <input type="text" class="form-control" id="complemento"
                           name="complemento" placeholder="Ex: Casa, Apartamento" required maxlength="100" value=''>

                </div>
                <div class="form-group">
                    <label for="apelido">Apelido:</label>
                    <input type="text"  class="form-control" id="apelido"
                           name="apelido" placeholder="Ex: Principal" required maxlength="100" value=''>

                </div>
                
                 
                <div id="fim">
                    <button id="enviar" type="submit" class="btn btn-primary" onclick="CadastrarEmpresaManual()">Cadastrar
                    </button>
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
            $("#cnpj").mask('00000000000000');  
            $("#cnpjManual").mask('00000000000000');  
            $("#cep").mask('00.000-000');  
            $("#cpf").mask('00000000000');              
            $("#celular").mask('(00) 00000-0000');  
            $("#telefone").mask('(00) 00000-0000');  
            $("#data_nasc").mask('00/00/0000');  
            $("#porcentagemVal").mask('000.00', {reverse: true});
            $("#data_situacao").mask('00/00/0000');  
            $("#abertura").mask('00/00/0000');  
            $("#capital_social").mask('00000000000.00', {reverse: true});

           
        });
    </script>

</body>

</html>






CADASTRO;


?>


<?php

if ($_SESSION["login"] <> null && ($categoria == 10))
    echo $cadastro;
else {
    echo "Você não tem permissões para acessar essa página, faça o <a href='index.html'>LOGIN!<a>";
}

?>