import { expect } from "@playwright/test";

export class ProgressBar {
  constructor(page) {
    this.page = page;
    this.barTitle = page.locator("h1");
    this.progressBar = page.locator("#progressBar");
    this.startButton = page.locator("#startStopButton");
    this.stopButton = page.locator("#stopButton");
    this.resetButton = page.locator("#resetButton");
  }

  async startProgress() {
    await this.startButton.click();
    expect(await this.startButton).toHaveText("Stop");
  }

  async stopProgress() {
    await this.stopButton.click();
    expect(await this.startButton).toHaveText("Start");
  }

  async resetProgress() {
    expect(await this.resetButton).toBeVisible();
    await this.resetButton.click();
    expect(await this.progressBar).toHaveText("0%");
  }
}
