<?php
# https://www.ine.es/jaxiT3/Tabla.htm?t=22344
$txt = file_get_contents('data/22344sc.csv');
$arrLines = explode("\n", $txt);
$arrFinal = array();
$arrFinal['dates'] = explode(';',trim($arrLines[0],';'));
$arrFinal['names'] = array();
$arrFinal['data'] = array();
for($n_line=1; $n_line<sizeof($arrLines); $n_line++){
	$line = $arrLines[$n_line];
	if ($n_line<13){
		$arrLine = explode(';', $line);
		array_push($arrFinal['names'], utf8_encode(substr($arrLine[0], 3)));
		$arrLine = explode(';', $line);
		$arrData = array();
		for ($j=1; $j<sizeof($arrLine)-1; $j++){
			array_push($arrData, intval(str_replace(',','.',$arrLine[$j])));
		}
		array_push($arrFinal['data'], $arrData);
	}
}
echo 'var json='.json_encode($arrFinal,JSON_NUMERIC_CHECK);
#print_r($arrFinal);
