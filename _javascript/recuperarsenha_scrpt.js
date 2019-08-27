//CRIAR SENHA E REDEFINIR USAM ESSE JS E O CSS

function verificasenha(){
    let senha1 = document.getElementById("senha1");
    let senha2 = document.getElementById("senha2");

   if(senha1.value.length < 6 || senha2.value.length < 6 ){
       alert("Senha precisa ser maior que 6 caracteres!");
       b.senha1.value = b.senha.value = "";
       b.senha1.focus();
       return false;
   }
   else if(senha1.value !== senha2.value){
       alert("Senhas digitadas são diferentes !");
       b.senha1.value = b.senha.value = "";
       b.senha1.focus();
       return false;
   }
   else {
       contagemparacarregarpagina();
       SendApiTrocaSEnha(senha1.value)
   }
}

function SendApiTrocaSEnha(senha) {
    let token = document.getElementById("token").value;
    let url = "http://entregadordelivery.com.br:8080";
    $.ajax({
        type: 'POST',
        url: url + '/trocarsenha',
        headers: {
            "token":token,},
        data: {
            "senha":senha
        },
        success: function (data) {
            alert(data.message);
            window.location.href = "index.html";
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
                case 404:
                    alert("E-mail não encontrado!");
                    break;
                default:
                    alert("Erro interno no servidor");
            }
            carregapagina();
            // window.location.reload();
        }


    });
}
function contagemparacarregarpagina() { //exibe a tela de carregando

    document.getElementById("login").style.display = "none";
    document.getElementById("carregando").style.display = "block";


}


function carregapagina() {

    document.getElementById("login").style.display = "none";
    document.getElementById("carregando").style.display = "block";

}