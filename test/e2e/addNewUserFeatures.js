describe('socialCalendar', function() {

  it('signs up a new user', function() {
    browser.get('/');
    $('#user-sign-out').click();

    $('#new-user-username').sendKeys("Test User");
    $('#new-user-password').sendKeys("password");
    $('#new-user-submit').click();
    browser.get('/');
    var userWelcome = $('#user-welcome').getText();
    expect(userWelcome).toContain('Welcome, Test User');
  });

});
