<?php
$dir    = 'img/gallery/2014 slides/thumbnails';
$files = scandir($dir);

foreach (array_filter($files, function($item) {return $item != "." && $item != "..";}) as &$file)
	echo "<img src=\"".$dir."/".$file."\" width=\"648\" height=\"250\"/>"."\n";
?>