import { chromium, test as baseTest } from "@playwright/test";
import { RegisterAPI } from "./tests/modules/api/auth/registerApi.js";
import { LoginAPI } from "./api/auth/loginApi.js";

const testPages = baseTest.extend({
  registerApi: async ({ page }, use) => {
    await use(new RegisterAPI(page));
  },
  loginApi: async ({ page }, use) => {
    await use(new LoginAPI(page));
  },
});

export const test = testPages;
