<?php

$recepient = "RemCarServices@yandex.ru";
$sitename = "Boutibule";

$Name = trim($_POST['Name']);
$Phone = trim($_POST['Phone']);
$massage = "Имя: $Name \nТелефон: $Phone";
    
$pagetitle = "Звонок от клиента ";
mail($recepient, $pagetitle, $massage, "Content-type: text/plain; charset = \'utf-8\'\n Form: $recepient" );
?>