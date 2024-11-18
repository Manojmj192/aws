import { chromium, Page } from "playwright-core";
import test from "playwright/test";

test("verify the frames", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://letcode.in/dropable");

  const source = page.locator('div[id="draggable"]');

  const desti = page.locator('div[id="droppable"]');

  await source.dragTo(desti);

  await page.waitForTimeout(20000);
});
