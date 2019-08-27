function loadingPage() {
    Empresas();
}

function LimparTable() {
    var table = $('#table').DataTable();
    table
        .clear()
        .draw();
}

function Empresas(data1, data2) {
    LimparTable();
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");
    let dataInicial = "";
    let dataFinal = "";

    if (data1 === undefined || data1 === null || data2 === undefined || data2 === null) {
        let dataInicialMoment = moment();
        dataInicialMoment = dataInicialMoment.add(-30, 'days');
        let dataFinalMoment = moment();
        dataFinalMoment = dataFinalMoment.add(1, 'days');

        dataInicial = dataInicialMoment.format("YYYY-MM-DD");
        dataFinal = dataFinalMoment.format("YYYY-MM-DD");
    }else{
        dataInicial = data1;
        dataFinal = data2;
    }

    document.getElementById("msg").innerHTML = "Dados de " + moment(dataInicial).format("DD/MM/YYYY") + " à " + moment(dataFinal).format("DD/MM/YYYY");
    $.ajax({
        type: 'GET',
        url: url + "/pedidos_relatorio/" + dataInicial + '/' + dataFinal,
        headers: {
            "token": token,
        },
        success: function (data) {
            Table(data);
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
                    alert("Nenhum dado encontrado nesse intervalo!");
                    break;
                default:
                    alert("Erro interno no servidor");
            }
            // window.location.reload();
        }
    });
}


function Table(json) {
    let t = $('#table').DataTable();
    for (let i = 0; i < json.length; i++) {
        let remEmp = "<img  style='cursor:pointer' src='../_imagens/remove.png' alt='remover materia' title='Remover empresa'  id='" + json[i]['idEmpresa'] + "' onclick='DeleteEmpresa(this.id)'>";
        t.row.add([
            json[i]['cnpj'],
            json[i]['nomeEmpresa'],
            json[i]['faturamento'].toFixed(2),
            json[i]['faturamentoRetido'].toFixed(2),
            (json[i]['tipoFiliacao'] === 0) ? "Mensal" : "%",
            json[i]['dinheiro'].toFixed(2),
            json[i]['cartao'].toFixed(2),
            json[i]['frete'].toFixed(2),
            json[i]['qtdPedidos'],
            remEmp
            // addMat


        ]).draw(false);

    }
}


function DeleteEmpresa(idEmpresa) {
    if (confirm("Tem certeza que deseja deletar essa empresa ?")) {
        let token = sessionStorage.getItem("token");
        let url = sessionStorage.getItem("url");
        // let numempresas = document.getElementById("numEmp");
        $.ajax({
            type: 'PUT',
            url: url + '/empresa',
            headers: {
                "token": token,
            },
            data: {
                "idEmpresa": idEmpresa,
                "delete": 1,

            },
            success: function (data) {
                alert("Empresa deletada com sucesso!");
                window.location.reload();
            },
            error: function (jqXHR) {
                console.log(jqXHR);
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
                window.location.reload();
            }
        });
    }
}


function BuscaDatas() {
    let data1 = document.getElementById("datainicial").value;
    let data2 = document.getElementById("dataFinal").value;

    try {
        let mData1 = moment(data1, "DD/MM/YYYY");
        let mData2 = moment(data2, "DD/MM/YYYY");

        if (mData1._isValid === false || mData2._isValid === false)
            alert("Datas inválidas");

        else if (mData1 > mData2) {
            alert("Data inicial precisa ser menor que Data final!");
        } else {
            Empresas(mData1.format("YYYY-MM-DD"), mData2.format("YYYY-MM-DD"));
        }

    } catch (e) {
        alert("Datas inválidas");
    }


}