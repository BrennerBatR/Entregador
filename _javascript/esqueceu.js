

function sendEmail() {
    contagemparacarregarpagina();
    let email = document.getElementById("email").value;
    let url = sessionStorage.getItem("url");

    $.ajax({
        type: 'GET',
        url: url + '/recuperarsenha/' + email,
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
                    alert("Email não cadastrado no sistema!");
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
            window.location.href = "index.html";
            //carregapagina();
        }

    });
}

function contagemparacarregarpagina() { //exibe a tela de carregando
    document.getElementById("digitar").style.display = "none";
    document.getElementById("carregando").style.display = "block";

}