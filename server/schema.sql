CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  id VARCHAR(10),
  user VARCHAR(100)
);

CREATE TABLE messages (
  userId VARCHAR(10),
  message TEXT
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

