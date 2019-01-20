<?php

$recepient = "habipovna@mail.ru";
$sitename = "K. Marks, 16";

$mail = trim($_POST["mail"]);
$name = trim($_POST["name"]);
$comment = trim($_POST["comment"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nE-mail: $mail\nСообщение: $comment";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");