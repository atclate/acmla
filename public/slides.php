<?php
$dir    = 'img/gallery/2014 slides/thumbnails';
$files = scandir($dir);

$accept = $_SERVER['HTTP_ACCEPT'];
if (($accept != NULL) && (strpos($accept, 'application/json') !== false)) {
	header('Content-Type: application/json');
	echo "[";

	function format_json($a)
	{
		return "{\"src\":\"".$dir."/".$a."\", \"width\":\"648\", \"height\":\"250\"}"."\n";
	}
	$array = array_filter($files, function($item) {return $item != "." && $item != "..";});
	echo join(',', array_map("format_json", $array));
	echo "]";
} else {
  foreach (array_filter($files, function($item) {return $item != "." && $item != "..";}) as &$file)
  	echo "<img src=\"".$dir."/".$file."\" width=\"648\" height=\"250\"/>"."\n";
}

?>

