<?php
function update_bike($bike_number, $status) { 
   $conn=mysqli_connect('localhost','root','','bikeshare');
	if (mysqli_connect_errno())
	  {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }
	$query = "UPDATE bikes SET state='$status' WHERE bikes.id='$bike_number' AND state!='Unusable'";
	$result = mysqli_query($conn,$query);
	return json_encode($result);
}
header('Content-type: application/json');
$params=file_get_contents('php://input');
$data=json_decode($params);
@$bike_number=$data->bikeNumber;
@$status=$data->status;
echo(update_bike($bike_number, $status));
?>