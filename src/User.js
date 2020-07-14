'use strict';

class User{

  constructor() {
    this.user_name = 'test'
    this.email = 'test@test.com'
    this.password = 'test123'
  }
  login(name_input,password_input) {
    if((name_input === this.user_name || name_input === this.email) && password_input === this.password) {
        return true;
    };
    return false;
  };
};

module.exports = new User()