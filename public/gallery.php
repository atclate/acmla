<?php
global $dir;
global $sub;
$dir    = 'img/gallery';
$files_in_root = scandir($dir);

foreach (array_filter(array_reverse($files_in_root, true), function($item) {
		global $dir;
		return (is_dir($dir."/".$item) && $item != "." && $item != "..");
	}) as &$folder) {
		$sub = $dir."/".$folder;
		$files_in_sub = scandir($sub);
		foreach (array_filter($files_in_sub, function($item_in_sub) {
				global $sub;
				return (!is_dir($sub."/".$item_in_sub));
			}) as &$file) {
			echo "			<a href=\"".$sub."/".$file."\" title=\"".$file."\" data-gallery>"; //Actual image
			echo "				<div><img src=\"".$sub."/thumbnails/".$file."\" alt=\"".$file."\" class=\"img-responsive\"></div>"; //Thumbnail
			echo "			</a>";
		}
}
?>