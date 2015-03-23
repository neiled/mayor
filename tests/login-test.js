const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 8080);

describe('User visits home page', function() {
    
  this.timeout(0);

  const browser = new Browser();

  before(function() {
    return browser.visit('/');
  });

  describe('Loading homepage', function() {

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see welcome page', function() {
      browser.assert.text('title', 'Model Mayor');
    });
    
    it('should see login box', function() {
      browser.assert.element('.panel-title');
    });    
  });

  after(function() {
    browser.destroy();
  });

});

