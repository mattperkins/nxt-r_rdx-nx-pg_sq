'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
      hooks: {
        beforeCreate: (user, options) => {
          // hash password and salt after 10 rounds
          // apply password to user object
          return bcrypt.hash(user.password, bcrypt.genSaltSync(10)).then(hashedPw => {
            user.password = hashedPw
          })
        }
      }
    });
  User.associate = function (models) {
    // associations can be defined here
  };
  User.prototype.comparePassword = async (suppliedPassword, actualPassword, cb) => {
    return await bcrypt.compare(suppliedPassword, actualPassword, (err, isMatch) => {
      if (err) cb(err)
      cb(null, isMatch)
    })
  }

  return User;
};