import { expect } from "playwright/test";

export class General {
  constructor(page) {
    this.page = page;
  }
  async checkURLOfPage(URL) {
    await expect(await this.page).toHaveURL(URL);
  }
  async visitPage(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState("load");
    await this.checkURLOfPage(url);
  }
}
