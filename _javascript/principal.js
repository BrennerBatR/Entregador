var intervalo = 1000;
var timeout = 1;


setInterval(function () {
    let numero_pedidos = document.getElementById("num_pedidos").name;//eu salvo no name do link o numero de pedidos recebidos
    if (numero_pedidos != null && numero_pedidos != undefined && numero_pedidos > 0 )
        notificacao.style.display = "flex";
    else
        notificacao.style.display = "none";

}, intervalo);

function fechar() {
    document.getElementById("notificacao_row").style.visibility = "hidden";
}

function oculta_div() {
    var id = document.getElementById("oculta");

    if (window.screen.availWidth < 851 && id.style.visibility !== "hidden") {
        id.style.visibility = "hidden";


    } else {
        id.style.visibility = "visible";

    }

}


function verificatela() {
    contagemparacarregarpagina();
    if (window.screen.availWidth > 600) {
        document.getElementById("sidebar").className = " "; // se tiver class = "active" ele fica oculto !
    }
    estatisticas(moment());
}

function verpedidos(servername) {
    window.location.href = "http://" + servername + "/pedidos.php";
}


/*    $.ajax({
        type: 'GET',
        url: 'http://entregadordelivery.com.br:8080/subcategoria_produto',
        success: function (data) {
            for (var a = 0; data[a] != null; a++) { //enquanto nao terminar de ter resultados ele continua salvando nos vetores

                select += "<option id='subcategoria_' " + data[a].SCP_id + " value=" + data[a].SCP_id + ">" + data[a].SCP_nome + "</option>";


            }
            subcategoria.innerHTML = select;
            setTimeout(function () {
                carregapagina(1); //com detalhes
            }, 1000);
        }
    });
*/

function estatisticas(Data) {
    document.getElementById("avancar").style.visibility = "hidden";
    let idEmpresa = document.getElementById("auxEmpId").value;
    let dataAtual = moment().add('days', -1); //tiro um dia para se for o mesmo mes, nao dar maior!
    if (dataAtual > Data) { //se hoje for depois da data, entao o botao de adiantar aparece !
        document.getElementById("avancar").style.visibility = "visible";
    }
    var total_valor = document.getElementById("total_valor");
    var total_pedidos = document.getElementById("total_pedidos");
    var ticket = document.getElementById("ticket_medio");
    var feedback = document.getElementById("feedback");

    var mes = parseInt(Data.format("MM")); // posicao 0 é janeiro ! e no data.format ele trata janeiro como 1
    mes -= 1;
    var ano = Data.format("YYYY");

    var Nomemes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let tratarmes = (mes+1).toString();
    if (tratarmes.length == 1) {
        tratarmes = "0" + tratarmes;
    }
    let dateApi = ano + "-" + tratarmes; //YYYY-MM
    document.getElementById("mes").innerHTML = Nomemes[mes]; //pega a posicao do mes para imprimir na tela principals
    document.getElementById("ano").innerHTML = ano;
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");

    $.ajax({
        type: 'POST',
        url: url + '/estatistica_painel',
        data: {
            "status": 5,
            "data": dateApi
        },
        headers: {
            "token": token,
        },
        success: function (data) {
            if (data.dados.message === null || data.dados.message === undefined) {
                let preco_recebido = (data.dados.faturamentoTotal).toFixed(2);
                let preco_tratado = preco_recebido.toString().split(".");
                let ticket_Recebido = (data.dados.tickeMedio).toFixed(2);
                let ticket_tratado = ticket_Recebido.toString().split(".");


                if (preco_tratado[1] === undefined || preco_tratado[1] == null) {
                    preco_recebido += ",00";
                } else if (preco_tratado[1].length === 1) {
                    ticket_Recebido += "0";
                }
                if (ticket_tratado[1] === undefined || ticket_tratado[1] == null) {
                    ticket_Recebido += ",00";
                } else if (ticket_tratado[1].length === 1) {
                    ticket_Recebido += "0";
                }
                total_valor.innerHTML = preco_recebido.toString().replace(".", ",");
                total_pedidos.innerHTML = data.dados.numPedidos;
                ticket.innerHTML = ticket_Recebido.toString().replace(".", ",");
            }
            else{
                total_valor.innerHTML = "0";
                total_pedidos.innerHTML = "0";
                ticket.innerHTML = "0";
            }
            if (data.feedback.message === null || data.feedback.message === undefined) {
                 feedback.innerHTML = data.feedback.starsMedia;
            }
            else{
                feedback.innerHTML = "0";
            }


        },
        error: function (data) {
           // console.log("Erro!" , data);
        }
    });
    document.getElementById("total_valor").style.visibility = "visible"; //ate carregar os dados ele fica invisivel ( depois colcoar alguma animação !)
    document.getElementById("total_pedidos").style.visibility = "visible";
    document.getElementById("ticket_medio").style.visibility = "visible";
    document.getElementById("feedback").style.visibility = "visible";

    Contagem();

}


function Contagem() {
    setTimeout(function () {
        carregapagina()
    }, timeout);
}

function contagemparacarregarpagina() { //exibe a tela de carregando

    document.getElementById("oculta").style.display = "none";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("teto").style.display = "none";
    document.getElementById("carregando").style.display = "block";


}


function carregapagina() {  // tira a tela de carregamento

    document.getElementById("oculta").style.display = "flex";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("teto").style.display = "block";
    document.getElementById("carregando").style.display = "none";
}

var aux = 0; //variavel apra adiantar ou atrasar um mes

function voltar_mes() { //voltar 1 mes

    document.getElementById("total_valor").style.visibility = "hidden"; //ate carregar os dados ele fica invisivel ( depois colcoar alguma animação !)
    document.getElementById("total_pedidos").style.visibility = "hidden";
    document.getElementById("ticket_medio").style.visibility = "hidden";
    document.getElementById("feedback").style.visibility = "hidden";

    var DATAATUAL = moment();
    aux -= 1;
    var nova_data = DATAATUAL.add(aux, "months"); // 2018-02-26

    estatisticas(nova_data);
}

function avancar_mes() { //adiantar um mes
    document.getElementById("total_valor").style.visibility = "hidden"; //ate carregar os dados ele fica invisivel ( depois colcoar alguma animação !)
    document.getElementById("total_pedidos").style.visibility = "hidden";
    document.getElementById("ticket_medio").style.visibility = "hidden";
    document.getElementById("feedback").style.visibility = "hidden";
    var DATAATUAL = moment();
    aux += 1;
    var nova_data = DATAATUAL.add(aux, "months"); // 2018-02-26

    estatisticas(nova_data);
}