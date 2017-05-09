<?php
function update_location($bike_number, $location) { 
   $conn=mysqli_connect('localhost','root','','bikeshare');
	if (mysqli_connect_errno())
	  {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }
	$query = "UPDATE bikes SET location='$location' WHERE bikes.id='$bike_number'";
	$result = mysqli_query($conn,$query);
	return json_encode($result);
}
header('Content-type: application/json');
$params=file_get_contents('php://input');
$data=json_decode($params);
@$bike_number=$data->bikeNumber;
@$location=$data->location;
echo(update_location($bike_number, $location));
?>