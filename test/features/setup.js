request = require("request");
request = require("should");

describe('Setup', function() {
  it('should display hello world on the page', function(done) {
    request.get('/', function(err, response, body) {
      response.statusCode.should.equal(200);
      body.should.include("Hello World");
      done();
    });
  });
});
