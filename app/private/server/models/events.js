'use strict';
module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define('Events', {
    title: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Events;
};
