import { test } from "../../modules/base/pomFixture";
import { expect } from "playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;

    this.userName = page.locator("#userName");
    this.password = page.locator("#password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.newUserButton = page.getByRole("button", { name: "New User" });
    this.welcomeTitle = page.locator("h2");
    this.loginBookStore = page.locator("h5");
  }
}
