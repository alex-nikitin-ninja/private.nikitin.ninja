<?php

header("Content-type: text/css", true);

function listdirs($dir) {
	static $alldirs = array();
	$dirs = glob($dir . '/*');
	if (count($dirs) > 0) {
		foreach ($dirs as $d){
			$alldirs[] = $d;
		}
	}
	foreach ($dirs as $dir){
		listdirs($dir);
	}
	return $alldirs;
}

$cssContent = '';
$files = listdirs('..');
foreach ($files as $k => $oneFile) {
	$pathinfo = pathinfo($oneFile);
	if( isset($pathinfo['extension']) && strtolower($pathinfo['extension'])=='css'){
		// echo file_get_contents($oneFile)."\n";
		$cssContent .= file_get_contents($oneFile)."\n";
	}
}

// Remove comments
$cssContent = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $cssContent);
// Remove space after colons
$cssContent = str_replace(': ', ':', $cssContent);
// Remove whitespace
$cssContent = str_replace(array("\r", "\n", "\t", '  ', '    ', '    '), '', $cssContent);

echo $cssContent;

?>