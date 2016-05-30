var request = require("request");
var should = require("should");
var expect = require("chai").expect;
var models = require('../../app/private/server/models/index');
var Sequelize = require('sequelize');

beforeEach(function(done) {
  models.User.sync({ force : true }) // drops table and re-creates it
    .then(function() {
      done(null);
    })
    .catch(function(err) {
      console.log("Failed", err);
    });
});

describe('Adding user to DB', function() {

  it('should sign up a user to the database', function(done) {
    var newUser = { username: "Test User", password: "password" };

    models.User.create(newUser).then(function() {
      models.User.findAll().then(function(users) {
        expect(users.length).to.equal(1);
        done();
      });
    }).catch(function(err) {
      console.log("Failed", err);
    });

  });
});
