var db = require('../db/index.js').dbConnection;

module.exports = {
  messages: {
    get: function () {
      db.connect();
      var queryString = 'SELECT * from messages';
      db.query(queryString, function(err, row, fields){
        if(err) throw err;
        for(var i in row){
          console.log(row[i].message);
        }
      })
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },
  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
