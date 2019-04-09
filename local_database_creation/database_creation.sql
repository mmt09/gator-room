-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema gatorroom
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gatorroom
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gatorroom` ;
USE `gatorroom` ;

-- -----------------------------------------------------
-- Table `gatorroom`.`landlord`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gatorroom`.`landlord` (
  `landlord_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` INT(11) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `username` VARCHAR(16) NULL DEFAULT NULL,
  `password` VARCHAR(40) NULL DEFAULT NULL,
  `picture` BLOB NULL DEFAULT NULL,
  `listing_id` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`landlord_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `gatorroom`.`listing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gatorroom`.`listing` (
  `listing_id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `postal_code` VARCHAR(10) NULL DEFAULT NULL,
  `picture` LONGTEXT NULL DEFAULT NULL,
  `smoking_filter` TINYINT(4) NOT NULL,
  `pet_filter` TINYINT(4) NOT NULL,
  `parking_filter` TINYINT(4) NOT NULL,
  `laundry_filter` TINYINT(4) NOT NULL,
  `num_bedroom` INT(11) NOT NULL,
  `num_bathroom` INT(11) NOT NULL,
  `num_kitchen` INT(11) NOT NULL,
  `amount` DECIMAL(10,0) NOT NULL,
  PRIMARY KEY (`listing_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 27
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `gatorroom`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gatorroom`.`student` (
  `student_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `sfsu_email` VARCHAR(50) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `username` VARCHAR(16) NOT NULL,
  `password` VARCHAR(40) CHARACTER SET 'latin1' COLLATE 'latin1_bin' NULL DEFAULT NULL,
  `picture` BLOB NULL DEFAULT NULL,
  PRIMARY KEY (`student_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
