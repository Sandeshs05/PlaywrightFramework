class DashboardPage {
  constructor(page) {
    this.page = page;
    this.headerName = page.locator(".oxd-topbar-header-title"); // Ensure this class exists in your HTML/CSS
  }

  async getHeaderName() {
    const PageName = await this.headerName.innerText();
    return PageName;
  }
}

export default DashboardPage;
