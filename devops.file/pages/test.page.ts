import { Page, Locator } from "playwright-core";
import { expect } from "playwright/test";

export class nibavLifts {
  private page: Page;
  private signIN: Locator;
  private email: Locator;
  private next: Locator;
  private password: Locator;
  private continue: Locator;
  private NL: Locator;
  private cookies: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signIN = this.page.getByRole("button", {
      name: "Sign in with Google",
    });

    this.email = this.page.locator('input[type="email"]');
    this.next = this.page.getByText("Next");

    this.password = this.page.locator('input[type="password"]');
    this.continue = this.page.getByRole("button", { name: "Continue" });

    this.NL = this.page.getByTitle("dev01.nibavlifts.com");

    this.cookies = this.page.getByRole("button", { name: "Accept All" });
  }

  async clickGoogle() {
    await this.page.goto("https://dev-portal.nibavlifts.com/");

    // await this.signIN.click();
    await this.page.waitForTimeout(2000);
  }

  async catchPopup() {
    await this.signIN.click();
    const [newPage] = await Promise.all([
      await this.page.waitForEvent("popup"),
    ]);
    return newPage;
  }

  async enterDetails() {
    await this.email.fill("manoj.n@nibavlifts.com");
    await this.next.click();
    await this.password.fill("Manojmj@192");
    await this.next.click();
    await this.continue.click();
  }

  async nlClick() {
    await this.NL.click();

    const [newpage] = await Promise.all([
      this.page.context().waitForEvent("page"),
    ]);
    return newpage;
  }

  async cookie() {
    // await expect(this.page).toHaveURL("https://dev01.nibavlifts.com/en-US");
    await this.cookies.click();
    await this.page.waitForTimeout(3000);
  }
}
