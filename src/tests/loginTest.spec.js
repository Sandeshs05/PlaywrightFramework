import { test, expect } from "@playwright/test";
import POManager from "../pages/POManager";

test.only("Validate the login functionality with valid credentials", async ({ page }) => {
  const poManager = new POManager(page);
  await poManager.getLoginPage().openApp();
  await poManager.getLoginPage().validLogin("Admin", "admin123");
  expect(await poManager.getCommonComponents().getHeaderName()).toBe("Dashboard");
});

test("Validate the login functionality with invalid credentials", async ({ page }) => {
  const poManager = new POManager(page);
  await poManager.getLoginPage().openApp();
  const errorMessage = await poManager.getLoginPage().invalidLogin("Admin", "admin1234");
  console.log(errorMessage);
  expect(errorMessage).toBe("Invalid credentials");
});
