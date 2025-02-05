import { expect } from "playwright/test";
import { test } from "../../../base";

test.describe("Web table tests", () => {
  test.beforeEach("Visit webtable page", async ({ page }) => {
    await page.goto("/webtables");
  });

  test("Assert add new webtable functionality ", async ({ webTables }) => {
    await webTables.openNewTable();
    expect(await webTables.registrationFormTitle).toBeVisible();
    await webTables.fillRegistrationForm();
    await webTables.submitTable();
  });

  test("Assert all fields are mandatory", async ({ webTables }) => {
    await webTables.openNewTable();
    await webTables.submitTable();
    await Promise.all(
      [
        webTables.firstName,
        webTables.lastName,
        webTables.fillEmail,
        webTables.fillAge,
        webTables.fillSalary,
        webTables.fillDepartment,
      ].map(async (field) => expect(await field).toHaveAttribute("required"))
    );
  });

  test("Assert delete functionality", async ({ webTables }) => {
    await webTables.openNewTable();
    expect(await webTables.registrationFormTitle).toBeVisible();
    await webTables.fillRegistrationForm();
    await webTables.submitTable();
    await webTables.deleteRecord(2);
  });

  test("Assert edit functionality", async ({ webTables }) => {
    await webTables.openNewTable();
    expect(await webTables.registrationFormTitle).toBeVisible();
    await webTables.fillRegistrationForm();
    await webTables.submitTable();
    await webTables.clickToEditTable(3);
    expect(await webTables.firstName).toHaveValue("user");
  });

  test("Assert email validation", async ({ webTables }) => {
    await webTables.openNewTable();
    await webTables.fillRegistrationForm();
    await webTables.fillEmail.fill("invalidEmail");
    await webTables.submitTable();
    expect(await webTables.fillEmail).toHaveValue("type", "email");
  });
});
