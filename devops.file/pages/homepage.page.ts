import { expect, Locator, Page } from "@playwright/test";

export class homepage {
  private page: Page;
  private nibavTitle: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async intializeLocators(page: Page) {}

  async getTitle() {
    try {
      await expect(this.page).toHaveTitle("Nibav Lifts");
    } catch (error) {
      console.log("unable to print the title", error);
      throw error;
    }
  }
}
