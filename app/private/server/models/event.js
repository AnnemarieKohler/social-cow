'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME
  }, {
    classMethods: {
      associate: function(models) {
        Event.hasMany(models.Comment);
      }
    }
  });
  return Event;
};
