<?php

$recepient = "RemCarServices@yandex.ru";
$sitename = "RemCarServices";

$Name = trim($_POST['Name']);
$Phone = trim($_POST['Phone']);
$massage = "Имя: $Name \nТелефон: $Phone"
    
$pagetitle = "Обратный звонок";
mail($recepient,$pagetitle, $massage, "Content-type: text/plain; charset = \'utf-8\'\n Form: $recepient" );