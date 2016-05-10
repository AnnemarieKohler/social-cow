describe('socialCalendar', function() {
  it('has a title "SocialCal" ', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('SocialCal');
  });

  it('creates a new event', function() {
    browser.get('/');
    $('#new-user-username').sendKeys("user1");
    $('#new-user-password').sendKeys("userpassword");
    $('#new-user-submit').click();

    $('#new-event-title').sendKeys("New Event");
    $('#new-event-date').sendKeys("13/05/2016");
    $('#new-event-time').sendKeys("19:00");
    $('#new-event-submit').click();
    browser.get('/');
    var el = element(by.css('#calendar'));
    el.getText().then(function(text) {
      expect(text).toContain('19:00 New Event');
    });
  });
});
