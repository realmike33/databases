var db = require('../db/index.js').dbConnection;
var cacheData = require('../../classes/storage.js').data;

module.exports = {
  messages: {
    get: function (req, res) {
      if(req.method === 'GET'){
        if(req.url === '/messages'){
          res.writeHead(200, {'content-Type': 'application/json'})
          res.end(JSON.stringify(cacheData));
        }
      }
      /*db.connect();
      var queryString = 'SELECT * from messages';
      db.query(queryString, function(err, row, fields){
        if(err) throw err;
        for(var i in row){
          console.log(row[i].message);
        }
      db.release();
      })*/
    }, // a function which produces all the messages
    post: function (req, res) {
     if(req.method === 'POST'){
       if(req.url === '/messages'){
          // db.connect();
            if(cacheData.length >= 100){
              cacheData.results.shift();
            }
            cacheData.results.push(req.body);
            console.log('I am your cache: ', cacheData);
          res.writeHead(201, {'content-Type': 'application/json'});
          res.end('Posted homie!');
        }
        // var queryString = 'INSERT into messages (id, user_id, message, date_added) values (' + id + ',' + userId + ',' + message + ',' + new Date() + ',' + ')';
     }
    } // a function which  can be used to insert a message into the database
  },
  users: {
    // Ditto as above.
    get: function (req, res) {
      console.log('USERS: ', req.body);
    },
    post: function (req, res) {
      console.log('USERS: ', req.body)
    }
  }
};
