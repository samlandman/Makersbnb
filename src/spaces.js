class Spaces {
  constructor(id, title, description, image, location, pricePerNight, username) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.location = location;
    this.pricePerNight = pricePerNight;
    this.username = username;
  }

  static add(title, description, image, location, pricePerNight, username) {
    var pg = require('pg');
    var conString = "postgres://tkwqamri:XWb6o2y_MnE0JTBhSkWpIGSee0602zh_@rogue.db.elephantsql.com:5432/tkwqamri" //Can be found in the Details page
    var client = new pg.Client(conString);

    client.connect(function (err) {
      if (err) {
        return console.error('could not connect to postgres', err);
      }

      client.query(`INSERT INTO spaces(title, description, image, location, pricePerNight, username) VALUES('${title}', '${description}', '${image}', '${location}', '${pricePerNight}', '${username}');`,
        function (err, result) {
          if (err) {
            return console.error('error running query', err);
          }
          client.end();
        }); 
    })
  }

  list (){
    var pg = require('pg');
    var conString = "postgres://tkwqamri:XWb6o2y_MnE0JTBhSkWpIGSee0602zh_@rogue.db.elephantsql.com:5432/tkwqamri" //Can be found in the Details page
    var client = new pg.Client(conString);

    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    
      client.query("SELECT * FROM spaces", function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
      
        console.log(result.rows);
        client.end();
      });
    }
  )}

  listById(id) {
    var pg = require('pg');
    var conString = "postgres://tkwqamri:XWb6o2y_MnE0JTBhSkWpIGSee0602zh_@rogue.db.elephantsql.com:5432/tkwqamri" //Can be found in the Details page
    var client = new pg.Client(conString);

    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
    
      client.query(`SELECT * FROM spaces where id=${id}`, function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
      
        console.log(result.rows);
        client.end();
      });
    }
  )}
};
// module.exports = new Spaces()
// module.exports.add();

module.exports = {
  Spaces:Spaces
}