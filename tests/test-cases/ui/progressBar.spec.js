import { expect } from "playwright/test";
import { test } from "../../../base";

test.describe("Progress Bar Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/progress-bar");
    expect(page.locator("h1")).toHaveText("Progress Bar");
  });

  test("Assert progress starts and stops correctly", async ({
    progressBar,
  }) => {
    await progressBar.startProgress();
    await expect(progressBar.startButton).toHaveText("Stop");
    const intermediateValue = await progressBar.progressBar.textContent();

    await progressBar.startButton.click();
    await expect(progressBar.startButton).toHaveText("Start");

    await expect(progressBar.progressBar).toHaveText(intermediateValue);
  });

  test("Assert progress completes at 100% when uninterrupted", async ({
    progressBar,
  }) => {
    await progressBar.startProgress();
    await expect(progressBar.progressBar).toHaveText("100%", {
      timeout: 11000,
    });
    await expect(progressBar.resetButton).toBeVisible();
  });

  test("Progress resets to 0 when reset button is clicked", async ({
    progressBar,
  }) => {
    await progressBar.startProgress();
    await expect(progressBar.progressBar).toHaveText("100%", {
      timeout: 11000,
    });
    await progressBar.resetProgress();
  });
});
