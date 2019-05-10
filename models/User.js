const Sequelize = require('sequelize');

const { Model } = Sequelize;

module.exports = sequelize => {
  class User extends Model {}

  User.init(
    {
      // attributes
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        // allowNull defaults to true
      },
    },
    {
      sequelize,
      modelName: 'student',
      freezeTableName: true,
      // options
    }
  );
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  // Find all users
  User.findAll().then(users => {
    console.log('All users:', JSON.stringify(users, null, 4));
  });
};
