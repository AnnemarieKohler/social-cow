describe('socialCalendar', function() {
  it('has a title "SocialCal" ', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('SocialCal');
  });

  xit('creates a new event', function() {
    // var millisecs = 300000;
    browser.get('/');

    $('#new-event-title').sendKeys("New Event");
    $('#new-event-date').sendKeys("13/05/2016");
    $('#new-event-time').sendKeys("19:00");
    $('#new-event-submit').click();
    browser.get('/');
    var newEvent = $$('#events ul li').last().getText();
    // console.log($$('#events ul li').last().getText());
    expect(newEvent).toContain('New Event');
    expect(newEvent).toContain('2016-05-13T00:00:00.000Z');
    expect(newEvent).toContain('19:00');
  });
});
