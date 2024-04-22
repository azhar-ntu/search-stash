USE mydb;
DROP TABLE IF EXISTS vendor;
create table vendor (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  contact_info VARCHAR(255)
);

DROP TABLE IF EXISTS items;

create table items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  image_url VARCHAR(255),
  collection VARCHAR(255),
  vendor VARCHAR(255),
  quantity INT
);

DROP TABLE IF EXISTS collection;
create table collection (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  favourite BOOLEAN
);