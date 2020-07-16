'use strict';

class Users {
  constructor(id) {
    this.id = id;
  }


  static add_user(username, email_address, password) {
    var pg = require('pg');
    var conString = "postgres://tkwqamri:XWb6o2y_MnE0JTBhSkWpIGSee0602zh_@rogue.db.elephantsql.com:5432/tkwqamri" //Can be found in the Details page
    var client = new pg.Client(conString);

    client.connect(function (err) {
      if (err) {
        return console.error('could not connect to postgres', err);
      }

      client.query(`INSERT INTO user_table (username, email_address, password) VALUES('${username}', '${email_address}', '${password}');`,
        function (err, result) {
          if (err) {
            return console.error('error running query', err);
          }
          client.end();
        });
    });
  };

  static sign_in(email_or_username, password) {
  var pg = require('pg');
  var conString = "postgres://tkwqamri:XWb6o2y_MnE0JTBhSkWpIGSee0602zh_@rogue.db.elephantsql.com:5432/tkwqamri" //Can be found in the Details page
  var client = new pg.Client(conString);
  var total = 0;

    client.connect(function (err) {
      if (err) {
        return console.error('could not connect to postgres', err);
      }

      client.query(`SELECT id, username, email_address FROM user_table WHERE username = '${email_or_username}' AND password = '${password}' OR email_address = '${email_or_username}' AND password = '${password}';`,
        function (err, result) {
          if (err) {
            return console.error('error running query', err);
            }
            result.rows.forEach(element => total = total + element.id);
            client.end();
        });
    });

      setTimeout(function () {
        return total;
      }, 5000);
    // };
    
  };
};

module.exports = {
  Users:Users
}
// module.exports = new Users();
// module.exports.add_user();
// module.exports.sign_in();
