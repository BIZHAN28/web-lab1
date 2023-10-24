<?php

error_reporting(-1);

$response = $x = $y = $r = $executed_at = $execution_time = $result = "";

$start_exec = microtime(1);

function validate($x, $y, $r): bool
{
  $y_values = [-4,-3,-2,-1,0,1,2,3,4];
  $r_values = [1,2,3,4,5];
  return $x >= -3 and $x <= 5 and in_array($y, $y_values) and in_array($r, $r_values);
}

function check_hit($x, $y, $r): string
{

    // check 1-st section - rect
    if ($x <= 0 and $y >= 0 and $x >= - $r / 2 and $y <= $r) return "Попадание";
    // check 2-nd section - 1/4 circle
    else if ($x >= 0 and $y <= 0 and (pow($x, 2) + pow($y, 2) <= pow($r, 2))) return "Попадание";
    // 3-rd section - noting / check 4-th section - triangle
    else if ($x <= 0 and $y <= 0 and abs($x) / $r + abs($y) / ($r/2) <= 1) return "Попадание";
    // everything else is miss
    else return "Промах";
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $x = $_GET["x-select"];
    $y = $_GET["y-select"];
    $r = $_GET["r-select"];

    if (validate($x,$y,$r)){
      $result = check_hit($x, $y, $r);
    } else {
      $result = "Ошибка введенных данных";
      http_response_code(400);
    }

    $executed_at = date(DATE_RFC2822);
    $execution_time = (microtime(1) - $start_exec) * 1000;

    $response .= $x .= ";";
    $response .= $y .= ";";
    $response .= $r .= ";";
    $response .= $result .= ";";
    $response .= $executed_at .= ";";
    $response .= number_format($execution_time, 6) . " ms";

    echo $response;
}
