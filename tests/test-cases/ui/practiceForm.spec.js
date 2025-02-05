import { expect } from "playwright/test";
import { test } from "../../../base";

test.describe("Practice form tests", () => {
  test.beforeEach(
    "Visit practice form page",
    async ({ page, practiceForm }) => {
      await page.goto("/automation-practice-form");
      expect(await practiceForm.practiceFormTitle).toBeVisible();
    }
  );

  test("Assert practice form ", async ({ practiceForm }) => {
    await practiceForm.fillForm();
  });

  test("Assert email validation", async ({ practiceForm }) => {
    await practiceForm.fillEmail.fill("invalidEmail");
    await practiceForm.submitButton.click();
    expect(await practiceForm.fillEmail).toHaveValue("type", "email");
  });

  test("Assert all fields are empty", async ({ practiceForm }) => {
    await practiceForm.clearFields();
  });
});
