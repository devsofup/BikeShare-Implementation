<?php
function get_bikes() { 
   $conn=mysqli_connect('localhost','root','','bikeshare');
	if (mysqli_connect_errno())
	  {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }
	$query = "SELECT * from bikes WHERE state='Available'";
	$result = mysqli_query($conn,$query);
	$data = array();
		while($row = mysqli_fetch_assoc($result)) {
		  $data[] = $row;
		}
	return json_encode($data);
}
header('Content-type: application/json');
echo(get_bikes());
?>