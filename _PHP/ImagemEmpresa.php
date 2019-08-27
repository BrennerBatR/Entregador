<?php
/**
 * Created by PhpStorm.
 * User: brenner
 * Date: 26/03/19
 * Time: 16:36
 */

@ob_start();
session_start();

ini_set('display_errors', 0); //OCULTA TODOS OS ERROS


$diretorioRecebido = $_POST["auxDiretorio"];
$destinocorreto = "erro";
$EMP_id = $_POST["EMP_id"];


//http://entregadordelivery.com.br/upload/4/logo/logoEMP4.png
//3                       4   5   6        7
$aux = explode("/", $diretorioRecebido); //quebra a url pelo "/"
$diretorio = "../" . $aux[3] . "/" . $aux[4] . "/" . $aux[5] . "/" . $aux[6]; //montando o diretorio que esta para funcionar o UNLINK
$data = array();
$destino = "";

$arquivo = isset($_FILES['arquivo']) ? $_FILES['arquivo'] : false;
if ($arquivo['name'] !== null && $arquivo['name'] !== '') {
    if (!file_exists("$diretorio") || $diretorio == "..////") {

        $caminho = '../upload/' . $EMP_id;
        if (!file_exists("$caminho")) {
            if (mkdir($caminho)) { //cria a pasta pois se nao cadastrar a imagem válida, a pasta esta criada para colocar depois !
                chmod("$caminho", 0777);
                $caminho .= "/logo";

                if (mkdir($caminho)) {
                    chmod("$caminho", 0777);
                    $data["success"] = 1;
                } else {
                    $data["success"] = -2;
                }

            } else {
                $data["success"] = -3;
            }
        } else {
            $caminho = $caminho . "/logo";
            if (!file_exists("$caminho")) {
                if (mkdir($caminho)) {
                    chmod("$caminho", 0777);
                    $data["success"] = 2;
                } else {
                    $data["success"] = -5;
                }
            } else {
                $data["success"] = -6;
            }


        }
        $destino = '../upload/' . $EMP_id . "/logo/" . $EMP_id . "_" . uniqid(time()) . ".png";

    } else {

        if (unlink($diretorio)) {
            $destino = '../upload/' . $EMP_id . "/logo/" . $EMP_id . "_" . uniqid(time()) . ".png";
            $data["success"] = 3;

        }
    }
    $data["destino"] = $destino;
    if ($destino != "" && $destino != null) { //chegando aqui temos certeza que tem o destino, entao posso mover a imagem !
        if (move_uploaded_file($_FILES['arquivo']['tmp_name'], $destino)) {
            // Upload efetuado com sucesso, exibe uma mensagem e um link para o arquivo
            $destinoaux = substr($destino, 3); //retira o ../ do começo do endereço
            $destinocorreto = "http://" . $_SERVER["SERVER_NAME"] . "/" . $destinoaux;
            $data["success"] = 100;
        } else {
            $data["success"] = -6;

        }
    } else
        $data["success"] = -7;

} else {
    //$data['success'] = 2; // nao tem imagem
    $data["success"] = -100;
}

$data["url"] = $destinocorreto;
echo json_encode($data);
