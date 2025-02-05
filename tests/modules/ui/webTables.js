import { REGISTRATION_FORM } from "../../../fixtures/payloadData";
import { expect } from "playwright/test";

export class WebTables {
  constructor(page) {
    this.page = page;

    this.addButton = page.getByRole("button", { name: "Add" });
    this.typeSearch = page.locator("#searchBox");
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.fillEmail = page.locator("#userEmail");
    this.fillAge = page.locator("#age");
    this.fillSalary = page.locator("#salary");
    this.fillDepartment = page.locator("#department");
    this.registrationFormTitle = page.getByText("Registration Form");
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.editRecordButton = page.getByTitle("Edit");
    this.deleteRecordButton = page.getByTitle("Delete");
    this.registrationForm = page.locator("#userForm");
  }

  async openNewTable() {
    await this.addButton.click();
  }

  async submitTable() {
    await this.submitButton.click();
  }

  async fillRegistrationForm() {
    await this.firstName.fill(REGISTRATION_FORM.FIRSTNAME);
    expect(await this.firstName).not.toBeEmpty();
    await this.lastName.fill(REGISTRATION_FORM.LASTNAME);
    expect(await this.lastName).not.toBeEmpty();
    await this.fillEmail.fill(REGISTRATION_FORM.EMAIL);
    expect(await this.fillEmail).not.toBeEmpty();
    await this.fillSalary.fill(REGISTRATION_FORM.SALARY);
    expect(await this.fillSalary).not.toBeEmpty();
    await this.fillAge.fill(REGISTRATION_FORM.AGE);
    expect(await this.fillAge).not.toBeEmpty();
    await this.fillDepartment.fill(REGISTRATION_FORM.DEPARTMENT);
  }

  async clickToEditTable(nth) {
    const editTable = await this.editRecordButton.nth(nth);
    await editTable.click();
    expect(await this.registrationFormTitle).toBeVisible();
  }

  async deleteRecord(nth) {
    const deleteTable = await this.deleteRecordButton.nth(nth);
    await deleteTable.click();
  }
}
