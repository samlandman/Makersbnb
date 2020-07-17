'use strict';

class Users {
  constructor(id) {
    this.id = id;
  };
  
  static async login(email_or_username, password_input) {
    var pg = require('pg');
    var conString = "postgres://tkwqamri:XWb6o2y_MnE0JTBhSkWpIGSee0602zh_@rogue.db.elephantsql.com:5432/tkwqamri" //Can be found in the Details page
    var client = new pg.Client(conString);
    var total = 0;

    client.connect(function (err) {
      if (err) {
        return console.error('could not connect to postgres', err);
      }
    });

    var result = await client.query(`SELECT id, username, email_address FROM user_table WHERE username = '${email_or_username}' AND password = '${password_input}' OR email_address = '${email_or_username}' AND password = '${password_input}';`);
    client.end();
    result.rows.forEach(element => total = total + element.id);

    if (total > 0) {  // total is 0 until id is added
      return true;
    }
      else {
      return false;
    };
  };

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
};

module.exports = Users;
