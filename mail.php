<?php

$recepient = "voyage-48@mail.ru";
$sitename = "Фотобудка, фотозеркало и фотопринтер";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);
$hours = trim($_GET["hours"]);
$calendar =trim($_GET["calendar"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Город: $name \nТелефон: $phone \nНа время: $hours \nДата: $calendar";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
