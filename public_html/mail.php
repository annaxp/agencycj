<?
$botId = "2111200320:AAGuezHGXwnsBGtw6w8LE51SI1z1QZ9Rbsg";
$chatId = "-701885969";
$name = $_GET["name"];
$phone = $_GET["phone"];
$domen = ($_SERVER["HTTPS"] ? "https://" : "http://").$_SERVER["HTTP_HOST"];
$message = "<b>Заявка с {$domen}</b>\n<b>Имя</b>: {$name}\n<b>Телефон</b>: {$phone}";

$data = array(
  "chat_id" => $chatId,
  "parse_mode" => "html",
  "text" => $message
);
$url = "https://api.telegram.org/bot".$botId."/sendMessage";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data); 
 
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HEADER, false);
$html = curl_exec($ch);
curl_close($ch);
?>