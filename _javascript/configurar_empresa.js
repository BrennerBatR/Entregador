$(document).ready(function (e) {
    $("#enviaImg").on('submit', (function (e) {
        //let idEMpresa = sessionStorage.getItem("EMP_id");
        e.preventDefault();
        contagemparacarregarpagina();
        $.ajax({
            url: "_PHP/ImagemEmpresa.php", // Url to which the request is send
            type: "POST",             // Type of request to be send, called as method
            data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
            contentType: false,       // The content type used when sending data to the server.
            cache: false,             // To unable request pages to be cached
            processData: false,        // To send DOMDocument or non processed data file it is set to false
            success: function (data)   // A function to be called if request succeeds
            {
                let json = JSON.parse(data);
                if (json['success'] === -100) {
                    let urlOld = document.getElementById("auxDiretorio").value;
                    updateEmpresa(urlOld);
                } else if (json['success'] < 0) {
                    alert('Troca de imagem falhou. Tente novamente!');
                    carregapagina();
                } else {
                    updateEmpresa(json["url"])
                }

            },
            error: function ()   // A function to be called if request succeeds
            {
                alert("Erro de urpload");
            }
        });
    }))
});


function oculta_div() {

    var id = document.getElementById("detalhes_empresa");

    if (window.screen.availWidth < 600 && id.style.visibility != "hidden") {
        id.style.visibility = "hidden";


    } else {
        id.style.visibility = "visible";

    }

}

function carregaEmpresa() {
    contagemparacarregarpagina();
    BuscaDados();
}


function BuscaDados() {
    let idEMpresa = sessionStorage.getItem("EMP_id");
    let token = sessionStorage.getItem("token");
    let url = sessionStorage.getItem("url");

    $.ajax({
        type: 'GET',
        url: url + '/empresa/' + idEMpresa,
        headers: {
            "token": token,
        },
        success: function (data) {
           // document.getElementsByName('detalhesnome')[0].placeholder = data.nome; //placehold do nome (mostra oq esta no banco)
            document.getElementsByName('detalhesnomeFantasia')[0].placeholder = data.nomeFantasia; //placehold do nome (mostra oq esta no banco)
            //document.getElementById('detalhesnome').value = data.nome; //placehold do nome (mostra oq esta no banco)
            document.getElementById('detalhesnomeFantasia').value = data.nomeFantasia; //placehold do nome (mostra oq esta no banco)
            document.getElementsByName('detalhestelefone')[0].placeholder = data.telefone; //placehold do nome (mostra oq esta no banco)
            document.getElementById('detalhestelefone').value = data.telefone; //placehold do nome (mostra oq esta no banco)
            document.getElementById('detalhesimagem').src = data.logo;  //endereco da imagem que cliquei , coloco no src da imagem
            document.getElementById("auxDiretorio").value = data.logo; //o botao salvar recebe o valor do id para enviar para api

            carregapagina();

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
        }
    });
}


function contagemparacarregarpagina() { //exibe a tela de carregando

    document.getElementById("detalhes_empresa").style.display = "none";
    document.getElementById("carregando").style.display = "block";


}

function carregapagina() {

    document.getElementById("sidebar").style.opacity = 1;
    document.getElementById("teto").style.opacity = 1;
    document.getElementById("detalhes_empresa").style.display = "contents";
    document.getElementById("carregando").style.display = "none";


}


function TrocaImagem(evt) {

    const compress = new Compress();
    const preview = document.getElementById('detalhesimagem');
    const files = [...evt.target.files];
    compress.compress(files, {
        size: 4, // the max size in MB, defaults to 2MB
        quality: 0.25, // the quality of the image, max is 1,
        maxWidth: 400, // the max width of the output image, defaults to 1920px
        maxHeight: 400, // the max height of the output image, defaults to 1920px
        resize: true // defaults to true, set false if you do not want to resize the image width and height
    }).then((images) => {

        const img = images[0];
        // returns an array of compressed images
        preview.src = `${img.prefix}${img.data}`


        //  console.log(img);
        // document.getElementById("enviaImg").submit();


    });

}

function verificaExtensao() {

    let imagem = $("#customFile");
    let $input = imagem[0];
    let extPermitidas = ["png", "jpg", "jpeg"];
    let extArquivo = $input.value.split('.').pop();
    let size = $input.files[0].size;

    if (typeof extPermitidas.find(function (ext) {
        return extArquivo == ext;
    }) == 'undefined') {
        alert('Extensão "' + extArquivo + '" não permitida!');
        $input.value = '';
        return false;

    } else if (size > 5097152) { //1MB
        alert('Tamanho da imagem não permitida (Máx 4.5 Mb)'); //Acima do limite
        $input.value = ''; //Limpa o campo
        return false;
    } else {
        let nome_arquivo = $($input).val().split("\\").pop();
        let quebraNome = nome_arquivo.substring(0, 8);
        document.getElementById("nomefile").innerHTML = quebraNome + "... ." + extArquivo;
        return true;
    }

}

function updateEmpresa(url2) {
    contagemparacarregarpagina();
    //let nome = document.getElementById("detalhesnome").value;
    let nomeFantasia = document.getElementById("detalhesnomeFantasia").value;
    let telefone = document.getElementById("detalhestelefone").value;
    let token = sessionStorage.getItem("token");
    let idEmpresa = sessionStorage.getItem("EMP_id");

    let url = sessionStorage.getItem("url");
    /*console.log("nome", nome);
    console.log("telefone", telefone);
    console.log("url", url);*/
    $.ajax({
        type: 'PUT',
        url: url + '/empresa',
        data: {
            //"nome": nome,
            "nomeFantasia": nomeFantasia,
            "telefone": telefone,
            "logo": url2,
            "idEmpresa": idEmpresa
        },
        headers: {
            "token": token,
        },
        success: function (data) {
           // console.log("DEPOIS DE ATUALZIAR", data);
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
                    alert(jqXHR.responseJSON["message"]);
                    break;
                case 403:
                    alert(jqXHR.responseJSON["message"]);
                    break;
                default:
                    alert("Erro interno no servidor");
            }
            carregapagina();
        }

    });
}


/*function busca_categorias_empresa() {
    var categoria_empresa = document.getElementById("categoria_empresa");
    var select = "";
    var data = '';
    var buscar_categorias = new XMLHttpRequest();
    buscar_categorias.open('POST', '_php/Buscar_categoria.php', true);
    buscar_categorias.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    buscar_categorias.send();

    buscar_categorias.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {

            data = JSON.parse(this.responseText); //aqui pega o retorno do ECHO  do php

            for (var a = 0; data[a] != null; a++) { //enquanto nao terminar de ter resultados ele continua salvando nos vetores
                select += "<option id='categoria_' "+ data[a].CAP_id + " value=" + data[a].CAP_id + ">" + data[a].CAP_nome + "</option>";
            }
            categoria_empresa.innerHTML = select;
        }

    }
}


function verificaForm(form) {
    var nome = document.getElementById("detalhesnome");
    var telefone = document.getElementById("detalhestelefone");
    var categorias = document.getElementById("categoria_empresa");

    if((nome.value === "" || nome.value === undefined || nome.value === null) && nome.placeholder === ''){
        alert("Digite o nome!");
        nome.focus();
        return false;
    }
    else if((telefone.value === "" || telefone.value === undefined || telefone.value === null) && telefone.placeholder === ''){
        alert("Digite o telefone!");
        telefone.focus();
        return false;
    }
    else if((categorias.value === "" || categorias.value === undefined || categorias.value === null) ){
        alert("Selecione pelo menos uma categoria!");
        categorias.focus();
        return false;
    }
    else{
        return true;

    }

}




*/
