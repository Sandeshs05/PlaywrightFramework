import { test, expect } from "@playwright/test";
import POManager from "../pages/POManager";

test.only("Validate the login functionality with valid credentials", async ({ page }) => {
  const poManager = new POManager(page);
  await poManager.getLoginPage().openApp();
  await poManager.getLoginPage().validLogin("Admin", "admin123");
  expect(await poManager.getDashboardPage().getHeaderName()).toBe("Dashboard");
});

test("Validate the login functionality with invalid credentials", async ({ page }) => {
  const poManager = new POManager(page);
  await poManager.openApp();
  poManager.validLogin("Admin", "admin1234");
});
