'use strict';
module.exports = function(sequelize, DataTypes) {
  var Attendee = sequelize.define('Attendee', {
    UserId: DataTypes.INTEGER,
    EventId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Attendee.belongsTo(models.User);
        Attendee.belongsTo(models.Event);
      }
    }
  });
  return Attendee;
};
