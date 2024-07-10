-- Create a new database if it doesn't exist
CREATE DATABASE IF NOT EXISTS `mydatabase`;

-- Use the database
USE `mydatabase`;

-- Create a table for storing user information
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL
);
