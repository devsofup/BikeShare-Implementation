<?php
function post_report($user_id, $bike_number, $report_text) { 
   $conn=mysqli_connect('localhost','root','','bikeshare');
	if (mysqli_connect_errno())
	  {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }
	$query = "INSERT INTO reports(user_id,bike_id,reportinfo) VALUES ('$user_id','$bike_number','$report_text')";
	$result = mysqli_query($conn,$query);
	return json_encode($result);
}
header('Content-type: application/json');
$params=file_get_contents('php://input');
$data=json_decode($params);
@$report=$data->issue;
@$user_id=$data->userid;
@$bike_number=$data->bikeNumber;
echo(post_report($user_id,$bike_number,$report));
?>