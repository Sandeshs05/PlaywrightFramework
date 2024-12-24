class LoginPg {
  constructor(page) {
    this.page = page;
    this.userNameInput = page.locator("input[placeholder='Username']");
    this.passwordInput = page.locator("input[placeholder='Password']");
    this.loginButton = page.locator("button[type='submit']");
  }
  async openApp() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }
  async validLogin(userName, passWord) {
    await this.userNameInput.fill(userName);
    await this.passwordInput.fill(passWord);
    await this.loginButton.click();
  }
}

export default LoginPg;
