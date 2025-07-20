<?php
	$mail = "admin@lis.su";
	$subject = "Новая заявка в AXIOSTV на установку видеодомофона!";
	$message = implode("\r\n", $_POST);
	$m = mail($mail, $subject, $message, "Content-type:text/plain; charset = UTF-8");
	echo $m ? '{"statusCode":200,"message":"Заявка на подключение создана"}' : '{"statusCode":500,"message":"Приносим извинения в связи с техническими неполадками сообщение отправить неудалось."}';
?>