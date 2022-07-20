const Page = require('./page');

class AccountPage extends Page {
  get editAccountLink() {
    return $('#column-right a[href*="account/edit"]');
  }

  open() {
    return super.open('/index.php?route=account/account');
  }
}

module.exports = new AccountPage();
