<?php

declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use PhpMqtt\Client\Examples\Shared\SimpleLogger;
use PhpMqtt\Client\Exceptions\MqttClientException;
use PhpMqtt\Client\MqttClient;
use Psr\Log\LogLevel;

$server = "192.168.2.212";
$port = 1883;
$client_id = "php-mqtt";

$mqtt = new \PhpMqtt\Client\MqttClient($server, $port, $client_id);

if(isset($_POST["data"])) {
    $json = $_POST["data"];
    $mqtt->connect();
    $mqtt->publish('picloud/test', $json);
    $mqtt->disconnect();
}

?>