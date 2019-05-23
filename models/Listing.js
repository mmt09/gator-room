const Sequelize = require('sequelize');

const { Model } = Sequelize;

module.exports = sequelize => {
  class Listing extends Model {}

  Listing.init(
    {
      // attributes
      listing_id: {
        type: Sequelize.INTEGER({ length: 11, unsigned: true }),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      address: {
        type: Sequelize.CHAR(50),
        allowNull: false,
      },
      city: {
        type: Sequelize.CHAR(50),
        allowNull: false,
      },
      postal_code: {
        type: Sequelize.CHAR(10),
        allowNull: false,
      },
      picture: {
        type: Sequelize.TEXT('long'),
        allowNull: true,
      },
      smoking_filter: {
        type: Sequelize.TINYINT('4'),
        allowNull: true,
      },
      pet_filter: {
        type: Sequelize.TINYINT('4'),
        allowNull: true,
      },
      parking_filter: {
        type: Sequelize.TINYINT('4'),
        allowNull: true,
      },
      laundry_filter: {
        type: Sequelize.TINYINT(4),
        allowNull: true,
      },
      num_bedroom: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      num_bathroom: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      num_kitchen: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      amount: {
        type: Sequelize.DECIMAL(10, 0),
        allowNull: false,
      },
      description: {
        type: Sequelize.DECIMAL(10, 0),
        allowNull: false,
      },
      image_1: {
        type: Sequelize.TEXT('medium'),
        allowNull: true,
      },
      image_2: {
        type: Sequelize.TEXT('medium'),
        allowNull: true,
      },
      image_3: {
        type: Sequelize.TEXT('medium'),
        allowNull: true,
      },
      lat: {
        type: Sequelize.DECIMAL(9, 6),
        allowNull: true,
      },
      long: {
        type: Sequelize.DECIMAL(9, 6),
        allowNull: true,
      },
      approved: {
        type: Sequelize.TINYINT(4),
        defaultValue: 0,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'listing',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      // options
    }
  );
  return Listing;
};
