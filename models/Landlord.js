const Sequelize = require('sequelize');

const { Model } = Sequelize;

module.exports = sequelize => {
  class Landlord extends Model {}

  Landlord.init(
    {
      // attributes
      landlord_id: {
        type: Sequelize.INTEGER({ length: 10, unsigned: true }),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: Sequelize.CHAR(50),
        allowNull: false,
      },
      first_name: {
        type: Sequelize.CHAR(45),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.CHAR(45),
        allowNull: false,
      },
      phone: {
        type: Sequelize.CHAR(20),
        allowNull: true,
      },
      google_id: {
        type: Sequelize.CHAR(250),
        allowNull: false,
      },
      picture: {
        type: Sequelize.TEXT('long'),
        allowNull: true,
      },
      about: {
        type: Sequelize.TEXT('medium'),
        allowNull: true,
      },
      listing_id: {
        type: Sequelize.INTEGER({ length: 11, unsigned: true }),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'landlord',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      // options
    }
  );
  // sequelize
  //   .authenticate()
  //   .then(() => {
  //     console.log('Connection has been established successfully.');
  //   })
  //   .catch(err => {
  //     console.error('Unable to connect to the database:', err);
  //   });
  return Landlord;
};
