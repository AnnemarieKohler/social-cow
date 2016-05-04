describe('SocialCalendar', function() {
  it('has a title "SocialCal" ', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('SocialCal');
  });
});
