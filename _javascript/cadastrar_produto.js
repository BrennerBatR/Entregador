function oculta_div() {
    var id = document.getElementById("formulario");

    if (window.screen.availWidth < 851 && id.style.visibility != "hidden") {
        id.style.visibility = "hidden";
    } else {
        id.style.visibility = "visible";
    }

}

$(document).ready(function (e) {
    $("#enviaImg").on('submit', (function (e) {
        let idProduto = document.getElementById("auxProdutoId").value;
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
                if (json['success'] < 0) {
                    console.log(data);
                    alert('Erro no upload da imagem. Você pode colocá-la na página "Ver itens"!');
                    location.reload();

                } else {
                    updateUrl(json["url"], idProduto)
                }

            },
            error: function ()   // A function to be called if request succeeds
            {
                alert("Erro de urpload");
            }
        });
    }))
});


function updateUrl(url2, idProduto) {
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");

    $.ajax({
        type: 'PUT',
        url: url + '/produto',
        headers: {
            "token": token,
        },
        data: {
            "url": url2,
            "idProduto": idProduto
        },
        success: function () {
            alert("Produto cadastrado com sucesso!");
            location.reload();
        },
        error: function (jqXHR) {
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
            carregapagina();
        }

    });
}


function verificaform() {
    let rads = document.getElementsByName("radiotam");
    let tamanho = "";

    for (let i = 0; i < rads.length; i++) {
        if (rads[i].checked) {
            tamanho = rads[i].value;
        }
    }

    let nome = document.getElementById("nome");
    let descricao = document.getElementById("descricao");
    let preco = document.getElementById("preco");
    let categoria = document.getElementById("categoria_produto");
    let subcategoria = document.getElementById("subcategoria_produto");
    let estoque = document.getElementById("estoque");

    let imagem = $("#customFile");
    let arquivo = imagem.val();
    let extensoes_permitidas = new Array(".png", ".jpg", ".jpeg");
    //var meuerro = ""; vou usars para escrever na div
    if (nome.value == '' || nome.value.substring(0, 1) == ' ') { //se o nome começar com estaço esta errado
        alert("Escreva o nome !");
        nome.focus();
        return false;

    } else {
        for (var j = 0; j < nome.value.length; j++) {
            if (nome.value[j] == "<" || nome.value[j] == ">") {
                alert("Caracter inválido no nome: " + nome.value[j]);
                return false;
            }
        }
    }
    if (descricao.value == '' || descricao.value.substring(0, 1) == ' ') {
        alert("Escreva a descrição ! ");
        descricao.focus();
        return false;

    } else {
        for (var j = 0; j < descricao.value.length; j++) {
            if (descricao.value[j] == "<" || descricao.value[j] == ">") {
                alert("Caracter inválido na descrição: " + descricao.value[j]);
                return false;
            }
        }
    }

    if (categoria.value == '' || categoria.value == 0) {
        alert("Selecione uma categoria ! ");
        categoria.focus();
        return false;

    }
    if (subcategoria.value == '' || subcategoria.value == 0) {
        alert("Selecione uma subcategoria ! ");
        subcategoria.focus();
        return false;

    }

    if (preco.value == '' || preco.value.length < 3) {
        alert("Escreva um preço válido! Formato : 0.00");
        preco.focus();
        return false;

    }


    if (!arquivo) { //Se não tenho arquivo, é porque não se selecionou um arquivo no formulário.
        alert("Selecione uma imagem");
        imagem.focus();
        return false;
    } else {
        //recupero a extensão deste nome de arquivo
        var extensao = (arquivo.substring(arquivo.lastIndexOf("."))).toLowerCase();
        //comprovo se a extensão está entre as permitidas
        var permitida = false;
        for (var i = 0; i < extensoes_permitidas.length; i++) {
            if (extensoes_permitidas[i] == extensao) {
                permitida = true;
                break;
            }
        }
        if (!permitida) {
            alert("Extensão da imagem não permitida ! \nSão válidos apenas os arquivos com extensões: " + extensoes_permitidas.join())
            form.customFile.focus();
            return false;
        } else {
            //submeto!
            contagemparacarregarpagina();
            //formulario.submit();
            return true;
        }
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


function verificatela() {
    contagemparacarregarpagina();
    buscarcategorias(); //preencher com os valores cadastrados no banco de categoria_produto
    buscarsubcategorias();


}


function verificaExtensao($input) {
    var extPermitidas = ["png", "jpg", "jpeg"];
    var extArquivo = $input.value.split('.').pop();
    var size = $input.files[0].size;

    if (typeof extPermitidas.find(function (ext) {
        return extArquivo == ext;
    }) == 'undefined') {
        alert('Extensão "' + extArquivo + '" não permitida!');
        $input.value = '';
    } else if (size > 5097152) { //1MB
        alert('Tamanho da imagem não permitida (Máx 4.5 Mb)'); //Acima do limite
        $input.value = ''; //Limpa o campo
    } else {
        var nome_arquivo = $($input).val().split("\\").pop();
        var quebraNome = nome_arquivo.substring(0, 8);
        document.getElementById("nomefile").innerHTML = quebraNome + "... ." + extArquivo;
    }

}

function buscarcategorias() {
    let token = sessionStorage.getItem("token");
    var categoria = document.getElementById("categoria_produto");
    var select = '<option value = 0 selected disabled>Selecione uma opção: </option>'
    let url = sessionStorage.getItem("url");

    $.ajax({
        type: 'GET',
        url: url + '/categoria_produto',
        headers: {
            "token": token,
        },
        success: function (data) {
            for (var a = 0; data[a] != null; a++) { //enquanto nao terminar de ter resultados ele continua salvando nos vetores
                select += "<option  id='categoria_' " + data[a].CAP_id + " value=" + data[a].CAP_id + ">" + data[a].CAP_nome + "</option>";
            }
            categoria.innerHTML = select;
        },
        error: function (jqXHR) {
            switch (jqXHR.status) {
                case 0:
                    alert("Sem conexão com a internet");
                    break;
                case 404:
                    alert("Nenhuma categoria cadastrada, seja o primeiro a cadastrá-la!");
                    break;
                default:
                    alert("Erro interno no servidor");

            }
            // window.location.reload();
        }
    });
}

function buscarsubcategorias() {
    let token = sessionStorage.getItem("token");
    var subcategoria = document.getElementById("subcategoria_produto");
    var select = '<option value = 0 selected disabled>Selecione uma opção: </option>'
    let url = sessionStorage.getItem("url");

    $.ajax({
        type: 'GET',
        url: url + '/subcategoria_produto',
        headers: {
            "token": token,
        },
        success: function (data) {
            for (var a = 0; data[a] != null; a++) { //enquanto nao terminar de ter resultados ele continua salvando nos vetores

                select += "<option id='subcategoria_' " + data[a].SCP_id + " value=" + data[a].SCP_id + ">" + data[a].SCP_nome + "</option>";


            }
            subcategoria.innerHTML = select;
            setTimeout(function () {
                carregapagina(1); //com detalhes
            }, 1000);
        },
        error: function (jqXHR) {
            // console.log("ERRO : ", jqXHR.status);
            switch (jqXHR.status) {
                case 0:
                    alert("Sem conexão com a internet");
                    break;
                case 404:
                    alert("Nenhuma subcategoria cadastrada, seja o primeiro a cadastrá-la!");
                    setTimeout(function () {
                        carregapagina(1); //com detalhes
                    }, 1000);
                    break;
                default:
                    alert("Erro interno no servidor");

            }
            // window.location.reload();
        }
    });

}

function CadastrarProduto() {

    if (verificaform()) {
        let nome = document.getElementById("nome").value;
        let descricao = document.getElementById("descricao").value;
        let preco = document.getElementById("preco").value;
        let categoria = document.getElementById("categoria_produto").value;
        let subcategoria = document.getElementById("subcategoria_produto").value;
        let idEmpresa = sessionStorage.getItem("EMP_id");
        let token = sessionStorage.getItem("token");
        let url = sessionStorage.getItem("url");
        /*console.log("nome", nome);
        console.log("descricao", descricao);
        console.log("preco", preco);
        console.log("categoria", categoria);
        console.log("subcategoria", subcategoria);
        console.log("url", url);
        console.log("idEmpresa", idEmpresa);*/
        $.ajax({
            type: 'POST',
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
                "url": "semurl",
                "id_empresa": idEmpresa
            },
            success: function (data) {
                //alert(data["message"]);
                // console.log(data);
                document.getElementById("auxProdutoId").value = data["id"];
                document.getElementById("enviarForm").click(); //clica no botao para enviar para o form

                //location.reload();
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
                window.location.reload();
            }

        });
    } else
        console.log("Erro no formulário!");


}

function contagemparacarregarpagina() {
    var sidebar = document.getElementById("sidebar"); //quando enviar o form devo mostrar a div carregamento !
    var teto = document.getElementById("teto");
    var formulario_ocultar = document.getElementById("formulario");
    var carregamento = document.getElementById("carregando");
    formulario_ocultar.style.display = "none";
    carregamento.style.display = "block";
    sidebar.style.opacity = 0.5;
    teto.style.opacity = 0.5;
}

function carregapagina() {
    var sidebar = document.getElementById("sidebar"); //quando enviar o form devo mostrar a div carregamento !
    var teto = document.getElementById("teto");
    var formulario_ocultar = document.getElementById("formulario");
    var carregamento = document.getElementById("carregando");

    formulario_ocultar.style.display = "flex";
    carregamento.style.display = "none";
    sidebar.style.opacity = 1;
    teto.style.opacity = 1;

}

function criarcategoria() {
    let nome = document.getElementById("nomecategoria").value;
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");

    $.ajax({
        type: 'POST',
        url: url + '/categoria_produto',
        headers: {
            "token": token,
        },
        data: {
            "categoria": nome

        },
        success: function (data) {
            alert(data.message);
            window.location.reload();
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
            // window.location.reload();
        }

    });
}


function criarsubcategoria() {
    let nome = document.getElementById("nomesubcategoria").value;
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");

    $.ajax({
        type: 'POST',
        url: url + '/subcategoria_produto',
        headers: {
            "token": token,
        },
        data: {
            "categoria": nome
        },
        success: function (data) {
            alert(data.message);
            window.location.reload();
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

function exibeTamanhos(check) {
    if (check)
        document.getElementById("tamanhos").style.display = "inline-flex";
    else
        document.getElementById("tamanhos").style.display = "none";


}