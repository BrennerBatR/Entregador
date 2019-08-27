var update = false;
$(document).ready(function (e) {
    $("#enviaImg").on('submit', (function (e) {
        contagemparacarregarpagina();
        e.preventDefault();
        $.ajax({
            url: "_PHP/Imagens.php", // Url to which the request is send
            type: "POST",             // Type of request to be send, called as method
            data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
            contentType: false,       // The content type used when sending data to the server.
            cache: false,             // To unable request pages to be cached
            processData: false,        // To send DOMDocument or non processed data file it is set to false
            success: function (data)   // A function to be called if request succeeds
            {
                let json = JSON.parse(data);
                if (json['success'] === -100) {
                    let urlOld = document.getElementById("auxDiretorio").value;
                    EditarProduto(urlOld);
                } else if (json['success'] < 0) {
                    console.log(json);
                    alert('Troca de imagem falhou. Tente novamente!');
                    carregapagina(2);
                } else {
                    EditarProduto(json.url);
                }
            },
            error: function ()   // A function to be called if request succeeds
            {
                alert("Erro de urpload");
            }
        });
    }))
});

function verificatela() {
    contagemparacarregarpagina();
    BuscaProdutos();
    if (window.screen.availWidth < 1000 && update === false) {
        document.getElementById("sidebar").className = "active"; // se tiver class = "active" ele fica oculto !
        document.getElementById("auxh1").style.display = "none";
        document.getElementById("auxh1").innerHTML = "";
        document.getElementById("auxh5").innerHTML = "";//para a imagem nao afastar da parte 1
        document.getElementById("auxh5").style.display = "none";
        document.getElementById('detalhes').getElementsByTagName("h1")[0].style.fontSize = "23px"; //mudo o h1 com o nome recebido

        update = true;
    }

}

function oculta_div() {

    var id1 = document.getElementById("resultado");
    var id2 = document.getElementById("detalhes_item");


    if (window.screen.availWidth < 600 && id1.style.visibility != "hidden") {
        id1.style.visibility = "hidden";


    } else {
        id1.style.visibility = "visible";

    }

    if (window.screen.availWidth < 700 && id2.style.visibility != "hidden") {
        id2.style.visibility = "hidden";

    } else {
        id2.style.visibility = "visible";

    }

}

function detalhes(id, nomeRecebido, descricaoRecebido, preco, subcategoria, categoria, imagem) {
    let busca = "¬"; //coloquei essa transformação pois enviar o nome com espaço estava dando problema
    let strbusca = eval('/' + busca + '/g');// Aqui informamos para alterar todas as ocorrências de espaço
    let nomeTratado = nomeRecebido.replace(strbusca, ' '); // substitui todas as ocorrências de "¬" por "espaco"
    let nome = '';
    let descricao = descricaoRecebido.replace(strbusca, ' '); // substitui todas as ocorrências de "¬" por "espaco"

    if (nomeRecebido.length >= 14) {
        nome = nomeTratado.substring(0, 12) + " ...";
        nome = nome.toLowerCase();
    } else
        nome = nomeTratado;
    contagemparacarregarpagina();
    buscarcategorias(categoria);
    buscarsubcategorias(subcategoria);
    document.getElementById('detalhes').getElementsByTagName("h1")[0].innerHTML = nome; //mudo o h1 com o nome recebido
    document.getElementById('detalhes').getElementsByTagName("h5")[0].innerHTML = 'ID:' + id; //coloca o id comop subtitulo
    document.getElementsByName('detalhesdescricao')[0].placeholder = descricao; //placehold da descicao (mostra oq esta no banco)
    document.getElementsByName('detalhesdescricao')[0].value = descricao; //placehold da descicao (mostra oq esta no banco)
    document.getElementsByName('detalhesnome')[0].placeholder = nomeTratado; //placehold do nome (mostra oq esta no banco)
    document.getElementsByName('detalhesnome')[0].value = nomeTratado; //placehold do nome (mostra oq esta no banco)
    document.getElementsByName('detalhespreco')[0].placeholder = preco; //placehold do preco (mostra oq esta no banco)
    document.getElementsByName('detalhespreco')[0].value = preco; //placehold do preco (mostra oq esta no banco)
    document.getElementById('detalhesimagem').src = imagem;  //endereco da imagem que cliquei , coloco no src da imagem
    document.getElementById("auxProdutoId").value = id; //o botao salvar recebe o valor do id para enviar para api
    document.getElementById("auxDiretorio").value = imagem; //o botao salvar recebe o valor do id para enviar para api


}


function voltar() {
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('detalhes_item').style.display = 'none';
}

function checa_formulario(valor) { //tirei o form
    if (valor.value == 'deletar') {
        document.getElementById('formeditar').value = -1; //significa que quero deletar

    } else {
        document.getElementById('formeditar').value = 1;
        //document.getElementById('formeditar').submit();

    }
}


function verificanome(nome) {
    var tecla = (window.event) ? event.keyCode : e.which;

    if (tecla == 13)
        return false;
    if (nome.value.length == 0 && tecla == 32) { //nao pode começar com espaço !
        return false;
    }

    if (nome.value.length >= 30) {

        return false;
    }


}

function verificadescricao(descricao) {
    var tecla = (window.event) ? event.keyCode : e.which;

    if (tecla == 13)
        return false;

    if (descricao.value.length == 0 && tecla == 32) {
        return false;
    }

}



function buscarcategorias(cat) {
    var categoria = document.getElementById("categoria_produto");
    var select = '<option value = 0 id="categoriadefault" selected disabled>Selecione uma opção: </option>'
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");
    $.ajax({
        type: 'GET',
        url: url + '/categoria_produto',
        headers: {
            "token": token,
        },
        success: function (data) {
            for (var a = 0; data[a] != null; a++) { //enquanto nao terminar de ter resultados ele continua salvando nos vetores
                if (cat != data[a].CAP_id)  //se for igual começa ,marcado
                    select += "<option  id='categoria_' " + data[a].CAP_id + " value=" + data[a].CAP_id + ">" + data[a].CAP_nome + "</option>";
                else {
                    select += "<option selected id='categoria_' " + data[a].CAP_id + " value=" + data[a].CAP_id + ">" + data[a].CAP_nome + "</option>";
                    document.getElementById("namecategoria").innerHTML = data[a].CAP_nome;
                    //  document.getElementById("categoriaVal").value =data[a].CAP_nome;
                }
            }
            categoria.innerHTML = select;
        },
        error: function (jqXHR) {
            // console.log("erro",jqXHR);
            switch (jqXHR.status) {
                case 0:
                    alert("Sem conexão com a internet");
                    break;
                case 400:
                    alert(jqXHR.responseJSON["message"]);
                    break;
                case 401:
                    alert(jqXHR.responseJSON["message"]);
                    break;
                case 403:
                    alert(jqXHR.responseJSON["message"]);
                    break;
                default:
                    alert("Erro interno no servidor");
            }
        }
    });
}

function buscarsubcategorias(sub) {
    var subcategoria = document.getElementById("subcategoria_produto");
    var select = '<option value = 0 selected disabled>Selecione uma opção: </option>';
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");

    $.ajax({
        type: 'GET',
        url: url + '/subcategoria_produto',
        headers: {
            "token": token,
        },
        success: function (data) {
            for (var a = 0; data[a] != null; a++) { //enquanto nao terminar de ter resultados ele continua salvando nos vetores
                if (sub != data[a].SCP_id)
                    select += "<option id='subcategoria_' " + data[a].SCP_id + " value=" + data[a].SCP_id + ">" + data[a].SCP_nome + "</option>";
                else {
                    select += "<option selected id='subcategoria_' " + data[a].SCP_id + " value=" + data[a].SCP_id + ">" + data[a].SCP_nome + "</option>";
                    document.getElementById("namesubcategoria").innerHTML = data[a].SCP_nome;
                }
            }
            subcategoria.innerHTML = select;
            setTimeout(function () {
                carregapagina(1); //com detalhes
            }, 1000);
        }
    });

}


function verificaExtensao() {

    let imagem = $("#customFile");
    let $input = imagem[0];
    let extPermitidas = ["png", "jpg", "jpeg"];
    let extArquivo = $input.value.split('.').pop();
    let size = $input.files[0].size;

    if (typeof extPermitidas.find(function (ext) {
        return extArquivo == ext;
    }) == 'undefined') {
        alert('Extensão "' + extArquivo + '" não permitida!');
        $input.value = '';
        return false;

    } else if (size > 5097152) { //1MB
        alert('Tamanho da imagem não permitida (Máx 4.5 Mb)'); //Acima do limite
        $input.value = ''; //Limpa o campo
        return false;
    } else {
        let nome_arquivo = $($input).val().split("\\").pop();
        let quebraNome = nome_arquivo.substring(0, 8);
        document.getElementById("nomefile").innerHTML = quebraNome + "... ." + extArquivo;
        return true;
    }

}


function contagemparacarregarpagina() { //exibe a tela de carregando
    document.getElementById("resultado").style.display = "none";
    document.getElementById("detalhes_item").style.display = "none";
    document.getElementById("carregando").style.display = "block";

}

function carregapagina(op) { //exibe a tela de carregando
    if (op === 0) {
        document.getElementById("detalhes_item").style.display = "none";
        document.getElementById("carregando").style.display = "none";
        document.getElementById("resultado").style.display = "block";

    } else {
        document.getElementById("resultado").style.display = "none";
        document.getElementById("carregando").style.display = "none";
        document.getElementById("detalhes_item").style.display = "block";

    }
}


function BuscaProdutos() {
    let token = sessionStorage.getItem("token");
    let itens = document.getElementById("itens");
    let produto = '';
    let allprodutos = '';
    let idEmpresa = sessionStorage.getItem("EMP_id");
    let url = sessionStorage.getItem("url");
    $.ajax({
        type: 'GET',
        url: url + '/produtos/' + idEmpresa,
        headers: {
            "token": token,
        },
        success: function (data) {
            let idProduto = -1;
            for (let i = 0; i < data.length; i++) {

                idProduto = data[i].idProduto;
                let descricaoProduto = data[i].descricaoProduto;
                let idCategoria = data[i].idCategoria;
                let idSubCategoria = data[i].idSubCategoria;
                let imagem = data[i].imagem;
                let nomeProduto = data[i].nomeProduto;
                let preco_recebido = data[i].preco;

                nomeProduto = nomeProduto.replace("\n", " ");
                descricaoProduto = descricaoProduto.replace("\n", " ");

                // let nomeProduto = nomeProdutoRecebido.replace("/abc/g", "FGH");
                let busca = " ";
                let strbusca = eval('/' + busca + '/g');// Aqui informamos para alterar todas as ocorrências de espaço

                let nomeSemEspaco = nomeProduto.replace(strbusca, '¬'); // substitui todas as ocorrências de "espaço" por "¬"
                let descricaoSemEspaco = descricaoProduto.replace(strbusca, '¬'); // substitui todas as ocorrências de "espaço" por "¬"




                if (nomeProduto.length >= 14)
                    nomeProduto = nomeProduto.substring(0, 13) + "...";

                let preco_tratado = preco_recebido.toString().split(".");


                if (preco_tratado[1] === undefined || preco_tratado[1] == null) {
                    preco_recebido += ",00";
                } else if (preco_tratado[1].length === 1) {
                    preco_recebido += "0";
                }

                let preco = preco_recebido.toString().replace('.', ',');

                produto += "<div class='item flex-item-1' id='" + idProduto + "'";
                produto += 'onclick=detalhes("' + idProduto + '","' + nomeSemEspaco + '","' + descricaoSemEspaco + '","' + preco + '","' + idSubCategoria + '","' + idCategoria + '","' + imagem + '") >';
                produto += "<h1>" + nomeProduto + "</h1>";
                produto += "<img src='" + imagem + "'>";
                produto += "<div id='legenda'>";
                produto += "<p>ID:" + idProduto + "</p>";
                produto += "<p>R$" + preco + "</p>";
                produto += "</div>";
                produto += "</div>";

                allprodutos += produto;
                produto = '';

            }
            if (idProduto !== -1) {
                document.getElementById("auxProdutoId").value = idProduto; //o botao salvar recebe o valor do id para enviar para api
                document.getElementById("auxDiretorio").value = imagem; //o botao salvar recebe o valor do id para enviar para api
            } else
                alert("Ocorreu um erro, faça login novamente!");
            itens.innerHTML = allprodutos;
            allprodutos = '';

            carregapagina(0); //sem detalhes
        },
        error: function (jqXHR) {
            switch (jqXHR.status) {
                case 400:
                    alert("Erro ao carregar itens (400)");
                    window.location.href = "cadastrar_item.php";
                    break;
                case 404:
                    alert(jqXHR["responseJSON"]["message"]);
                    window.location.href = "cadastrar_item.php";
                    break;
                default:
                    alert("Erro no cadastro do(a)" + checkeds[i].diaSemana + ",tente novamente!");

            }
        }

    });
}


function verificaform() {
    var extensoes_permitidas = new Array(".png", ".jpg", ".jpeg");
    var input_file = $("#customFile").val();

    var detalhesnome = document.getElementById("detalhesnome");
    var detalhesdescricao = document.getElementById("detalhesdescricao");
    var detalhespreco = document.getElementById("detalhespreco");
    var categoria_produto = document.getElementById("categoria_produto");
    var subcategoria_produto = document.getElementById("subcategoria_produto");

    if (detalhesnome.value.substring(0, 1) == ' ') { //se o nome começar com estaço esta errado
        alert("O nome não pode começar com espaço!");
        detalhesnome.focus();
        return false;
    }
    if (detalhesnome.value.length < 1) { //se o nome começar com estaço esta errado
        alert("Preencha com um nome válido!");
        detalhesnome.focus();
        return false;
    }
    if (detalhesdescricao.value.substring(0, 1) == ' ') {
        alert("A descrição não pode começar com espaço! ! ");
        detalhesdescricao.focus();
        return false;
    }
    if (categoria_produto.value == '' || categoria_produto.value == '0') {
        alert("Selecione uma categoria !");
        categoria_produto.focus();
        return false;
    }

    if (input_file) {
        var extensao = (input_file.substring(input_file.lastIndexOf("."))).toLowerCase();
        //comprovo se a extensão está entre as permitidas
        var permitida = false;
        for (var i = 0; i < extensoes_permitidas.length; i++) {
            if (extensoes_permitidas[i] == extensao) {
                permitida = true;
                break;
            }
        }
        if (!permitida) {
            alert("Extensão da imagem não permitida ! \nSão válidos apenas os arquivos com extensões: " + extensoes_permitidas.join());
            customFile.focus();
            return false;
        } else {
            return true;
        }
    } else
        return true;


}


function EditarProduto(url2) {


    if (verificaform()) {
        let nome = document.getElementById("detalhesnome").value;
        let descricao = document.getElementById("detalhesdescricao").value;
        let preco_recebido = document.getElementById("detalhespreco").value;
        let categoria = document.getElementById("categoria_produto").value;
        let subcategoria = document.getElementById("subcategoria_produto").value;
        let idProduto = document.getElementById("auxProdutoId").value;
        let token = sessionStorage.getItem("token");


        let precoStr = preco_recebido.toString().replace(',', '.');
        let preco = parseFloat(precoStr);

        let url = sessionStorage.getItem("url");
        /* console.log("nome", nome);
         console.log("descricao", descricao);
         console.log("preco", preco);
         console.log("categoria", categoria);
         console.log("subcategoria", subcategoria);
         console.log("url", url);
         console.log("idProduto", idProduto);*/

        $.ajax({
            type: 'PUT',
            url: url + '/produto',
            headers: {
                "token": token,
            },
            data: {
                "nome": nome,
                "descricao": descricao,
                "preco": preco,
                "categoria": categoria, // padrao de dono
                "subcategoria": subcategoria,
                "url": url2,
                "idProduto": idProduto
            },
            success: function (data) {
                alert(data["message"]);
                location.reload();
            },
            error: function (jqXHR) {
                alert(jqXHR["responseJSON"]["message"]);
                carregapagina(2);
            }

        });

    } else {
        console.log("Erro no formulário!");
        carregapagina(2);
    }
}

function DeletarProduto() {
    if (confirm("Você realmente deseja realmente DELETAR esse produto?")) {
        let idProduto = document.getElementById("auxProdutoId").value;
        let token = sessionStorage.getItem("token");
        let url = sessionStorage.getItem("url");
        $.ajax({
            type: 'PUT',
            url: url + '/produto',
            headers: {
                "token": token,
            },
            data: {
                "deletado": 1,
                "idProduto": idProduto
            },
            success: function () {
                // alert(data["message"]);
                alert("Produto deletado!");
                window.location.reload();
            },
            error: function (jqXHR) {
                // console.log(jqXHR);
                switch (jqXHR.status) {
                    case 0:
                        alert("Sem conexão com a internet");
                        break;
                    case 404:
                        alert("Nenhuma categoria cadastrada, seja o primeiro a cadastrá-la!");
                        break;
                    default:
                        alert("Erro interno no servidor!");

                }
                // window.location.reload();
                carregapagina(0);
            }
        });
    }
}


function TrocaImagem(evt) {

    const compress = new Compress();
    const preview = document.getElementById('detalhesimagem');
    const files = [...evt.target.files];
    compress.compress(files, {
        size: 4, // the max size in MB, defaults to 2MB
        quality: 0.25, // the quality of the image, max is 1,
        maxWidth: 400, // the max width of the output image, defaults to 1920px
        maxHeight: 400, // the max height of the output image, defaults to 1920px
        resize: true // defaults to true, set false if you do not want to resize the image width and height
    }).then((images) => {

        const img = images[0];
        // returns an array of compressed images
        preview.src = `${img.prefix}${img.data}`


        //  console.log(img);
        // document.getElementById("enviaImg").submit();


    });

}

