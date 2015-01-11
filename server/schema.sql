CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  id INT,
  user VARCHAR(100)
);

CREATE TABLE messages (
  id INT,
  user_id VARCHAR(20),
  message TEXT,
  date_added DATETIME
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

