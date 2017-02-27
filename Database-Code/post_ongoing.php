<?php
function post_ongoing($user_id, $bike_number) { 
   $conn=mysqli_connect('localhost','root','','bikeshare');
	if (mysqli_connect_errno())
	  {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }
	$query = "INSERT INTO ongoing_share(user_id,bike_id) VALUES ('$user_id','$bike_number')";
	$result = mysqli_query($conn,$query);
	return json_encode($result);
}
header('Content-type: application/json');
$params=file_get_contents('php://input');
$data=json_decode($params);
@$user_id=$data->userid;
@$bike_number=$data->bikeNumber;
echo(post_ongoing($user_id,$bike_number));
?>