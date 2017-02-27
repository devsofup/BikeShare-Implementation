CREATE TABLE articles (
id INT AUTO_INCREMENT,
name VARCHAR(50),
content TEXT,
created_at DATETIME,
updated_at DATETIME,
PRIMARY KEY(id)
);

CREATE TABLE users(
id INT AUTO_INCREMENT,
email VARCHAR(20),
encrypted_password VARCHAR(32),
reset_password_token VARCHAR(32),
reset_password_sent_at DATETIME,
remember_created_at DATETIME,
sign_in_count INT,
current_sign_in_at DATETIME,
last_sign_in_at DATETIME,
current_sign_in_ip VARCHAR(20),
last_sign_in_ip VARCHAR(20),
created_at DATETIME,
updated_at DATETIME,
role INT,
first_name VARCHAR(30),
middle_name VARCHAR(20),
last_name VARCHAR(20),
user_name VARCHAR(20),
PRIMARY KEY(id)
);

CREATE TABLE bikes (
id INT AUTO_INCREMENT,
state VARCHAR(10),
location VARCHAR(20),
created_at DATETIME,
updated_at DATETIME,
PRIMARY KEY(id)
);

CREATE TABLE location_records(
id INT AUTO_INCREMENT,
location VARCHAR(20),
from_time DATETIME,
to_time DATETIME,
average_bikes INT,
PRIMARY KEY(id)
);

CREATE TABLE ongoing_share(
id INT AUTO_INCREMENT,
user_id INT,
bike_id INT,
departure_time DATETIME,
departure_loc VARCHAR(20),
route VARCHAR(20),
PRIMARY KEY(id),
FOREIGN KEY (user_id)
	REFERENCES users(id),
FOREIGN KEY (bike_id)
	REFERENCES bikes(id)
);

CREATE TABLE reports(
id INT AUTO_INCREMENT,
user_id INT,
bike_id INT,
reportinfo TEXT,
created_at DATETIME,
updated_at DATETIME,
PRIMARY KEY(id),
FOREIGN KEY (user_id)
	REFERENCES users(id),
FOREIGN KEY (bike_id)
	REFERENCES bikes(id)
);

CREATE TABLE share_history(
id INT AUTO_INCREMENT,
user_id INT,
bike_id INT,
departure_time DATETIME,
departure_loc VARCHAR(20),
arrival_time DATETIME,
arrival_loc VARCHAR(20),
route VARCHAR(20),
PRIMARY KEY(id),
FOREIGN KEY (user_id)
	REFERENCES users(id),
FOREIGN KEY (bike_id)
	REFERENCES bikes(id)
);