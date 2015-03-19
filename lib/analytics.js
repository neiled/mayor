
module.exports.addEvent = function(event_name, properties) {
  var Keen = require("keen-js");
  var k_client = new Keen({
      projectId: process.env.KEEN_PROJECTID,
      writeKey: process.env.KEEN_WRITEKEY
  });

  // send single event to Keen IO
  k_client.addEvent(event_name, properties, function(err, res) {
      if (err) {
          console.log("Oh no, an error!");
      } else {
          console.log("Hooray, it worked!");
      }
  });

};
