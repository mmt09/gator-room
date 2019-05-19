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
        allowNull: false,
      },
      smoking_filter: {
        type: Sequelize.TINYINT('4'),
        allowNull: false,
      },
      pet_filter: {
        type: Sequelize.TINYINT('4'),
        allowNull: false,
      },
      parking_filter: {
        type: Sequelize.TINYINT('4'),
        allowNull: false,
      },
      laundry_filter: {
        type: Sequelize.TINYINT(4),
        allowNull: false,
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
      image_id: {
        type: Sequelize.INTEGER(10),
        allowNull: true,
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
