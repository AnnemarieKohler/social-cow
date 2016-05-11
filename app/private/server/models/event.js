'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Event.hasMany(models.Comment);
        Event.belongsTo(models.User);
      }
    }
  });
  return Event;
};
