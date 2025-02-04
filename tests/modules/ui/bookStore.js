import { test } from "../../modules/base/pomFixture";
import { expect } from "playwright/test";

export class BookStore {
  constructor(page) {
    this.page = page;

    this.loginButton = page.getByRole("button", { name: "Login" });
  }
}
