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
    <link rel="stylesheet" href="_css/cadastrar_style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="icon" href="_imagens/logo_icone.jpg" type="image/x-icon" />
    <script src="jquery-3.3.1.js"></script>
    <script src="_javascript/cadastrar_produto.js"></script>
    <link href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.min.css" rel="stylesheet" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.min.js"></script>
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
                
                <div id="parte1" class="item flex-item-1">
                    <h1> Cadastrar Item </h1>

                        <div class="form-group">
                            <label for="nome">Nome do produto:</label>
                            <input type="text"  onpaste="return false" ondrop="return false"  class="form-control" id="nome" name="nome" placeholder="Digite o nome ..." required maxlength="29" value ='' onkeydown = " return verificanome(this)">
                            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                                else.</small> -->
                        </div>

                        <div class="form-group">
                            <label for="descricao">Descrição:</label>
                            <textarea  onkeydown = " return verificadescricao(this)" class="form-control" id="descricao" name="descricao" placeholder="Digite a descrição ..." required value ='' maxlength="199"></textarea>
                        </div>
                       
                        <div class="form-group">
                            <label for="preco">Preço do produto:</label>
                            <div id="campo_preco">
                            <span class="input-group-text" id="cifrao">R$</span><input type="text" onpaste="return false" ondrop="return false" class="form-control" id="preco" name="preco" placeholder="00.00" required maxlength="10" value =''>
                            </div>
                        </div>
                          <div class="form-group">
                    <label for="estoque">Estoque do produto:</label>
                    <input type="text" onpaste="return false" ondrop="return false" class="form-control" id="estoque" name="estoque" placeholder="0" required min="0">
                </div>
                         <div class="form-group" id="form-categoria">
                          <label for='categoria_produto'>Categoria do produto: <button id="addcategoria" title="Adicionar nova categoria" type="button" class="btn btn-primary" data-toggle="modal" data-target="#criarcategoria" data-whatever="@mdo">+</button></label>
                        <select id='categoria_produto' name='categoria_produto' class="categoria_produto" style="width: 80%" required>
                        
                        </select>
                        </div> 
                        <div class="form-group" id="form-categoria">
                        <label for='nome'>Subcategoria do produto: <button id="addcategoria" title="Adicionar nova subcategoria" type="button" class="btn btn-primary" data-toggle="modal" data-target="#criarsubcategoria" data-whatever="@mdo">+</button></label>
                        <select id='subcategoria_produto' name='subcategoria_produto' class="subcategoria" style="width: 80%" required>
                        
                        </select>
                        </div>
                        <form action="" method="post" id="enviaImg" enctype="multipart/form-data"> 
                            <input id="auxProdutoId" style="display: none" name="auxProdutoId">
                                <div class="form-group">
                                <input id="EMP_id" style="display: none" name="EMP_id" value="$EMP_id">
                                    <label for="customFile">Adicionar Imagem:</label>
                                    <div class="custom-file" id="inputupload" >                                
                                        <input type="file" class="custom-file-input" onchange="verificaExtensao(this)" id="customFile" name = "arquivo" accept=".jpg,.png,.jpeg">
                                        <label class="custom-file-label" id="nomefile" for="customFile">Escolher imagem</label>
                                    </div>
                                </div>
                                <input type="submit" id="enviarForm" style="display: none">
                            </form>
                   <div class="form-group" id="form-categoria">
                    <label id="outros">Outros:</label>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="tamanho" onclick = "exibeTamanhos(this.checked)">
                            <label class="custom-control-label" for="tamanho">Tamanho:</label>
                            </div>
                            <div id="tamanhos">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline1" name="radiotam" value="P"
                                           class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline1">P</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="radiotam" value="M"
                                           class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline2">M</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline3" name="radiotam" value="G"
                                           class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline3">G</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline4" name="radiotam" value="GG"
                                           class="custom-control-input">
                                    <label class="custom-control-label" for="customRadioInline4">GG</label>
                                </div>
                            </div>
                        
                </div>
                            
                        <!-- <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> -->
                        <div  id="fim">
                            <button id="enviar" type="submit" class="btn btn-primary" onclick="CadastrarProduto()">Cadastrar</button> 
                        </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    <div class="modal fade" id="criarcategoria" tabindex="-1" role="dialog" aria-labelledby="criarcategoriaLabel" aria-hidden="true">
    <div class="modal-dialog" role="document" id="modalcategoria">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="criarcategoriaLabel">Nova categoria</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div>
                    <div class="form-group">
                        <label for="nomecategoria" class="col-form-label">Nome da categoria:</label>
                        <input type="text" class="form-control" id="nomecategoria">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" id="closecategoria" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <button type="button" id="sendcategoria" class="btn btn-primary" onclick="criarcategoria()">Criar categoria</button>
            </div>
        </div>
    </div>
</div>



  <div class="modal fade" id="criarsubcategoria" tabindex="-1" role="dialog" aria-labelledby="criarsubcategoriaLabel" aria-hidden="true">
    <div class="modal-dialog" role="document" id="modalsubcategoria">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="criarsubcategoriaLabel">Nova subcategoria</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div>
                    <div class="form-group">
                        <label for="nomesubcategoria" class="col-form-label">Nome da subcategoria:</label>
                        <input type="text" class="form-control" id="nomesubcategoria">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" id="closesubcategoria" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <button type="button" id="sendsubcategoria" class="btn btn-primary" onclick="criarsubcategoria()">Criar subcategoria</button>
            </div>
        </div>
    </div>
</div>
    
    
    
  $footer


    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script> <!-- altera os ul dentro do menu -->

    <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>  
    <script>
        $(".categoria_produto").select2({
        placeholder: 'Seleciona uma opção:'
        });
        
        $(".subcategoria").select2({
        placeholder: 'Seleciona uma opção:'
        });
    
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
            $("#preco").mask('0000.00', {reverse: true}); //reverse true = campos preenchidos de tras para frente!
            $("#estoque").mask('00000000', {reverse: true});
           
        });
    </script>

</body>

</html>


CADASTRO;


?>


<?php

if ($_SESSION["categoria"] <> null && ($categoria == 4 || $categoria == 10))
    echo $cadastro;
else {
    echo "Você não tem permissões para acessar essa página, faça o <a href='index.html'>LOGIN!<a>";
}

?>