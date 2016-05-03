var request = require("request");
var should = require("should");
var expect = require("chai").expect;

describe('Setup', function() {
  it('should display hello world on the page', function(done) {
    request.get('http://localhost:3000', function(err, response, body) {
      response.statusCode.should.equal(200);
      expect(body).to.include("Hello World");
      done();
    });
  });
});
