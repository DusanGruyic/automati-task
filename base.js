import { test as baseTest } from "@playwright/test";
import { WebTables } from "./tests/modules/ui/webTables.js";
import { RegisterAPI } from "./tests/modules/api/auth/registerApi.js";
import { PracticeForm } from "./tests/modules/ui/practiceForm.js";
import { ProgressBar } from "./tests/modules/ui/progressBar.js";

const testPages = baseTest.extend({
  registerApi: async ({ page }, use) => {
    await use(new RegisterAPI(page));
  },
  general: async ({ page }, use) => {
    await use(new General(page));
  },
  webTables: async ({ page }, use) => {
    await use(new WebTables(page));
  },
  practiceForm: async ({ page }, use) => {
    await use(new PracticeForm(page));
  },
  progressBar: async ({ page }, use) => {
    await use(new ProgressBar(page));
  },
});

export const test = testPages;
