<?php
include("menu.php");


$produtos = <<<PRODUTOS


<!doctype html>
<html lang="pt-br">

<head>
    <!-- Required meta tags -->
    
    <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed|Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="_javascript/itens-func.js"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="Content-Language" content="pt-br">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous">
    <link rel="stylesheet" href="_css/veritens_style.css">
    <link rel="icon" href="_imagens/logo_icone.jpg" type="image/x-icon" />
    <script src="jquery-3.3.1.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <link href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.min.css" rel="stylesheet" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossorigin="anonymous"></script> <!-- altera os ul dentro do menu -->
    <script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>
    <script src="https://compressjs.herokuapp.com/compress.js"></script>
    <script src="node_modules/moment/moment.js"></script>


    
    
    <title>Entregador</title>

</head>

<body onload="verificatela($EMP_id)">

<div class="wrapper">
       $menu

    <div class="content" id="corpo">
        <div class="row" id="teto">
            <button onclick="oculta_div()" type="button" id="sidebarCollapse" >
                <img src="_imagens/menu.png" title="Menu">
            </button>
            <!-- <h1 id="tetoh1"> Meus itens</h1> -->
        </div>


        <div id="resultado" class="container col-12">
            <!-- <h3 id="observacao">*Para ver detalhes,excluir ou editar algum item, clique nele!</h3> -->

            <section class="container flex" id="itens">



            </section>
        </div>
        <div id="carregando"class="container flex">
            <p>Carregando dados Sr(a).  Brenner Batista,aguarde!</p>
            <img id="gif"  src="_imagens/gif-carregando.gif" alt="carregandogif">
            <p><span>*Por favor, não atualize a página ou dados serão perdidos!</span></p>

        </div>

        <div id="detalhes_item" class="container col-12">
            <!--<form id="formeditar" action="_php/editar_excluir.php" method="POST" enctype="multipart/form-data" 
                  onsubmit="return verificaform(this)"> -->
                <section id="detalhes" class="container flex">
                    <div class="item flex-item-1" id="parte1">

                        <h1 id="titulo_item"></h1>
                        <h5 id="iditem"></h5>
                         <input id="EMP_id" style="display: none" name="EMP_id" value="$EMP_id">
                        <div class="form-group">
                            <label for="detalhesnome">Nome do produto:</label>
                            <input type="text" onkeydown = " return verificanome(this)" class="form-control" id="detalhesnome" name="detalhesnome"
                                   placeholder="" maxlength="29" value='' onkeydown="verificanome(this)">

                        </div>
                        <div class="form-group">
                            <label for="detalhesdescricao">Descrição:</label>
                            <textarea onkeydown = " return verificadescricao(this)" class="form-control" id="detalhesdescricao" name="detalhesdescricao"
                                      placeholder="" value=''></textarea>
                        </div>
                        <div class="form-group" id="form-categoria">
                        <label for='categoria_produto' >Categoria: <span id="namecategoria" style="color: #FF6F00"></span> </label>
                        <select id='categoria_produto' name='categoria_produto' class="categoria_produto" style="width: 80%" required">
                        
                        </select>
                        </div> 
                        <div class="form-group" id="form-categoria">
                        <label for='nome'>Subcategoria: <span id="namesubcategoria" style="color: #FF6F00"></span> </label>
                        <select id='subcategoria_produto' name='subcategoria_produto' class="subcategoria" style="width: 80%" required>
                        
                        </select>
                        </div>
                        <div class="form-group">
                            <label for="detalhespreco">Preço do produto:</label>
                            <div id="campo_preco">
                                <span class="input-group-text" id="inputGroupPrepend">R$</span>
                                <input type="text" onpaste="return false" ondrop="return false" class="form-control" id="detalhespreco" name="detalhespreco" placeholder="" maxlength="10" value=''>
                            </div>
                        </div>


                    </div>
                    <div id="imagem" class="item flex-item-1">
                    
                        <h1 id="auxh1">Trocar imagem</h1>
                        <h5 id="auxh5">Abaixo:</h5>

                        <img id="detalhesimagem" src="">

                        <div id="upload" class="form-group">
                         <form action="" method="post" id="enviaImg" enctype="multipart/form-data"> 
                                <input id="auxProdutoId" style="display: none" name="auxProdutoId">
                                <input id="auxDiretorio" style="display: none" name="auxDiretorio">
                                <input id="EMP_id" style="display: none" name="EMP_id" value="$EMP_id">

                            <div class="custom-file">
                                <input type="file" class="custom-file-input"  id="customFile" name = "arquivo" accept=".jpg,.png,.jpeg" >
                                <label class="custom-file-label" id="nomefile" for="customFile">Trocar imagem</label>
                            </div>
                        </div>
                         <div class="form-group" id="divestoque">
                    <label id="labelestoque" for="estoque">Estoque do produto:</label>
                    <input type="text" onpaste="return false" ondrop="return false" class="form-control" id="estoque" name="estoque" placeholder="0" min="0">
                </div>
                        
                        <!--<input type="text" id="categoriaVal" style="display: block"> -->
                        <div id="botoes">
                            <button id="salvar"  type="submit" name="submit" class="btn btn-success "
                                    value="salvar">Salvar</button>
                            <button id="deletar" onclick="DeletarProduto()" type="button" name="submit" class="btn btn-danger "
                                    value="deletar">Deletar</button>
                            <button onclick="voltar()" id="aaa" type="button" class="btn">Voltar</button>
                        </div>
                     </form>

                    </div>
                </section>
            <!--</form> -->

        </div>



    </div>


</div>
$footer



<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script> <!-- altera os ul dentro do menu -->

<script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>

<script src="https://compressjs.herokuapp.com/compress.js"></script>





<script>

//var categoriaVal = document.getElementById("categoriaVal").value;
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
        $("#detalhespreco").mask('0000.00', {reverse: true}); //reverse true = campos preenchidos de tras para frente!

    });
    //onchange="verificaExtensao(this)"
    
    
    

    const upload = document.getElementById('upload');

    upload.addEventListener('change', (evt) => {
        if (verificaExtensao()) 
            TrocaImagem(evt);
    }, false);
    


</script>

</body>

</html>
PRODUTOS;

?>


<?php


if ($_SESSION["categoria"] <> null && ($categoria == 4 || $categoria == 10))
    echo $produtos;
else {
    echo "Você não tem permissões para acessar essa página, faça o <a href='index.html'>LOGIN!<a>";
}

?>

