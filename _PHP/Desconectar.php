<?php
@ob_start();
session_start();
$_SESSION = NULL;
session_destroy();
header("location: ../index.html");

