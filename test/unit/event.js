var expect = require("expect.js");
var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres://localhost/socialcal_test", {logging:false});
var eventModel = require("../../server/models/events");

describe("eventModel", function() {

  beforeEach(function (done) {
    sequelize.sync({ force: true }).success(function() {
      done();
    });
  });

  it("Has a title", function() {
    var newEvent = { title: "Fake Event", date: "13/05/16", time: "19:00:00"};

    eventModel.Events.create(newEvent).success(function() {
      expect()
    })





  });
});
