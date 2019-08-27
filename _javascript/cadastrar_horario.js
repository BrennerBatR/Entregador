function oculta_div() {
    var id = document.getElementById("formulario");

    if (window.screen.availWidth < 851 && id.style.visibility !== "hidden") {
        id.style.visibility = "hidden";
    } else {
        id.style.visibility = "visible";
    }

}

function verificatela() {
    contagemparacarregarpagina();
    pegarHorarios();
}

/**
 * @return {boolean}
 */
function CheckHour(hour, frase) {
    if (hour.value.length !== 5) {
        hour.value = "";
        alert("Preencha corretamente a " + frase);
        hour.focus();
        return false;
    } else
        return true;
}


function SendToApi(checkeds) {
    contagemparacarregarpagina();
    let EmpId = sessionStorage.getItem("EMP_id");
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");

    for (let i = 0; i < checkeds.length; i++) {
        if (checkeds[i].checked === true) {
            $.ajax({
                type: 'POST',
                url: url + '/horarios',
                headers: {
                    "token": token,
                },
                data: {
                    "diaSemana": checkeds[i].diaSemana,
                    "idDia": checkeds[i].idDia,
                    "hrAberto": checkeds[i].hrAberto,
                    "hrFechado": checkeds[i].hrFechado,
                    "idEmpresa": EmpId
                },
                success: function (data) {
                    alert(data.message);
                    window.location.reload();
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
                            alert("Horario do(a)" + checkeds[i].diaSemana + " já cadastrado! Você pode alterá-lo na página de edição de horários.");
                            break;
                        case 403:
                            alert(jqXHR.responseJSON["message"]);
                            break;
                        default:
                            alert("Erro no cadastro do(a)" + checkeds[i].diaSemana + ",tente novamente!");

                    }
                    window.location.reload();
                }
            });

        }
    }

}


function CadastrarHorario() {
    let checkeds = [];
    checkeds.push(
        {
            diaSemana: "Segunda-feira",
            idDia: 1,
            hrAberto: "00:00",
            hrFechado: "00:00",
            idEmpresa: 3,
            checked: false
        },
        {
            diaSemana: "Terça-feira",
            idDia: 2,
            hrAberto: "00:00",
            hrFechado: "00:00",
            idEmpresa: 0,
            checked: false
        },
        {
            diaSemana: "Quarta-feira",
            idDia: 3,
            hrAberto: "00:00",
            hrFechado: "00:00",
            idEmpresa: 0,
            checked: false
        },
        {
            diaSemana: "Quinta-feira",
            idDia: 4,
            hrAberto: "00:00",
            hrFechado: "00:00",
            idEmpresa: 0,
            checked: false
        },
        {
            diaSemana: "Sexta-feira",
            idDia: 5,
            hrAberto: "00:00",
            hrFechado: "00:00",
            idEmpresa: 0,
            checked: false
        },
        {
            diaSemana: "Sábado",
            idDia: 6,
            hrAberto: "00:00",
            hrFechado: "00:00",
            idEmpresa: 0,
            checked: false
        },
        {
            diaSemana: "Domingo",
            idDia: 7,
            hrAberto: "00:00",
            hrFechado: "00:00",
            idEmpresa: 0,
            checked: false
        }
    );

    let day7 = document.getElementById("domingoValidation");
    let dayA7 = document.getElementById("domingoA"); //aberto
    let dayF7 = document.getElementById("domingoF"); //fechado
    let day1 = document.getElementById("segundaValidation");
    let dayA1 = document.getElementById("segundaA");
    let dayF1 = document.getElementById("segundaF");
    let day2 = document.getElementById("tercaValidation");
    let dayA2 = document.getElementById("tercaA");
    let dayF2 = document.getElementById("tercaF");
    let day3 = document.getElementById("quartaValidation");
    let dayA3 = document.getElementById("quartaA");
    let dayF3 = document.getElementById("quartaF");
    let day4 = document.getElementById("quintaValidation");
    let dayA4 = document.getElementById("quintaA");
    let dayF4 = document.getElementById("quintaF");
    let day5 = document.getElementById("sextaValidation");
    let dayA5 = document.getElementById("sextaA");
    let dayF5 = document.getElementById("sextaF");
    let day6 = document.getElementById("sabadoValidation");
    let dayA6 = document.getElementById("sabadoA");
    let dayF6 = document.getElementById("sabadoF");
    let erroPreenchimento = false;
    let checkedsTrue = 0; //marcar se tem algum ativado, se n tiver é pq n ativou nenhum


    if (day7.checked === true && !dayA7.disabled) {
        checkedsTrue++;
        if (CheckHour(dayA7, "hora de abertura do Domingo!")) {
            if (CheckHour(dayF7, "hora de fechar do Domingo!")) {
                checkeds[6].hrAberto = dayA7.value;
                checkeds[6].hrFechado = dayF7.value;
                checkeds[6].checked = true;
            } else
                erroPreenchimento = true;
        } else
            erroPreenchimento = true;
    }
    if (day1.checked === true && !dayA1.disabled) {
        checkedsTrue++;

        if (CheckHour(dayA1, "hora de abertura da Segunda-feira!")) {
            if (CheckHour(dayF1, "hora de fechar da Segunda-feira!")) {
                checkeds[0].hrAberto = dayA1.value;
                checkeds[0].hrFechado = dayF1.value;
                checkeds[0].checked = true;
            } else
                erroPreenchimento = true;
        } else
            erroPreenchimento = true;
    }
    if (day2.checked === true && !dayA2.disabled) {
        checkedsTrue++;

        if (CheckHour(dayA2, "hora de abertura da Terça-feira!")) {
            if (CheckHour(dayF2, "hora de fechar da Terça-feira!!")) {
                checkeds[1].hrAberto = dayA2.value;
                checkeds[1].hrFechado = dayF2.value;
                checkeds[1].checked = true;
            } else
                erroPreenchimento = true;
        } else
            erroPreenchimento = true;
    }
    if (day3.checked === true && !dayA3.disabled) {
        checkedsTrue++;

        if (CheckHour(dayA3, "hora de abertura da Quarta-feira!")) {
            if (CheckHour(dayF3, "hora de fechar da Quarta-feira!")) {
                checkeds[2].hrAberto = dayA3.value;
                checkeds[2].hrFechado = dayF3.value;
                checkeds[2].checked = true;
            } else
                erroPreenchimento = true;
        } else
            erroPreenchimento = true;
    }
    if (day4.checked === true && !dayA4.disabled) {
        checkedsTrue++;

        if (CheckHour(dayA4, "hora de abertura da Quinta-feira!")) {
            if (CheckHour(dayF4, "hora de fechar da Quinta-feira!")) {
                checkeds[3].hrAberto = dayA4.value;
                checkeds[3].hrFechado = dayF4.value;
                checkeds[3].checked = true;
            } else
                erroPreenchimento = true;
        } else
            erroPreenchimento = true;
    }
    if (day5.checked === true && !dayA5.disabled) {
        checkedsTrue++;

        if (CheckHour(dayA5, "hora de abertura da Sexta-feira!")) {
            if (CheckHour(dayF5, "hora de fechar da Sexta-feira!")) {
                checkeds[4].hrAberto = dayA5.value;
                checkeds[4].hrFechado = dayF5.value;
                checkeds[4].checked = true;
            } else
                erroPreenchimento = true;
        } else
            erroPreenchimento = true;
    }
    if (day6.checked === true && !dayA6.disabled) {
        checkedsTrue++;

        if (CheckHour(dayA6, "hora de abertura do Sábado!")) {
            if (CheckHour(dayF6, "hora de fechar da Sábado!")) {
                checkeds[5].hrAberto = dayA6.value;
                checkeds[5].hrFechado = dayF6.value;
                checkeds[5].checked = true;
            } else
                erroPreenchimento = true;
        } else
            erroPreenchimento = true;
    }

    if (!erroPreenchimento) { //se nao teve erro em nada eu chamo a API
        if (checkedsTrue > 0)
            SendToApi(checkeds);
        else {
            alert("Nenhum horário selecionado!");
            carregapagina();
        }


    }

}

function contagemparacarregarpagina() {
    var sidebar = document.getElementById("sidebar"); //quando enviar o form devo mostrar a div carregamento !
    var teto = document.getElementById("teto");
    var formulario_ocultar = document.getElementById("formulario");
    var carregamento = document.getElementById("carregando");
    formulario_ocultar.style.display = "none";
    carregamento.style.display = "block";
    sidebar.style.opacity = 0.5;
    teto.style.opacity = 0.5;
}

function carregapagina() {
    var sidebar = document.getElementById("sidebar"); //quando enviar o form devo mostrar a div carregamento !
    var teto = document.getElementById("teto");
    var formulario_ocultar = document.getElementById("formulario");
    var carregamento = document.getElementById("carregando");

    formulario_ocultar.style.display = "flex";
    carregamento.style.display = "none";
    sidebar.style.opacity = 1;
    teto.style.opacity = 1;

}

function pegarHorarios() {
    let EmpId = sessionStorage.getItem("EMP_id");
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");

    $.ajax({
        type: 'GET',
        url: url + '/horarios/' + EmpId,
        headers: {
            "token": token,
        },
        success: function (data) {
            marcarHorarios(data);
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
                case 404:
                   // marcarHorarios(-1);
                    carregapagina();
                    break;
                default:
                    alert("Erro interno no servidor");
            }
        }
    });
}

function marcarHorarios(data) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].ativo == 1) {
            let nomedia = "";
            switch (data[i].idDia) {
                case 1:
                    nomedia = "segunda";
                    break;
                case 2:
                    nomedia = "terca";
                    break;
                case 3:
                    nomedia = "quarta";
                    break;
                case 4:
                    nomedia = "quinta";
                    break;
                case 5:
                    nomedia = "sexta";
                    break;
                case 6:
                    nomedia = "sabado";
                    break;
                case 7:
                    nomedia = "domingo";
                    break;


            }
            try {
                let idDia = data[i]["idDia"];
                document.getElementById(nomedia + "Validation").checked = true;
                document.getElementById(nomedia + "A").disabled = true;
                document.getElementById(nomedia + "F").disabled = true;
                document.getElementById("dia_" + idDia).style.display = "none";
            }
            catch (e) {

            }
        }
    }

    carregapagina();

}