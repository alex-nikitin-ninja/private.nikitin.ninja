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

$files = listdirs('..');
foreach ($files as $k => $oneFile) {
	$pathinfo = pathinfo($oneFile);
	if( isset($pathinfo['extension']) && strtolower($pathinfo['extension'])=='css'){
		echo file_get_contents($oneFile)."\n";
	}
}

?>