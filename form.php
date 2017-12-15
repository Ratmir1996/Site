<?php

$recepient = "ratmir.martirosov@yandex.com";
$sitename = "RemCar";

$name = trim($_POST["mane"]);
$phone = trim($_POST["phone"]);
$massege = "Имя: $name\nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $massege, "Content-type: text/plain; charset= \"utf-8\"\n From: $recepient" );
?>