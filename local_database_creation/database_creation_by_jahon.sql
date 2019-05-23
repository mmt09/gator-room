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
-- Table `gatorroom`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gatorroom`.`image` (
  `image_id` INT(10) NOT NULL AUTO_INCREMENT,
  `featured` VARCHAR(45) NULL DEFAULT NULL,
  `picture_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`image_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `gatorroom`.`landlord`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gatorroom`.`landlord` (
  `landlord_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(20) NULL DEFAULT NULL,
  `google_id` VARCHAR(250) NULL DEFAULT NULL,
  `picture` LONGTEXT NULL DEFAULT NULL,
  `about` MEDIUMTEXT DEFAULT NULL,
  `listing_id` INT(11) UNSIGNED,
  PRIMARY KEY (`landlord_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `gatorroom`.`landlord_has_listing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gatorroom`.`landlord_has_listing` (
  `landlord_has_listing_id` INT(11) NOT NULL AUTO_INCREMENT,
  `landlord_id` INT(10) UNSIGNED NOT NULL,
  `listing_id` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`landlord_has_listing_id`),
  INDEX `landlord_id_idx` (`landlord_id` ASC) VISIBLE,
  INDEX `listing_id_idx` (`listing_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `gatorroom`.`listing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gatorroom`.`listing` (
  `listing_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `postal_code` varchar(10) NOT NULL,
  `picture` longtext,
  `smoking_filter` tinyint(4) DEFAULT NULL,
  `pet_filter` tinyint(4) DEFAULT NULL,
  `parking_filter` tinyint(4) DEFAULT NULL,
  `laundry_filter` tinyint(4) DEFAULT NULL,
  `num_bedroom` int(11) NOT NULL,
  `num_bathroom` int(11) NOT NULL,
  `num_kitchen` int(11) NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `description` mediumtext NOT NULL,
  `image_1` mediumtext,
  `image_2` mediumtext,
  `image_3` mediumtext,
  `lat` decimal(9,6) DEFAULT NULL,
  `long` decimal(9,6) DEFAULT NULL,
  `approved` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`listing_id`),
  INDEX `image_id_idx` (`image_id` ASC) VISIBLE,
  CONSTRAINT `image_id`
    FOREIGN KEY (`image_id`)
    REFERENCES `gatorroom`.`image` (`image_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 37
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
  `password` BINARY(60) NULL DEFAULT NULL,
  `picture` BLOB NULL DEFAULT NULL,
  PRIMARY KEY (`student_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 27
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `gatorroom`.`student_has_listing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gatorroom`.`student_has_listing` (
  `student_has_listing_id` INT(11) NOT NULL AUTO_INCREMENT,
  `student_id` INT(10) UNSIGNED NOT NULL,
  `listing_id` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`student_has_listing_id`),
  INDEX `student_id_idx` (`student_id` ASC) VISIBLE,
  INDEX `listing_id_idx` (`listing_id` ASC) VISIBLE,
  CONSTRAINT `listing_id`
    FOREIGN KEY (`listing_id`)
    REFERENCES `gatorroom`.`listing` (`listing_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `student_id`
    FOREIGN KEY (`student_id`)
    REFERENCES `gatorroom`.`student` (`student_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
