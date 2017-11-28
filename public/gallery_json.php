<?php
global $dir;
global $sub;
global $result;
$dir    = 'img/gallery';
$files_in_root = scandir($dir);

$result = [];
$allAlbums = array_filter($files_in_root, function($item) {
	global $dir;
	return (is_dir($dir."/".$item) && $item != "." && $item != "..");
});
sort($allAlbums);
foreach ($allAlbums as $index=>$folder) {
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
		$attributes = array('folder-name'=>$sub, 'cover-img'=>$pictures[0],'pictures'=>$pictures);
		array_push($result, array('type'=>"albums", 'id'=>strval($index), 'attributes'=>$attributes));
}
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
echo json_encode(array('data' => $result));
?>

