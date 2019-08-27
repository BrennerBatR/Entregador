
let  op = 2;
let url = (op=== 1) ?"http://localhost:8080" : "http://entregadordelivery.com.br:8080";

function cadastrar_empresa() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    $.ajax({
        type: 'POST',
        url: url+'/realizarlogin',
        data: {
            "email": email,
            "senha": senha
        },
        success: function (data) {
            insereSession(data);
        },
        error: function (jqXHR) {
            switch (jqXHR.status) {
                case 0:
                    alert("Sem conexão com a internet");
                    break;
                case 401:
                    alert("Erro no login!");
                    break;
                case 404:
                    alert("Usuário não cadastrado no sistema!");
                    break;
                case 501:
                    alert("Usuário/senha incorretos!");
                    break;
                default:
                    alert("Erro interno no servidor");

            }
           // window.location.reload();
        }
    });
}
function insereSession(data) {
    let token = data["token"];
    let categoria = data["data"].categoria;
    let nome = data["data"].nome;
    let nomeEmpresa = data["data"]["empresa"].nomeFantasia;
    let EMP_id = data["data"]["empresa"].idEmpresa;
    let login = data["data"].email;

    sessionStorage.setItem('EMP_id', EMP_id);
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('url', url);

    $.ajax({
        type: 'POST',
        url: '_PHP/Login.php',
        data: {
            "token": token,
            "categoria": categoria,
            "nome": nome,
            "nomeEmpresa": nomeEmpresa,
            "EMP_id": EMP_id,
            "login": login

        },
        success: function () {
            if (categoria <4){
               location.href = "pedidos.php"; //mudar para pedidos.php
            }
            else if(categoria === 10){
                location.href = "empresas.php";
            }
            else{
                location.href = "principal.php";
            }
        }
    });



}