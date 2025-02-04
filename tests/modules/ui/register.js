import { test } from "../../modules/base/pomFixture";
import { expect } from "playwright/test";

export class Register {
  constructor(page) {
    this.page = page;

    this.firstName = page.locator("#firstname");
    this.lastName = page.locator("#lastname");
    this.userName = page.locator("#userName");
    this.password = page.locator("#password");
  }
}
