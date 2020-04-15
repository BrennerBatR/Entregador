var clique = false;
var intervalo = 3000;
var html = "";

function oculta_div() {
  var id = document.getElementById("pagina");

  if (clique == false) {
    id.style.width = 1300 + "px"; //se tiver na tela grande, ele n faz o "wrap" com os items dentro da div !
    clique = true;
  } else {
    id.style.width = 100 + "%"; //se tiver na tela grande, ele n faz o "wrap" com os items dentro da div !
    clique = false;
  }

  if (window.screen.availWidth < 851 && id.style.visibility != "hidden") {
    id.style.visibility = "hidden";
  } else {
    id.style.visibility = "visible";
  }
}

function Pedidos_fechados() {
  let token = sessionStorage.getItem("token");
  let contador = 0;
  var data = document.getElementById("data_pedido");
  const datanao = false;
  if (datanao && data.value.length < 10) {
    alert("Digite uma data no formato: DD/MM/AAAA !");
    data.value = "";
    data.focus();
  } else {
    contagemparacarregarpagina();
    var dataTratada = moment("01/01/2000", "DD/MM/YYYY");
    var dataBR = dataTratada.format("DD/MM/YYYY");

    dataTratada = dataTratada.format("YYYY-MM-DD");
    document.getElementById("dia_fechado").innerHTML = dataBR; //escrevo a data no titulo

    var pagina = "";
    var hora = "";
    var datarecebida = " ";

    let url = sessionStorage.getItem("url");
    console.log("AQUI");
    const data = [
      {
        idPedido: 5,
        idStatusPedido: 6,
        dataCriacao: "2000-01-01T01:00:00",
        obs: "Pedido Fechado",
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
        idPedido: 6,
        idStatusPedido: 5,
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
    ];

    for (var a = 0; a < data.length; a++) {
      //enquanto nao terminar de ter resultados ele continua salvando nos vetores
      var html = "";
      let id = data[a].idPedido;
      let status_pedido = data[a].idStatusPedido;
      console.log("status_pedido", status_pedido);

      let bairro = data[a].infoEntrega.endereco.bairro;
      let cidade = data[a].infoEntrega.endereco.cidade;
      let nome = data[a].infoEntrega.infoCliente.nome;
      let telefone = data[a].infoEntrega.infoCliente.celular;

      let complemento = data[a].infoEntrega.endereco.complemento;
      let rua = data[a].infoEntrega.endereco.rua;
      let cep = data[a].infoEntrega.endereco.cep;
      let numero = "sem NUMERO!";
      let dataehorarecebida = data[a].dataCriacao;
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

      let DateTime = moment(dataehorarecebida);
      let preco = preco_recebido.toString().replace(".", ",");
      let troco = troco_recebido.toString().replace(".", ",");

      hora = DateTime.format("hh:mm:ss");
      datarecebida = DateTime.format("DD/MM/YYYY");
      if (status_pedido === 6) {
        //se ele  foi rejeitado preciso mostrar q foi rejeitado !
        contador++;
        html +=
          "<div id = pedido" +
          id +
          "  class = 'container flex'  style= 'border : 5px solid black' > ";
        html +=
          "<div class='item flex-item-1' id='titulo'><h1 id='titulopedido" +
          id +
          "' style='color : black'>Pedido " +
          id +
          "<span id='rejeitado'>  REJEITADO! </span>";

        html +=
          "</h1></div><div class='item flex-item-1' id='pedido'><h2>Pedido</h2><div  class= 'itensagrupados' id='agruparqtditens" +
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
          "</div><section class='content flex' style='border-top:2px solid black' id='ordem" +
          id +
          "'><div id='valor' class='item flex-item-1'><p class='preco' id='preco" +
          id +
          "'>R$" +
          preco;
        if (cartao == 0) {
          //nao é cartao

          html +=
            "</p><div id='cartao'><img src='_imagens/dinheiro.png'><p>Levar<span> R$" +
            troco +
            "</span> de troco</p></div></div>";
        } else {
          html +=
            "</p><div id='cartao'><img src='_imagens/cartao.png'><p>Levar máquina de cartão</p></div></div>";
        }
        html +=
          "<div id='status' class='item flex-item-1'><h5>Status:</h5><form><div id='mudarstatus'><div class='radio'><label><input type='radio' id='Em andamento'  disabled='disabled' name='optradio' value='" +
          id +
          "' onclick='confirmar_status(this)'>Em andamento</label></div><div class='radio'><label><input type='radio' disabled='disabled' id='Pronto' name='optradio'  value='" +
          id +
          "' onclick='confirmar_status(this)'>Pronto</label></div><div class='radio disabled'><label><input type='radio' id='Enviado' disabled='disabled' name='optradio' value='" +
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
      } else if (status_pedido == 5) {
        // apenas fechados
        contador++;
        html +=
          "<div id = pedido" +
          id +
          "  class = 'container flex'  style= 'border : 5px solid black' > ";
        html +=
          "<div class='item flex-item-1' id='titulo'><h1 id='titulopedido" +
          id +
          "' style='color : black'>Pedido " +
          id;

        html +=
          "</h1></div><div class='item flex-item-1' id='pedido'><h2>Pedido</h2><div  class= 'itensagrupados' id='agruparqtditens" +
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
          "</div><section class='content flex' style='border-top:2px solid black' id='ordem" +
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
          "<div id='status' class='item flex-item-1'><h5>Status:</h5><form><div id='mudarstatus'><div class='radio'><label><input type='radio' id='Em andamento'  disabled='disabled' name='optradio' value='" +
          id +
          "' onclick='confirmar_status(this)'>Em andamento</label></div><div class='radio'><label><input type='radio' disabled='disabled' id='Pronto' name='optradio'  value='" +
          id +
          "' onclick='confirmar_status(this)'>Pronto</label></div><div class='radio disabled'><label><input type='radio' id='Enviado' disabled='disabled' name='optradio' value='" +
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
      }

      pagina += html;
    }
    /*  if (contador === 0) {
      nenhumpedido();
    } else {
      document.getElementById("pagina").innerHTML = pagina;
      carregapagina();
    } */
    document.getElementById("pagina").innerHTML = pagina;
    pagina = "";
    carregapagina();
  }
}

function contagemparacarregarpagina() {
  //exibe a tela de carregando
  document.getElementById("nenhum").style.display = "none";
  document.getElementById("pagina").style.display = "none";
  document.getElementById("nenhum_titulo").style.display = "none";
  document.getElementById("data").style.display = "none";
  document.getElementById("carregando").style.display = "block";
}

function carregapagina() {
  // tira a tela de carregamento

  document.getElementById("carregando").style.display = "none";
  document.getElementById("data").style.display = "flex";
  document.getElementById("pagina").style.display = "block";
  document.getElementById("nenhum_titulo").style.display = "block";
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

function tratardataehora(b) {
  var aux = b.split("-"); //essa funcao quebra a string em todos os - .
  var sequenciacorreta = "";
  var separadiadahora = aux[2].split(" "); //aqui quebro ela pelo espaçlo , pois ficada dia espaço hora.
  var ano = aux[0];
  var mes = aux[1];
  var dia = separadiadahora[0];
  var hora = separadiadahora[1];

  sequenciacorreta = hora + "*" + dia + "/" + mes + "/" + ano; // uso * para quebrar ela qd recebida ( separar em hora e data )

  return sequenciacorreta;
}

function nenhumpedido() {
  let nenhum = document.getElementById("nenhum");
  let pagina = document.getElementById("pagina");
  let carregando = document.getElementById("carregando");
  document.getElementById("nenhum_titulo").style.display = "none";
  carregando.style.display = "none";
  pagina.style.display = "none";
  nenhum.style.display = "block";
}
