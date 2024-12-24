import LoginPg from "./LoginPg";
import DashboardPage from "./DashboardPage";

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPg(page);
    this.dashboardPage = new DashboardPage(page);
  }

  getLoginPage() {
    return this.loginPage;
  }
  getDashboardPage() {
    return this.dashboardPage;
  }
}

export default POManager;
