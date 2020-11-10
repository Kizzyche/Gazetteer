<?php

$data = file_get_contents("countryBordersGeo.json");
$data = json_decode($data, true);
$output = $data;
asort($output);

// header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);
?>