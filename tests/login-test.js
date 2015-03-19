const Browser = require('zombie');

Browser.localhost('example.com', 8080);

function waitForPageLoad(window)
{
    window.document.querySelector('.page-header');
}

describe('User visits signup page', function() {

  const browser = new Browser();

//   before(function(done) {
//     browser.visit('/', done);
//   });

  describe('submits form', function() {

//     before(function(done) {
//       browser
//         .fill('email',    'zombie@underworld.dead')
//         .fill('password', 'eat-the-living')
//         .pressButton('Sign Me Up!', done);
//     });

    // it('should be successful', function(done) {
    //   browser.visit('/').then(
    //     browser.assert.success()
    //   ).then(done,done);
    // });

    // it('should see welcome page', function(done) {
    //   browser.wait(waitForPageLoad, function() {
    //       browser.assert.text('title', 'Model Mayor');
    //       browser.assert.text('.page-header', 'Welcome home.');          
    //       done();
    //   });
    // });
  });

//   after(function() {
//     browser.destroy();
//   });
});