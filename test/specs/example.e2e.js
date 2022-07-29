const homePage = require('../../app/page-objects/home-page');
const loginPage = require('../../app/page-objects/login-page');
const accountPage = require('../../app/page-objects/account-page');

describe('Awesome shop', () => {
  it('should login with valid credentials', async () => {
    await homePage.open();
    await homePage.goToLoginPage();
    await loginPage.login('foobar@foo.bar', '123456');
    await expect(await accountPage.editAccountLink).toBeDisplayed();
  });
});
