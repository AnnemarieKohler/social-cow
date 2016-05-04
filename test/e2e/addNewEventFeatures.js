describe('socialCalendar', function() {
  it('has a title "SocialCal" ', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('SocialCal');
  });

  it('creates a new event', function() {
    browser.get('/');
    $('#new-event-title').sendKeys("New Event");
    $('#new-event-date').sendKeys("13/05/2016");
    $('#new-event-time').sendKeys("19:00");
    $('#new-event-submit').click();
    var newEvent = $$('#events ul li').last().getText();
    expect(newEvent).toContain('New Event');
    expect(newEvent).toContain('13/05/2016');
    expect(newEvent).toContain('19:00');
  });
});
