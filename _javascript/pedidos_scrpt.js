var clique = false;
var objeto = "";
var intervalo = 6000;
var html = "";
let NumeroPedidosAnt = "";
var filtro = -1; //filtro = 0(não lidos) , 1 (recebido) , 2 (em andamento) , 3 (enviado) else = todos

function alterafiltro(op) {
  contagemparacarregarpagina();
  Pedidos();
  filtro = op;
}

function CarregarPrimeiravez() {
  //primeira vez q carrega a
  contagemparacarregarpagina();
  Pedidos();
  setTimeout(function () {
    NumeroPedidosAnt = document.getElementById("num_pedidos").name; // preciso esperar pegar o valor certo
  }, 100);
}

setInterval(function () {
  let NumeroPedidosATUAL = document.getElementById("num_pedidos").name;
  //console.log("ANT = " + NumeroPedidosAnt + "   ATUAL = " +  NumeroPedidosATUAL);
  if (NumeroPedidosAnt === undefined || NumeroPedidosAnt === null)
    NumeroPedidosAnt = 0;
  if (NumeroPedidosATUAL !== NumeroPedidosAnt) {
    //so vou chamar se mudou o numero ant para o atual! (ou quando tiver alguma iteração)
    NumeroPedidosAnt = NumeroPedidosATUAL;
    Pedidos();
  }
}, intervalo);

function oculta_div() {
  var id = document.getElementById("pagina");
  var filtro = document.getElementById("filtros");
  if (clique == false) {
    id.style.width = 1300 + "px"; //se tiver na tela grande, ele n faz o "wrap" com os items dentro da div !
    filtro.style.width = 1300 + "px";
    clique = true;
  } else {
    id.style.width = 100 + "%"; //se tiver na tela grande, ele n faz o "wrap" com os items dentro da div !
    filtro.style.width = 100 + "%";
    clique = false;
  }

  if (window.screen.availWidth < 851 && id.style.visibility != "hidden") {
    id.style.visibility = "hidden";
  } else {
    id.style.visibility = "visible";
  }
}

//setInterval(function () {
function Pedidos() {
  let token = sessionStorage.getItem("token");
  let dateTime = new Date();
  //let date  = moment(dateTime).format("YYYY-MM-DD");

  let dateNow = moment(); //envio a data de hj
  //dateNow = dateNow.add(1, 'days');

  let date = dateNow.format("YYYY-MM-DD");
  let pagina = "";
  let dataehorarecebida = "";
  let hora = "";
  let datarecebida = " ";
  let url = sessionStorage.getItem("url");

  const data = [
    {
      idPedido: 1,
      idStatusPedido: 1,
      dataCriacao: "2000-01-01T01:00:00",
      obs: "Tirar mock",
      precoTotal: "1.00",
      infoEntrega: {
        cartao: 1,
        precoTroco: "0",
        endereco: {
          bairro: "Bairro mock",
          cidade: "City",
          complemento: "complemento",
          rua: "Rua Mock",
          cep: "12345876",
          numero: 123,
        },
        infoCliente: {
          nome: "Nome mock",
          celular: "31975129368",
        },
      },
      produtos: [
        {
          qtdPedidoProduto: 1,
          nomeProduto: "Produto 1",
        },
      ],
    },
    {
      idPedido: 2,
      idStatusPedido: 2,
      dataCriacao: "2000-01-01T01:00:00",
      obs: null,
      precoTotal: "1.00",
      infoEntrega: {
        cartao: 1,
        precoTroco: "0",
        endereco: {
          bairro: "Bairro mock",
          cidade: "City",
          complemento: "complemento",
          rua: "Rua Mock",
          cep: "12345876",
          numero: 123,
        },
        infoCliente: {
          nome: "Nome mock",
          celular: "31975129368",
        },
      },
      produtos: [
        {
          qtdPedidoProduto: 4,
          nomeProduto: "Produto 2",
        },
      ],
    },
    {
      idPedido: 3,
      idStatusPedido: 3,
      dataCriacao: "2000-01-01T01:00:00",
      obs: null,
      precoTotal: "2.00",
      infoEntrega: {
        cartao: 0,
        precoTroco: "0",
        endereco: {
          bairro: "Bairro mock",
          cidade: "City",
          complemento: "complemento",
          rua: "Rua Mock",
          cep: "12345876",
          numero: 123,
        },
        infoCliente: {
          nome: "Nome mock",
          celular: "31975129368",
        },
      },
      produtos: [
        {
          qtdPedidoProduto: 1,
          nomeProduto: "Produto 3.1",
        },
        {
          qtdPedidoProduto: 8,
          nomeProduto: "Produto 3.2",
        },
        {
          qtdPedidoProduto: 2,
          nomeProduto: "Produto 3.4",
        },
      ],
    },
    {
      idPedido: 4,
      idStatusPedido: 4,
      dataCriacao: "2000-01-01T01:00:00",
      obs: null,
      precoTotal: "2.00",
      infoEntrega: {
        cartao: 0,
        precoTroco: "0",
        endereco: {
          bairro: "Bairro mock",
          cidade: "City",
          complemento: "complemento",
          rua: "Rua Mock",
          cep: "12345876",
          numero: 123,
        },
        infoCliente: {
          nome: "Nome mock",
          celular: "31975129368",
        },
      },
      produtos: [
        {
          qtdPedidoProduto: 1,
          nomeProduto: "Produto 4.1",
        },
        {
          qtdPedidoProduto: 2,
          nomeProduto: "Produto 4.2",
        },
        {
          qtdPedidoProduto: 3,
          nomeProduto: "Produto 4.4",
        },
      ],
    },
  ]; //tira a mensagem de nenhum pedido recebido
  /*  $.ajax({
    type: "GET",
    url: url + "/pedidos_empresa/0/100/" + date,
    headers: {
      token: token,
    },
    success: function (data) {
      //console.log(data);
      if (data.auth === false) {
        alert(data.message);
      } else {
        if (data.message === null || data.message === undefined) {
          //se nao tem mensaggem tem pedidos!
          document.getElementById("nenhum").style.display = "none"; */ for (
    var a = 0;
    data[a] != null;
    a++
  ) {
    //enquanto nao terminar de ter resultados ele continua salvando nos vetores
    html = ""; //zera a variavel html
    let id = data[a].idPedido;
    let status_pedido = data[a].idStatusPedido;
    let bairro = data[a].infoEntrega.endereco.bairro;
    let cidade = data[a].infoEntrega.endereco.cidade;
    let nome = data[a].infoEntrega.infoCliente.nome;
    let telefone = data[a].infoEntrega.infoCliente.celular;

    let complemento = data[a].infoEntrega.endereco.complemento;
    let rua = data[a].infoEntrega.endereco.rua;
    let cep = data[a].infoEntrega.endereco.cep;
    let numero = data[a].infoEntrega.endereco.numero;
    //let numero = "sem NUMERO!";
    let dataehorarecebida = data[a].dataCriacao;
    //let motoqueiro_nome = data[a].infoEntrega.infoEntregador.nome;
    let obs = data[a].obsPedido;
    let preco_recebido = data[a].precoTotal;
    let troco_recebido = data[a].infoEntrega.precoTroco; //falta
    let cartao = data[a].infoEntrega.cartao;

    if (obs === null || obs === undefined) obs = "Nenhuma observação";

    let preco_tratado = preco_recebido.toString().split(".");

    if (preco_tratado[1] == undefined || preco_tratado[1] == null) {
      preco_recebido += ",00";
    } else if (preco_tratado[1].length == 1) {
      preco_recebido += "0";
    }
    if (troco_recebido != null && troco_recebido != undefined) {
      let troco_tratado = troco_recebido.toString().split(".");
      if (troco_tratado[1] == undefined || troco_tratado[1] == null) {
        troco_recebido += ",00";
      } else if (troco_tratado[1].length == 1) {
        troco_recebido += "0";
      }
    }

    let DateTime = moment(dataehorarecebida, "YYYY-MM-DDThh:mm:ss");
    let preco = preco_recebido.toString().replace(".", ",");
    let troco = troco_recebido.toString().replace(".", ",");

    hora = DateTime.format("LTS");
    datarecebida = DateTime.format("DD/MM/YYYY");

    //esses if's verificam se o status é em andamento ou enviado para mudar a cor do pedido !

    if (status_pedido == 2 && (filtro == 1 || filtro == -1)) {
      //precisa desse para deixar marcado o "recebido" cor laranja

      html +=
        "<div id = pedido" +
        id +
        " class = 'container flex'  style= 'border : 5px solid #FF6F00' > ";
      html +=
        "<div class='item flex-item-1' id='titulo'><h1 id='titulopedido" +
        id +
        "' style='color : #FF6F00'>Pedido " +
        id;

      html +=
        "</h1><img id='fechar" +
        id +
        "' class='fechar' src='_imagens/X.png' alt='fechar' title='Fechar pedido' onclick = 'fecharpedido(" +
        id +
        ",1," +
        status_pedido +
        ")'></div><div class='item flex-item-1' id='pedido'><h2>Pedido</h2><div  class= 'itensagrupados' id='agruparqtditens" +
        id +
        "'>";
      adicionaitens(data[a].produtos);

      html += "</div>";

      html +=
        "<div id='horaedata'><p>" +
        datarecebida +
        "</p><p>" +
        hora +
        "</p></div></div><div class='item flex-item-1' id='entrega'><h2>Entrega</h2><div id='endereco1'><p id='rua" +
        id +
        "'>R: " +
        rua +
        " nº " +
        numero +
        "</p><p id='cep" +
        id +
        "'>" +
        cep;
      +"</p>";

      html +=
        "</div><div id='endereco2'><p id='bairrocidade" +
        id +
        "'>" +
        bairro +
        "/" +
        cidade +
        "</p>";

      html += "<p id='complemento" + id + "'>" + complemento + "</p>";

      html +=
        "</div><section class='content flex' style='border-top:2px solid #FF6F00' id='ordem" +
        id +
        "'><div id='valor' class='item flex-item-1'><p class='preco' id='preco" +
        id +
        "'>R$" +
        preco;
      if (cartao == 0) {
        //DINHEIRO

        html +=
          "</p><div id='cartao'><img src='_imagens/dinheiro.png'><p>Levar<span> R$" +
          troco +
          "</span> de troco</p></div></div>";
      } else {
        html +=
          "</p><div id='cartao'><img src='_imagens/cartao.png'><p>Levar máquina de cartão</p></div></div>";
      }
      html +=
        "<div id='status' class='item flex-item-1'><h5>Status:</h5><form><div id='mudarstatus'><div class='radio'><label><input type='radio' id='Em andamento' checked name='optradio' value='" +
        id +
        "' onclick='confirmar_status(this)'>Em andamento</label></div><div class='radio'><label><input type='radio' id='Pronto' name='optradio'  value='" +
        id +
        "' onclick='confirmar_status(this)'>Pronto</label></div><div class='radio disabled'><label><input type='radio' id='Enviado'  name='optradio' value='" +
        id +
        "' onclick='confirmar_status(this)'>Enviado</label></div></div></form></div></section></div><div class='item flex-item-1' id='cliente'><h2>Cliente</h2>";

      html +=
        "<p id='nome" +
        id +
        "'>" +
        nome +
        "</p><p id='telefone" +
        id +
        "'>" +
        telefone +
        "</p>" +
        "<p id = 'obs" +
        id +
        "'><span>Obs:" +
        obs +
        "</span></p>";
      //html += "<h2>Motoqueiro</h2><p id='nome_motoqueiro" + id + "'>" + motoqueiro_nome + "</p>";
      html += "</div></div>";
    }

    //muda a cor para amarelo andamento
    else if (status_pedido == 3 && (filtro == 2 || filtro == -1)) {
      html +=
        "<div id = pedido" +
        id +
        " class = 'container flex'  style= 'border : 5px solid #c9c94e' > ";
      html +=
        "<div class='item flex-item-1' id='titulo'><h1 id='titulopedido" +
        id +
        "' style='color : #c9c94e'>Pedido " +
        id;

      html +=
        "</h1><img id='fechar" +
        id +
        "' class='fechar' src='_imagens/X.png' alt='fechar' title='Fechar pedido' onclick = 'fecharpedido(" +
        id +
        ",1," +
        status_pedido +
        ")'></div><div class='item flex-item-1' id='pedido'><h2>Pedido</h2><div  class= 'itensagrupados' id='agruparqtditens" +
        id +
        "'>";

      adicionaitens(data[a].produtos);

      html += "</div>";

      html +=
        "<div id='horaedata'><p>" +
        datarecebida +
        "</p><p>" +
        hora +
        "</p></div></div><div class='item flex-item-1' id='entrega'><h2>Entrega</h2><div id='endereco1'><p id='rua" +
        id +
        "'>R: " +
        rua +
        " nº " +
        numero +
        "</p><p id='cep" +
        id +
        "'>" +
        cep;
      +"</p>";
      html +=
        "</div><div id='endereco2'><p id='bairrocidade" +
        id +
        "'>" +
        bairro +
        "/" +
        cidade +
        "</p>";

      html += "<p id='complemento" + id + "'>" + complemento + "</p>";

      html +=
        "</div><section class='content flex' style='border-top:2px solid #c9c94e' id='ordem" +
        id +
        "'><div id='valor' class='item flex-item-1'><p class='preco' id='preco" +
        id +
        "'>R$" +
        preco;
      if (cartao == 0) {
        //DINHEIRO

        html +=
          "</p><div id='cartao'><img src='_imagens/dinheiro.png'><p>Levar<span> R$" +
          troco +
          "</span> de troco</p></div></div>";
      } else {
        html +=
          "</p><div id='cartao'><img src='_imagens/cartao.png'><p>Levar máquina de cartão</p></div></div>";
      }
      html +=
        "<div id='status' class='item flex-item-1'><h5>Status:</h5><form><div id='mudarstatus'><div class='radio'><label><input type='radio' id='Em andamento'  name='optradio' value='" +
        id +
        "' onclick='confirmar_status(this)'>Em andamento</label></div><div class='radio'><label><input type='radio' id='Pronto' checked name='optradio'  value='" +
        id +
        "' onclick='confirmar_status(this)'>Pronto</label></div><div class='radio disabled'><label><input type='radio' id='Enviado'  name='optradio' value='" +
        id +
        "' onclick='confirmar_status(this)'>Enviado</label></div></div></form></div></section></div><div class='item flex-item-1' id='cliente'><h2>Cliente</h2>";

      html +=
        "<p id='nome" +
        id +
        "'>" +
        nome +
        "</p><p id='telefone" +
        id +
        "'>" +
        telefone +
        "</p>" +
        "<p id = 'obs" +
        id +
        "'><span>Obs:" +
        obs +
        "</span></p>";
      //html += "<h2>Motoqueiro</h2><p id='nome_motoqueiro" + id + "'>" + motoqueiro_nome + "</p>";
      html += "</div></div>";
    }
    //muda a cor para verde enviado
    else if (status_pedido == 4 && (filtro == 3 || filtro == -1)) {
      html +=
        "<div id = pedido" +
        id +
        " class = 'container flex'  style= 'border : 5px solid #298B03' > ";
      html +=
        "<div class='item flex-item-1' id='titulo'><h1 id='titulopedido" +
        id +
        "' style='color : #298B03'>Pedido " +
        id;

      html +=
        "</h1><img id='fechar" +
        id +
        "' class='fechar' src='_imagens/sucesso.png' alt='fechar' title='Fechar pedido' onclick = 'fecharpedido(" +
        id +
        ",1," +
        status_pedido +
        ")'></div><div class='item flex-item-1' id='pedido'><h2>Pedido</h2><div  class= 'itensagrupados' id='agruparqtditens" +
        id +
        "'>";
      adicionaitens(data[a].produtos);

      html += "</div>";

      html +=
        "<div id='horaedata'><p>" +
        datarecebida +
        "</p><p>" +
        hora +
        "</p></div></div><div class='item flex-item-1' id='entrega'><h2>Entrega</h2><div id='endereco1'><p id='rua" +
        id +
        "'>R: " +
        rua +
        " nº " +
        numero +
        "</p><p id='cep" +
        id +
        "'>" +
        cep;
      +"</p>";

      html +=
        "</div><div id='endereco2'><p id='bairrocidade" +
        id +
        "'>" +
        bairro +
        "/" +
        cidade +
        "</p>";

      html += "<p id='complemento" + id + "'>" + complemento + "</p>";

      html +=
        "</div><section class='content flex' style='border-top:2px solid #298B03' id='ordem" +
        id +
        "'><div id='valor' class='item flex-item-1'><p class='preco' id='preco" +
        id +
        "'>R$" +
        preco;
      if (cartao == 0) {
        //DINHEIRO

        html +=
          "</p><div id='cartao'><img src='_imagens/dinheiro.png'><p>Levar<span> R$" +
          troco +
          "</span> de troco</p></div></div>";
      } else {
        html +=
          "</p><div id='cartao'><img src='_imagens/cartao.png'><p>Levar máquina de cartão</p></div></div>";
      }
      html +=
        "<div id='status' class='item flex-item-1'><h5>Status:</h5><form><div id='mudarstatus'><div class='radio'><label><input type='radio' id='Em andamento'  name='optradio' value='" +
        id +
        "' onclick='confirmar_status(this)'>Em andamento</label></div><div class='radio'><label><input type='radio' id='Pronto' name='optradio'  value='" +
        id +
        "' onclick='confirmar_status(this)'>Pronto</label></div><div class='radio disabled'><label><input type='radio' id='Enviado' checked name='optradio' value='" +
        id +
        "' onclick='confirmar_status(this)'>Enviado</label></div></div></form></div></section></div><div class='item flex-item-1' id='cliente'><h2>Cliente</h2>";

      html +=
        "<p id='nome" +
        id +
        "'>" +
        nome +
        "</p><p id='telefone" +
        id +
        "'>" +
        telefone +
        "</p>" +
        "<p id = 'obs" +
        id +
        "'><span>Obs:" +
        obs +
        "</span></p>";
      // html += "<h2>Motoqueiro</h2><p id='nome_motoqueiro" + id + "'>" + motoqueiro_nome + "</p>";
      html += "</div></div>";
    } else if (status_pedido == 1 && (filtro == 0 || filtro == -1)) {
      //nao visto vermelho
      html +=
        "<div id = pedido" +
        id +
        " class = 'container flex'  style= 'border : 5px solid red' > ";
      html +=
        "<div class='item flex-item-1' id='titulo'><h1 id='titulopedido" +
        id +
        "' style='color : red'>Pedido " +
        id;

      html +=
        "</h1><img id='fechar" +
        id +
        "' class='fechar' src='_imagens/X.png' alt='fechar' title='Fechar pedido' onclick = 'fecharpedido(" +
        id +
        ",1," +
        status_pedido +
        ")'></div><div class='item flex-item-1' id='pedido'><h2>Pedido</h2><div  class= 'itensagrupados' id='agruparqtditens" +
        id +
        "'>";
      adicionaitens(data[a].produtos);

      html += "</div>";

      html +=
        "<div id='horaedata'><p>" +
        datarecebida +
        "</p><p>" +
        hora +
        "</p></div></div><div class='item flex-item-1' id='entrega'><h2>Entrega</h2><div id='endereco1'><p id='rua" +
        id +
        "'>R: " +
        rua +
        " nº " +
        numero +
        "</p><p id='cep" +
        id +
        "'>" +
        cep;
      +"</p>";
      html +=
        "</div><div id='endereco2'><p id='bairrocidade" +
        id +
        "'>" +
        bairro +
        "/" +
        cidade +
        "</p>";

      html += "<p id='complemento" + id + "'>" + complemento + "</p>";

      html +=
        "</div><section class='content flex' style='border-top:2px solid red' id='ordem" +
        id +
        "'><div id='valor' class='item flex-item-1'><p class='preco' id='preco" +
        id +
        "'>R$" +
        preco;
      if (cartao == 0) {
        html +=
          "</p><div id='cartao'><img src='_imagens/dinheiro.png'><p>Levar<span> R$" +
          troco +
          "</span> de troco</p></div></div>";
      } else {
        html +=
          "</p><div id='cartao'><img src='_imagens/cartao.png'><p>Levar máquina de cartão</p></div></div>";
      }
      html +=
        "<div id='status' class='item flex-item-1'><h5>Status:</h5><form><div id='mudarstatus'><div class='radio'><label><input type='radio' id='Em andamento'  name='optradio' value='" +
        id +
        "' onclick='confirmar_status(this)'>Em andamento</label></div><div class='radio'><label><input type='radio' id='Pronto' name='optradio'  value='" +
        id +
        "' onclick='confirmar_status(this)'>Pronto</label></div><div class='radio disabled'><label><input type='radio' id='Enviado' name='optradio' value='" +
        id +
        "' onclick='confirmar_status(this)'>Enviado</label></div></div></form></div></section></div><div class='item flex-item-1' id='cliente'><h2>Cliente</h2>";

      html +=
        "<p id='nome" +
        id +
        "'>" +
        nome +
        "</p><p id='telefone" +
        id +
        "'>" +
        telefone +
        "</p>" +
        "<p id = 'obs" +
        id +
        "'><span>Obs:" +
        obs +
        "</span></p>";
      //html += "<h2>Motoqueiro</h2><p id='nome_motoqueiro" + id + "'>" + motoqueiro_nome + "</p>";
      html += "</div></div>";
    }

    pagina += html;
  }
  document.getElementById("pagina").innerHTML = pagina;
  carregapagina();
  pagina = "";
  /*if (GETativo === 0) //se nao estiver no loop precisamos entrar !
                        GETpedidos();
                    if (GETativo === -1) {
                        setTimeout(function () {
                            GETativo = 1; //volta a chamar
                        }, 5000);
                    } */
  /* } else {
          nenhumpedido();
        }
      } 
    },
    error: function (jqXHR) {
      switch (jqXHR.status) {
        case 403:
          nenhumpedido();
          break;
        case 404:
          nenhumpedido();
          break;
        default:
          nenhumpedido();
      }
    },
  });*/
}

//}, intervalo); //dado o itnervalo atualiza

function confirmar_status(obj) {
  objeto = obj; //salvo para desmarcar caso ele clique "NAO" no alert
  document.getElementById("filtros").style.display = "none";
  var pagina = document.getElementById("pagina");
  var confirma = document.getElementById("confirmar");
  document.getElementById("confirmarpedido").innerHTML = "Pedido " + obj.value; //aqui escrevo Pedido + id do pedido q ele alterou o status
  document.getElementById("confirmarstatus").innerHTML = obj.id + " ?"; //aqui mostro qual a opcao q ele escolheu para ser alterada
  pagina.style.display = "none"; //oculta todos pedidos e faz aparecer o "alert criado ( confirma.style  = block )"
  confirma.style.display = "block";
}

function resposta(op) {
  let atualizastatus = 0;
  //se no botao de confirma ele selecionar "não" volta o pedido para o estado inicial (com a cor inicial e nenhum radio checked)
  if (op == "nao") {
    document.getElementById(objeto.id).checked = false;
    document.getElementById("confirmar").style.display = "none";
    document.getElementById("pagina").style.display = "block";
    contagemparacarregarpagina();
    //  GETativo = -1;
    // Timeout = 100;
    Pedidos();
  } else {
    if (op == "sim" && objeto.id == "Em andamento") {
      atualizastatus = 2;
      document.getElementById(objeto.id).checked = true;
      document.getElementById("pedido" + objeto.value).style.border =
        "5px solid #FF6F00"; //aqui pega o id do pedido que foi alterado o status
      document.getElementById("ordem" + objeto.value).style.borderTop =
        "2px solid #FF6F00"; //margem acima de status
      document.getElementById("titulopedido" + objeto.value).style.color =
        "#FF6F00"; //titulo do pedido
      document.getElementById("confirmar").style.display = "none";
      document.getElementById("pagina").style.display = "block";
      contagemparacarregarpagina();
    } else if (op == "sim" && objeto.id == "Pronto") {
      atualizastatus = 3;
      document.getElementById(objeto.id).checked = true;
      document.getElementById("pedido" + objeto.value).style.border =
        "5px solid #c9c94e"; //aqui pega o id do pedido que foi alterado o status
      document.getElementById("ordem" + objeto.value).style.borderTop =
        "2px solid #c9c94e"; //margem acima de status
      document.getElementById("titulopedido" + objeto.value).style.color =
        "#c9c94e"; //titulo do pedido
      document.getElementById("confirmar").style.display = "none";
      document.getElementById("pagina").style.display = "block";
      contagemparacarregarpagina();
    } else if (op == "sim" && objeto.id == "Enviado") {
      atualizastatus = 4;
      document.getElementById(objeto.id).checked = true;
      document.getElementById("pedido" + objeto.value).style.border =
        "5px solid #298B03"; //aqui pega o id do pedido que foi alterado o status
      document.getElementById("ordem" + objeto.value).style.borderTop =
        "2px solid #298B03"; //margem acima de status
      document.getElementById("titulopedido" + objeto.value).style.color =
        "#298B03"; //titulo do pedido
      document.getElementById("confirmar").style.display = "none";
      document.getElementById("pagina").style.display = "block";
      contagemparacarregarpagina();
    } else {
      atualizastatus = 1;
      document.getElementById(objeto.id).checked = false;
      document.getElementById("pedido" + objeto.value).style.border =
        "5px solid #FF6F00"; //aqui pega o id do pedido que foi alterado o status
      document.getElementById("ordem" + objeto.value).style.borderTop =
        "2px solid #FF6F00"; //margem acima de status
      document.getElementById("titulopedido" + objeto.value).style.color =
        "#FF6F00"; //titulo do pedido
      document.getElementById("confirmar").style.display = "none";
      document.getElementById("pagina").style.display = "block";
      contagemparacarregarpagina();
    }

    //encio para o php as variaveis , da para colocar mais , apenas adicionando o '&' .
    var enviarparaphp =
      "Status_id_status= " + atualizastatus + "&id_cli= " + objeto.value; //envio o status que preciso mudar e o id_cliente
    let idPedido = objeto.value;
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");

    $.ajax({
      type: "PUT",
      url: url + "/pedido",
      headers: {
        token: token,
      },
      data: {
        status: atualizastatus,
        idPedido: idPedido,
      },
      success: function (data) {
        Pedidos();
        //console.log(data);
      },
      error: function () {
        console.log("ERRO!");
      },
    });
    //aqui
    // GETativo = -1;
    //  Timeout = 5000;
    Pedidos();
  }
}

function contagemparacarregarpagina() {
  //exibe a tela de carregando
  document.getElementById("filtros").style.display = "none";
  document.getElementById("pagina").style.display = "none";
  document.getElementById("carregando").style.display = "block";
  //  Pedidos();
}

function carregapagina() {
  // tira a tela de carregamento
  document.getElementById("carregando").style.display = "none";
  if (document.getElementById("confirmar").style.display == "block") {
    document.getElementById("filtros").style.display = "none";
    document.getElementById("pagina").style.display = "none";
  } else {
    document.getElementById("filtros").style.display = "block";
    document.getElementById("pagina").style.display = "block";
  }
}

function adicionaitens(itens) {
  //nessa function eu adiciono os pedidos na div que contem os PEDIDOS.

  for (var i = 0; itens[i] != null; i++) {
    html +=
      "<section id='qtdenome'> <p id='qtd'>" +
      itens[i].qtdPedidoProduto +
      " X</p><p id='nomeitem'>" +
      itens[i].nomeProduto +
      "</p></section>";
  }
}

function fecharpedido(id, valor, status) {
  let sta = 1;
  let certeza = false;
  let cancelar = false;
  if (status !== 4) {
    //se o status nao for enviado, se ele fechar o pedido significa que nao acabou e rejeitou o mesmo!
    certeza = confirm(
      "Você realmente deseja realmente REJEITAR esse pedido? Caso sim, notificaremos o cliente."
    );
    if (certeza) {
      sta = 6; //rejeitado
    } else {
      cancelar = true;
    }
  } else {
    sta = 5; //fechado
  }
  if (!cancelar) {
    contagemparacarregarpagina();
    //var dataatual = moment().format("YYYY-MM-DD");
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");

    $.ajax({
      type: "PUT",
      url: url + "/pedido",
      headers: {
        token: token,
      },
      data: {
        status: sta,
        idPedido: id,
      },
      success: function (data) {
        alert(data["message"]);
        Pedidos();
      },
    });
  }
}

function nenhumpedido() {
  let nenhum = document.getElementById("nenhum");
  let carregando = document.getElementById("carregando");
  let pagina = document.getElementById("pagina");
  document.getElementById("filtros").style.display = "none";
  pagina.style.display = "none";
  carregando.style.display = "none";
  nenhum.style.display = "block";
}
