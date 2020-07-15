var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native
var conString = "postgres://tkwqamri:XWb6o2y_MnE0JTBhSkWpIGSee0602zh_@rogue.db.elephantsql.com:5432/tkwqamri" //Can be found in the Details page
var client = new pg.Client(conString);

class Spaces {
  constructor() {
    }
    
    list (){
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query("SELECT * FROM spaces", function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
}
)}
};
module.exports = new Spaces()
module.exports.list();
