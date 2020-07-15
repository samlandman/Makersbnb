var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native
var conString = "postgres://tkwqamri:XWb6o2y_MnE0JTBhSkWpIGSee0602zh_@rogue.db.elephantsql.com:5432/tkwqamri" //Can be found in the Details page
var client = new pg.Client(conString);

class Spaces {
  constructor() {}

  add(title, description, image, location, pricePerNight) {
    console.log("before connecting to client")
    client.connect(function (err) {
      console.log("connected to client")
      if (err) {
        return console.error('could not connect to postgres', err);
      }
      // client.query("SELECT * FROM spaces", function(err, result) {

      client.query(`INSERT INTO spaces(title, description, image, location, pricePerNight) VALUES('${title}', '${description}', '${image}', '${location}', '${pricePerNight}');`,
        function (err, result) {
          if (err) {
            return console.error('error running query', err);
          }
          // console.log(result);
          // >> output: 2018-08-23T14:02:57.117Z
          console.log("before disconnecting to client")

          client._connected = false ;
          // client.end();
          console.log("after disconnecting to client")

        });
    })
  }
};
module.exports = new Spaces()
module.exports.add();
