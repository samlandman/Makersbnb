'use strict';

describe("User", function() {
  var user;

  beforeEach(function() {
    user = new User();
  });

  it("should have a user_name of 'test'", function() {
    expect(user.user_name).toEqual("test");
  });

  it("should have an email 'test@test.com'", function() {
    expect(user.email).toEqual("test@test.com");
  });

  it("should have a password of 'test123'", function() {
    expect(user.password).toEqual("test123");
  });

  it("should be able to log in with correct details", function() {
    expect (user.login('test','test123')).toBe(true);
    expect (user.login('test@test.com','test123')).toBe(true);
  });

  it("should NOT be able to log in with incorrect details", function() {
    expect (user.login('test1','test123')).toBe(false);
    expect (user.login('test','test1234')).toBe(false);
    expect (user.login('test1@test.com','test123')).toBe(false);
  });

});
