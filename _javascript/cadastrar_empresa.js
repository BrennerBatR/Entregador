function verificatela() {
    document.getElementById("sidebar").style.opacity = 1; //quando enviar o form devo mostrar a div carregamento !
    document.getElementById("teto").style.opacity = 1;
    document.getElementById("formulario").style.display = "flex";
    document.getElementById("carregando").style.display = "none";

}


function oculta_div() {
    var id = document.getElementById("formulario");

    if (window.screen.availWidth < 851 && id.style.visibility != "hidden") {
        id.style.visibility = "hidden";


    } else {
        id.style.visibility = "visible";

    }

}


function verificaNome(nome) {

    var tecla = (window.event) ? event.keyCode : e.which;

    if (nome.value.length > 100) {

        return false;
    }


}


function cadastrar_empresa(cnpj) {
    let porcentagemVal = document.getElementById("porcentagemVal").value;
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");
    $.ajax({
        type: 'POST',
        url: url + '/empresa',
        headers: {
            "token": token,
        },
        data: {
            "cnpj": cnpj,
            "logo": "http://google.com",
            "tipo_filiacao": porcentagemVal

        },
        success: function (data) {
            alert(data["message"]);
            document.getElementById("idEmpresa").value = data["idEmpresa"];
            carregapagina();
            //location.href='principal.php';
        },
        error: function (jqXHR) {
           // console.log("erro", jqXHR);
            switch (jqXHR.status) {
                case 0:
                    alert("Sem conexão com a internet");

                    break;
                case 400:
                    alert(jqXHR.responseJSON["message"]);
                    window.location.reload();

                    break;
                case 401:
                    alert(jqXHR.responseJSON["message"]);
                    window.location.reload();

                    break;
                case 403:
                    alert(jqXHR.responseJSON["message"]);
                    if (confirm( "Deseja cadastrar a empresa MANUALMENTE?"))
                        DisplayManual();
                    else
                        window.location.reload();
                    break;
                case 500:
                    if (confirm("Erro interno no servidor, deseja cadastrar a empresa MANUALMENTE?"))
                        DisplayManual();
                    else
                        window.location.reload();
                    break;
                default:
                    break;
            }


        }
    });

}

function cadastrar_dono() {
    let token = sessionStorage.getItem("token");
    var cpf = document.getElementById("cpf").value;
    var nome = document.getElementById("nome").value;
    var data_recebida = document.getElementById("data_nasc").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    //var senha = document.getElementById("senha").value;
    var senha = "iBCytpSPOGcj7H6"; // senha padrao
    let idEmpresa = document.getElementById('idEmpresa').value;

    var dataTratada = moment(data_recebida, "DD/MM/YYYY");
    var nasc = dataTratada.format("YYYY-MM-DD");

    let url = sessionStorage.getItem("url");
    $.ajax({
        type: 'POST',
        url: url + '/criarcontaempresa/' + idEmpresa,
        headers: {
            "token": token,
        },
        data: {
            "cpf": cpf,
            "nome": nome,
            "nasc": nasc,
            "celular": celular,
            "categoria": 4, // padrao de dono
            "email": email,
            "senha": senha
        },
        success: function (data) {
            alert(data["message"]);
            location.href = 'principal.php'
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
        }

    });


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
        document.getElementById("nomefile").innerHTML = nome_arquivo;
    }

}

function verificaForm() {

    let cnpj = document.getElementById("cnpj");
    if (cnpj.value.length !== 14) {
        alert("Digite um cnpj válido! (14 digitos)");
        cnpj.value = "";
        cnpj.focus();

    } else {
        contagemparacarregarpagina();
        cadastrar_empresa(cnpj.value);
    }
}


function contagemparacarregarpagina() { //exibe a tela de carregando

    document.getElementById("formulario").style.display = "none";
    document.getElementById("formularioManual").style.display = "none";
    document.getElementById("carregando").style.display = "block";


}


function carregapagina() {
    document.getElementById("formulario").style.display = "flex";
    document.getElementById("formularioManual").style.display = "none";
    document.getElementById("parte1").style.display = "none";
    document.getElementById("parte2").style.display = "grid";
    document.getElementById("carregando").style.display = "none";

}

function formapag(id) {
    if (id === "porcentagem") {
        let mensalidade = document.getElementById("mensalidade");
        mensalidade.checked = false;
    } else {
        let porcentagem = document.getElementById("porcentagem");
        porcentagem.checked = false;
    }

}

function DisplayManual() {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("carregando").style.display = "none";
    document.getElementById("formularioManual").style.display = "flex";
}


function verificaFormManual() {
    let cnpj = document.getElementById("cnpj");
    if (cnpj.value.length !== 14) {
        alert("Digite um cnpj válido! (14 digitos)");
        cnpj.value = "";
        cnpj.focus();

    } else {
        contagemparacarregarpagina();
        cadastrar_empresa(cnpj.value);
    }
}

function CadastrarEmpresaManual() {

    let cnpj = document.getElementById("cnpjManual").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let fantasia = document.getElementById("nomeFantasia").value;
    let capital_social = document.getElementById("capital_social").value;
    let nome = document.getElementById("nomeManual").value;
    let tipo = document.getElementById("tipo").value;
    let porte = document.getElementById("porte").value;
    let abertura = document.getElementById("abertura").value;
    let natureza_juridica = document.getElementById("natureza").value;
    let status = document.getElementById("status").value;
    let atv_principal = document.getElementById("principal").value;
    let data_situacao = document.getElementById("data_situacao").value;
    let logo = "http://google.com".value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let bairro = document.getElementById("bairro").value;
    let rua = document.getElementById("rua").value;
    let estado = document.getElementById("estado").value;
    let complemento = document.getElementById("complemento").value;
    let numero = document.getElementById("numero").value;
    let tipo_filiacao = document.getElementById("tipo_filiacao").value;
    let apelido = document.getElementById("apelido").value; //falta api

    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");

   $.ajax({
        type: 'POST',
        url: url + '/empresamanual',
        headers: {
            "token": token,
        },
        data: {
            "dados":{
                "cnpj": cnpj,
                "telefone": telefone,
                "email": email,
                "fantasia": fantasia,
                "capital_social":capital_social,
                "nome":nome ,
                "tipo": tipo,
                "situacao":"OK" ,
                "porte": porte,
                "abertura": abertura,
                "natureza_juridica":natureza_juridica ,
                "status": status,
                "atv_principal":atv_principal,
                "data_situacao":data_situacao,
                "logo": logo,
                "tipo_filiacao" : tipo_filiacao
            },
            "endereco" :{
                "cep" : cep,
                "cidade" : cidade,
                "bairro" : bairro,
                "rua" : rua,
                "estado" : estado,
                "complemento" : complemento,
                "numero" :numero ,
            }
        },
        success: function (data) {
            alert(data["message"]);
            document.getElementById("idEmpresa").value = data["idEmpresa"];
            carregapagina();
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
        }

    });


    //carregapagina();

}
