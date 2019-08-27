
function carregapagina() {

    document.getElementById("sidebar").style.opacity = 1;
    document.getElementById("teto").style.opacity = 1;
    document.getElementById("formulario2").style.display = "flex";
    document.getElementById("carregando").style.display = "none";


}

function oculta_div() {
    var id = document.getElementById("formulario2");

    if (window.screen.availWidth < 851 && id.style.visibility !== "hidden") {
        id.style.visibility = "hidden";
    }
    else {
        id.style.visibility = "visible";
    }
}

function verificaNome(nome) {

    var tecla = (window.event) ? event.keyCode : e.which;

    if (nome.value.length > 100) {

        return false;
    }

}

function cadastrar_usuario() {
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");
    var cpf = document.getElementById("cpf").value;
    var nome = document.getElementById("nome").value;
    var data_recebida = document.getElementById("data_nasc").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    //var senha = document.getElementById("senha").value;
    var senha = "iBCytpSPOGcj7H6"; // senha padrao
    //var categoria = document.getElementById("categoria_usuario").value;
    contagemparacarregarpagina();
    var dataTratada = moment(data_recebida, "DD/MM/YYYY");
    var nasc = dataTratada.format("YYYY-MM-DD");

    $.ajax({
        type: 'POST',
        url: url +'/criarcontaempresa',
        headers: {
            "token": token,
        },
        data:{	"cpf" : cpf,
            "nome" : nome,
            "nasc" : nasc,
            "celular" : celular,
            "categoria" : 3,
            "email" :  email,
            "senha" : senha},
        success: function (data) {
            alert(data["message"]);
            window.location.reload();
        },
        error: function () {
            alert("Erro no cadastro! Tente novamente.");
            location.reload();

        }
    });


   //falta fazer usuario_empresa

}


function contagemparacarregarpagina() { //exibe a tela de carregando

    document.getElementById("sidebar").style.opacity = 1;
    document.getElementById("teto").style.opacity = 1;
    document.getElementById("formulario2").style.display = "none";
    document.getElementById("carregando").style.display = "block";


}

/*
function busca_categorias(cat) {
    contagemparacarregarpagina();
    var categoria = document.getElementById("form-categoria");
    var select = "<label for='nome'>Categoria do usuário:</label><select id='categoria_usuario' name='categoria_usuario' class='form-control'  required><option value='' selected>Selecione uma categoria...</option>"
    var data = '';
    var enviarparaphp = "categoria="+cat;
    var buscar_categorias = new XMLHttpRequest();
    buscar_categorias.open('POST', '_php/Categoria_usuario.php', true);
    buscar_categorias.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    buscar_categorias.send(enviarparaphp);

    buscar_categorias.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) { //PAREIAQUI(PHP RETORNA CERTO)
            data = JSON.parse(this.responseText); //aqui pega o retorno do ECHO  do php
            for (var a = 0; data[a] != null; a++) { //enquanto nao terminar de ter resultados ele continua salvando nos vetores
                select += "<option id='categoria_' "+ data[a].CAU_id + " value=" + data[a].CAU_id + ">" + data[a].CAU_nome + "</option>";
            }
            select += "</select>";
            categoria.innerHTML = select;
        }
    carregapagina();
    }
}*/
