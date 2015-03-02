{"filter":false,"title":"database.js","tooltip":"/lib/database.js","undoManager":{"mark":50,"position":50,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":66},"action":"insert","lines":["var pg = require('pg');","var conString = \"postgres://username:password@localhost/database\";"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":66},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["  pg.connect(conString, function(err, client, done) {","","    var handleError = function(err) {","      // no error occurred, continue with the request","      if(!err) return false;","","      // An error occurred, remove the client from the connection pool.","      // A truthy value passed to done will remove the connection from the pool","      // instead of simply returning it to be reused.","      // In this case, if we have successfully received a client (truthy)","      // then it will be removed from the pool.","      done(client);","      res.writeHead(500, {'content-type': 'text/plain'});","      res.end('An error occurred');","      return true;","    };",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":4,"column":2},"action":"remove","lines":["  "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"remove","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"remove","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"remove","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"remove","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"remove","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["    "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"remove","lines":["    "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"remove","lines":["    "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"remove","lines":["    "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":48},"end":{"row":4,"column":49},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":48},"end":{"row":4,"column":49},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":48},"end":{"row":4,"column":49},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":49},"end":{"row":4,"column":50},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":50},"end":{"row":4,"column":51},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":51},"end":{"row":4,"column":52},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":52},"end":{"row":4,"column":53},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":1},"end":{"row":19,"column":2},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":3},"end":{"row":19,"column":4},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":4},"end":{"row":19,"column":5},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":11},"end":{"row":4,"column":13},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["i"]},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["t"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":23},"end":{"row":4,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425323558219,"hash":"53f44eebbd601126dae6575067ea659373d6bafb"}