const HomePage = require('../../app/page-objects/home-page');
const LoginPage = require('../../app/page-objects/login-page');
const AccountPage = require('../../app/page-objects/account-page');

describe('Awesome shop', () => {
  it('should login with valid credentials', async () => {
    await HomePage.open();
    await HomePage.goToLoginPage();
    await LoginPage.login('foobar@foo.bar', '123456');
    await expect(await AccountPage.editAccountLink).toBeDisplayed();
  });
});
