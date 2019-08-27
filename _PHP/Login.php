<?php
@ob_start();
session_start();


$_SESSION["username"] = $_POST["nome"];
$_SESSION["empresa"] = $_POST["nomeEmpresa"];
$_SESSION["categoria"] = $_POST["categoria"];
$_SESSION["EMP_id"] = $_POST["EMP_id"];
$_SESSION["login"] = $_POST["login"];
$_SESSION["token"] = $_POST["token"];





