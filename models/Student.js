const Sequelize = require('sequelize');

const { Model } = Sequelize;

module.exports = sequelize => {
  class Student extends Model {}

  Student.init(
    {
      // attributes
      student_id: {
        type: Sequelize.INTEGER({ length: 10, unsigned: true }),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      sfsu_email: {
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
        allowNull: false,
      },
      username: {
        type: Sequelize.CHAR(16),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(60, true),
      },
      picture: {
        type: Sequelize.BLOB,
      },
    },
    {
      sequelize,
      modelName: 'student',
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
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
  // Student.findAll().then(students => {
  //   console.log('All students:', JSON.stringify(students, null, 4));
  // });
};
