var request = require("request");
var should = require("should");
var expect = require("chai").expect;

describe('Server', function() {
  it('should be up and running', function(done) {
    request.get('http://localhost:8080', function(err, response, body) {
      response.statusCode.should.equal(200);
      done();
    });
  });
});
