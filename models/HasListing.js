const Sequelize = require('sequelize');

const { Model } = Sequelize;

module.exports = sequelize => {
  class HasListing extends Model {}

  HasListing.init(
    {
      // attributes
      landlord_has_listing_id: {
        type: Sequelize.INTEGER({ length: 11 }),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      landlord_id: {
        type: Sequelize.INTEGER({ length: 10, unsigned: true }),
        allowNull: false,
      },
      listing_id: {
        type: Sequelize.INTEGER({ length: 10, unsigned: true }),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'landlord_has_listing',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      // options
    }
  );

  return HasListing;
};
