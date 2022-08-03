const Page = require('./page');

class OrderHistoryPage extends Page {
  get lastOrderTotalPrice() {
    return $('#content > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(5)');
  }

  open() {
    return super.open('/index.php?route=account/order');
  }

  async getLastOrderPrice() {
    const priceElement = await this.lastOrderTotalPrice;
    return priceElement.getText();
  }
}

module.exports = new OrderHistoryPage();
