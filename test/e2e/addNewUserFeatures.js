describe('socialCalendar', function() {

  fit('signs up a new user', function() {
    // var millisecs = 300000;
    browser.get('/');

    $('#new-user-username').sendKeys("Test User");
    $('#new-user-password').sendKeys("password");
    $('#new-user-submit').click();
    browser.get('/');
    var userWelcome = $('#user-welcome').getText();
    // console.log($$('#events ul li').last().getText());
    expect(userWelcome).toContain('Welcome, Test User');
  });

});
