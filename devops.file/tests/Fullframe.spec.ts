import { chromium, Page } from "playwright-core";
import test from "@playwright/test";

test.describe("check the frames ", () => {
  test("verify the inside of the frames", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://letcode.in/frame");
    const frame1 = page.frame({ name: "firstFr" });

    if (frame1) {
      const FName = frame1.getByPlaceholder("Enter name");
      const lName = frame1.locator('input[name="lname"]');

      await FName.fill("Manoj");
      await lName.fill("MJ");

      await page.waitForTimeout(10000);

      const childFrames = frame1.childFrames();
      console.log(`Number of child frames: ${childFrames.length}`);

      const frame2 = frame1.childFrames()[1];

      if (frame2) {
        try {
          const nestedframe = frame2.locator('input[name="email"]');

          await nestedframe.fill("manoj@gmail.com");
          await page.waitForTimeout(10000);
        } catch (error) {
          console.log("unable to fill the values");
          throw error;
        }
      }
    }
  });
});
