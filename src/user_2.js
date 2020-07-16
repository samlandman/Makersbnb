'use strict';

class Users {
  constructor() {
  }


  add_user(username, email_address, password) {
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

  sign_in(input_1, password) {
  var pg = require('pg');
  var conString = "postgres://tkwqamri:XWb6o2y_MnE0JTBhSkWpIGSee0602zh_@rogue.db.elephantsql.com:5432/tkwqamri" //Can be found in the Details page
  var client = new pg.Client(conString);

  client.connect(function (err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }

    client.query(`SELECT id FROM user_table WHERE username = '${input_1}' AND password = '${password}' OR email_address = '${input_1}' AND password = '${password}';`,
      function (err, result) {
        if (err) {
          return console.error('error running query', err);
        }
        client.end();
      });
  });
};
};

module.exports = new Users();
module.exports.add_user();
// module.exports.sign_in();