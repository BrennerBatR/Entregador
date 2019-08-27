function loadingPage() {
    Usuarios();
    buscarcategoriaUsuario();
    buscaempresas();
}

function Usuarios() {
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");

    $.ajax({
        type: 'GET',
        url: url + '/usuarios',
        headers: {
            "token": token,
        },
        success: function (data) {
            Table(data);

        },
        error: function () {
            alert("ERRO ao conectar, se persistir informe o suporte!");
        }
    });
}

function Table(json) {
    //console.log("USUARIOS",json);
    let t = $('#table').DataTable();
    for (let i = 0; i < json.length; i++) {
        // let optional = (json[i]['mat_optional']).toString();
        // let addMat = "<img  style='cursor: pointer' src='images/add2.png' alt='adicionar materia' title='Adicionar matéria' id='" + json[i]['mat_id'] + "' onclick='AddMatter(this.id)'>";
        t.row.add([
            json[i]['idUser'],
            json[i]['cpf'],
            json[i]['nome'],
            json[i]['email'],
            json[i]['categoria']
            // addMat
        ]).draw(false);
    }
}


function criarusuario() {
    let token = sessionStorage.getItem("token");
    let cpf = document.getElementById("cpf").value;
    let nome = document.getElementById("nome").value;
    let data_recebida = document.getElementById("nasc").value;
    let celular = document.getElementById("celular").value;
    let email = document.getElementById("email").value;
    let senha = "iBCytpSPOGcj7H6"; // senha padrao
    let idEmpresa = document.getElementById("empresa").value;
    let categoria = document.getElementById("categoria_usuario").value;

    let dataTratada = moment(data_recebida, "DD/MM/YYYY");
    let nasc = dataTratada.format("YYYY-MM-DD");
   // alert(nasc);
    let url = sessionStorage.getItem("url");

    if(categoria != 0) {
        if (categoria == 3 || categoria == 4) { //cadastrar em alguma empresa
            if (idEmpresa != 0) {
                contagemparacarregarpagina();
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
                        "categoria": categoria, // padrao de dono
                        "email": email,
                        "senha": senha
                    },
                    success: function (data) {
                        alert(data["message"]);
                        location.href = 'criar_usuario_adm.php'
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
                        //window.location.reload();
                    }
                });
            } else {
                alert("Selecione uma empresa !");
            }
        } else { //nao precisa da empresa
            contagemparacarregarpagina();
            let url = sessionStorage.getItem("url");
            $.ajax({
                type: 'POST',
                url: url + '/criarconta',
                data: {
                    "cpf": cpf,
                    "nome": nome,
                    "nasc": nasc,
                    "celular": celular,
                    "categoria": categoria,
                    "email": email,
                    "senha": senha
                },
                success: function (data) {
                    alert(data["message"]);
                    location.href = 'criar_usuario_adm.php'
                },
                error: function (jqXHR) {
                    switch (jqXHR.status) {
                        case 0:
                            alert("Sem conexão com a internet");
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
                    location.href = 'criar_usuario_adm.php'
                }


            });
        }
    }
    else{
        alert("Selecione uma categoria !");
    }

}


function buscarcategoriaUsuario() {
    let token = sessionStorage.getItem("token");
    var categoria = document.getElementById("categoria_usuario");
    var select = '<option value = 0 selected disabled>Selecione uma opção: </option>'
    let url = sessionStorage.getItem("url");
    $.ajax({
        type: 'GET',
        url: url + '/categoria_usuario',
        headers: {
            "token":token,},
        success: function (data) {
            for (var a = 0; data[a] != null; a++) { //enquanto nao terminar de ter resultados ele continua salvando nos vetores
                select += "<option  id='categoria_' " + data[a].CAU_id + " value=" + data[a].CAU_id + ">" + data[a].CAU_nome + "</option>";
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


function buscaempresas() {
    let token = sessionStorage.getItem("token");
    var empresa = document.getElementById("empresa");
    var select = '<option value = 0 selected disabled>Selecione uma opção: </option>'
    let url = sessionStorage.getItem("url");

    $.ajax({
        type: 'GET',
        url: url + '/empresas',
        headers: {
            "token":token,},
        success: function (data) {

            for (var a = 0; data[a] != null; a++) { //enquanto nao terminar de ter resultados ele continua salvando nos vetores
                select += "<option  id='empresa_' " + data[a].idEmpresa + " value=" + data[a].idEmpresa + ">" + data[a].idEmpresa+ " - " + data[a].nomeFantasia + "</option>";
            }
            empresa.innerHTML = select;
        },
        error: function (jqXHR) {
            switch (jqXHR.status) {
                case 0:
                    alert("Sem conexão com a internet");
                    break;
                case 404:
                    alert("Nenhuma empresa cadastrada!");
                    break;
                default:
                    alert("Erro interno no servidor");

            }
            // window.location.reload();
        }
    });
}







function verificaempresa(categoria) {
    let divempresas = document.getElementById("divempresa");

    if(categoria == 3 || categoria == 4) {
        divempresas.style.display = "block";
    }
    else{
        divempresas.style.display = "none";
    }
}


function contagemparacarregarpagina() { //exibe a tela de carregando

    document.getElementById("criarusuario").style.display = "none";
    document.getElementById("corpoTable").style.display = "none";
    document.getElementById("carregando").style.display = "block";
    //carregapagina();

}


/*function carregapagina() {

   // document.getElementById("criarusuario").style.display = "grid";
    document.getElementById("corpoTable").style.display = "block";
    document.getElementById("carregando").style.display = "none";

}*/


