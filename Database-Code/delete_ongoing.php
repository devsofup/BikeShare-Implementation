<?php
function delete_ongoing($user_id) { 
   $conn=mysqli_connect('localhost','root','','bikeshare');
	if (mysqli_connect_errno())
	  {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }
	$query = "DELETE FROM ongoing_share WHERE user_id='$user_id'";
	$result = mysqli_query($conn,$query);
	return json_encode($result);
}
header('Content-type: application/json');
$params=file_get_contents('php://input');
$data=json_decode($params);
@$user_id=$data->userid;
echo(delete_ongoing($user_id));
?>