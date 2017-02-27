<?php
function check_ongoing($user_id) { 
   $conn=mysqli_connect('localhost','root','','bikeshare');
	if (mysqli_connect_errno())
	  {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }
	$query = "SELECT * from ongoing_share WHERE user_id='$user_id'";
	$result = mysqli_query($conn,$query);
	$data = array();
		while($row = mysqli_fetch_assoc($result)) {
		  $data[] = $row;
		}
	return json_encode($result->num_rows);
}
header('Content-type: application/json');
$params=file_get_contents('php://input');
$data=json_decode($params);
@$user_id=$data->userid;
echo(check_ongoing($user_id));
?>