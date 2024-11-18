import test, { chromium } from "@playwright/test";
import { Page } from "@playwright/test";

test.describe("traning of window handling ", () => {
  test("verify the windows", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://dev-portal.nibavlifts.com/");

    const multipage = page.getByRole("button", { name: "Sign in with Google" });

    await multipage.click();
    const promise = await page.waitForEvent("popup");
    await page.waitForTimeout(4000);

    const newPage = promise;

    const name = newPage.locator('input[type="email"]');

    await name.fill("tester@nibavlifts.com");
  });
});
