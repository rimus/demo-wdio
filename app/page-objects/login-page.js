const Page = require('./page');

class LoginPage extends Page {
  get inputEmail() {
    return $('#input-email');
  }

  get inputPassword() {
    return $('#input-password');
  }

  get buttonLogin() {
    return $('input[value="Login"]');
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.buttonLogin.click();
  }

  open() {
    return super.open('/index.php?route=account/login');
  }
}

module.exports = new LoginPage();
