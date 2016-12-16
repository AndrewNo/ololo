<?php 
	$users=array(
		'Alex' =>array('role'=>'admin','rating'=>5,'access'=>true),
		'Josef' =>"user",
		'John' =>array(1,2,3,4),
		);
		$str = json_encode($users);
		$new_array = json_decode($str);

		echo '<pre>';
		print_r(get_object_vars($new_array->Alex));
		echo '<pre>';

		echo "Josef is ".$new_array->Josef;





?>
