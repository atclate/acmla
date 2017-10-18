<?php
global $dir;
global $sub;
global $result;
$dir    = 'img/gallery';
$files_in_root = scandir($dir);

$result = [];
foreach (array_filter(array_reverse($files_in_root, true), function($item) {
		global $dir;
		return (is_dir($dir."/".$item) && $item != "." && $item != "..");
	}) as &$folder) {
		$sub = $dir."/".$folder;
		$files_in_sub = scandir($sub);
		$pictures = [];
		foreach (array_filter($files_in_sub, function($item_in_sub) {
				global $sub;
				return (!is_dir($sub."/".$item_in_sub));
			}) as &$file) {
			global $pictures;
			array_push($pictures, $sub."/".$file);
		}
		array_push($result, array('folderName'=>$sub, 'pictures'=>$pictures));
}
header('Content-Type: application/json');
echo json_encode($result);
?>

