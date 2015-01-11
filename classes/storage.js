var db = require('../server/db/index.js');

var data = [];

exports.data = {
  results: data
};

data.forEach(function(obj){
  var username = obj.username;
  var message = obj.text;
  db.query("insert into messages (user_id, message, date_added) values ( 'Mike', 'asodijas', '2014-12-02 03:30:00')", function(err, row){
    if(err) throw err
    console.log(row);
  });
});

setTimeout(function(){

db.query('SELECT * FROM messages', function(err, rows){
  if(err) throw err
  console.log(rows);
});

}, 5000)
// db.query("INSERT into messages (message, date_added) values ('YOOOOO', '2014-12-10 03:30:00')", function(err, rows){
//   if(err) throw err

//   db.query('SELECT * FROM messages', function(err, rows){
//     if(err) throw err

//     console.log(rows);
//   })
// })


// var setData = function(query){
//   db(function(err, connection){
//     if(err){
//       console.log(err);
//     } else{
//       connection.query(query, function(err, rows){
//         console.log(rows);
//         connection.release();
//       })
//     }
//   })
// }

// console.log(setData('SELECT * FROM messages'));

