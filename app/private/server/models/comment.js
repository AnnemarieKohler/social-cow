'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    body: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    EventId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.User, { as: 'Author' });
        Comment.belongsTo(models.Event, { foreignKey: 'EventsId' });      }
    }
  });
  return Comment;
};
