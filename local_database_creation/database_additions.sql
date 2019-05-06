use gatorroom;

ALTER TABLE `gatorroom`.`student_has_listing` 
ADD INDEX `student_id_idx` (`student_id` ASC),
ADD INDEX `listing_id_idx` (`listing_id` ASC);
;
ALTER TABLE `gatorroom`.`student_has_listing` 
ADD CONSTRAINT `student_id`
  FOREIGN KEY (`student_id`)
  REFERENCES `gatorroom`.`student` (`student_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `listing_id`
  FOREIGN KEY (`listing_id`)
  REFERENCES `gatorroom`.`listing` (`listing_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  CREATE TABLE `gatorroom`.`landlord_has_listing` (
  `landlord_has_listing_id` INT(11) NOT NULL AUTO_INCREMENT,
  `landlord_id` INT(10) UNSIGNED NOT NULL,
  `listing_id` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`landlord_has_listing_id`),
  INDEX `landlord_id_idx` (`landlord_id` ASC),
  INDEX `listing_id_idx` (`listing_id` ASC),
  CONSTRAINT `landlord_id`
    FOREIGN KEY (`landlord_id`)
    REFERENCES `gatorroom`.`landlord` (`landlord_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `listing_id2`
    FOREIGN KEY (`listing_id`)
    REFERENCES `gatorroom`.`listing` (`listing_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
    ALTER TABLE `gatorroom`.`listing` 
ADD COLUMN `image_id` INT(10) NULL AFTER `amount`,
ADD INDEX `image_id_idx` (`image_id` ASC);
;
ALTER TABLE `gatorroom`.`listing` 
ADD CONSTRAINT `image_id`
  FOREIGN KEY (`image_id`)
  REFERENCES `gatorroom`.`image` (`image_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

