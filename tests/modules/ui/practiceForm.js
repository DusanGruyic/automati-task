import { expect } from "playwright/test";
import { STUDENT_FORM } from "../../../fixtures/payloadData";

export class PracticeForm {
  constructor(page) {
    this.page = page;
    this.practiceFormTitle = page.locator("h1");
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.fillEmail = page.locator("#userEmail");
    this.maleRadio = page.locator("#gender-radio-1");
    this.femaleRadio = page.locator("#gender-radio-2");
    this.otherRadio = page.locator("#gender-radio-3");
    this.userNumber = page.locator("#userNumber");
    this.birthDate = page.locator("#dateOfBirthInput");
    this.subjectInput = page.locator(".subjects-auto-complete__value");
    this.sportsCheckbox = page.locator("#hobbies-checkbox-1");
    this.readingCheckbox = page.locator("#hobbies-checkbox-2");
    this.musicCheckbox = page.locator("#hobbies-checkbox-3");
    this.uploadPicture = page.locator("#uploadPicture");
    this.currentAddress = page.locator("#currentAddress");
    this.stateInput = page.locator("#state");
    this.cityInput = page.locator("#city");
    this.submitButton = page.locator("#submit");
    this.filledFormTitle = page.locator("example-modal-sizes-title-lg");
  }
  async selectSubject(subject) {
    await this.subjectInput.fill(subject);
    await this.page.keyboard.press("Enter");
  }

  async fillForm() {
    await this.firstName.fill(STUDENT_FORM.FIRSTNAME);
    await this.lastName.fill(STUDENT_FORM.LASTNAME);
    await this.fillEmail.fill(STUDENT_FORM.EMAIL);
    await this.femaleRadio.click();
    await expect(this.femaleRadio).toBeEnabled();
    await this.userNumber.fill(STUDENT_FORM.MOBILE);
    await this.birthDate.fill(STUDENT_FORM.BIRTHDATE);
    await this.selectSubject(STUDENT_FORM.SUBJECT);
    await this.sportsCheckbox.check();
    await expect(this.sportsCheckbox).toBeChecked();
    await this.currentAddress.fill(STUDENT_FORM.CURRENT_ADDRESS);
    await this.stateInput.fill(STUDENT_FORM.STATE);
    await this.cityInput.fill(STUDENT_FORM.CITY);
    await this.submitButton.click();
    expect(await this.filledFormTitle).toBeVisible();
  }

  async clearFields() {
    await this.firstName.fill("");
    await this.lastName.fill("");
    await this.fillEmail.fill("");
    await this.userNumber.fill("");
    await this.birthDate.fill("");
    await this.subjectInput.fill("");
    await this.currentAddress.fill("");
    await this.stateInput.fill("");
    await this.cityInput.fill("");
  }
}
