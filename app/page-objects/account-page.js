const Page = require('./page');

class AccountPage extends Page {
  get editAccountLink() {
    return $('#column-right a[href*="account/edit"]');
  }

  get orderHistoryLink() {
    return $('#column-right a[href*="account/order"]');
  }

  open() {
    return super.open('/index.php?route=account/account');
  }

  async goToOrderHistory() {
    await this.orderHistoryLink.click();
  }
}

module.exports = new AccountPage();
