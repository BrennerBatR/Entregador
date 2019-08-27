<?php

@ob_start();
session_start();
$login = $_SESSION["login"];
$username = $_SESSION["username"]; //criei essa variavel para imprimir no html
$empresa = $_SESSION["empresa"];
$categoria = $_SESSION["categoria"];
$EMP_id = $_SESSION["EMP_id"];
$token = $_SESSION["token"];

