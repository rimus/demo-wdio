const Page = require('./page');

class HomePage extends Page {
  get accountIcon() {
    return $('div.acc-section');
  }

  get loginLink() {
    return $('div.acc-section a[href*="account/login"]');
  }

  open() {
    return super.open('/');
  }

  async goToLoginPage() {
    await this.accountIcon.click();
    await this.loginLink.click();
  }
}

module.exports = new HomePage();
