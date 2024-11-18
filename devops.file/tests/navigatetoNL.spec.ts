import { Page } from "playwright-core";
import test from "@playwright/test";
import { nibavLifts } from "../pages/test.page";

test.describe("verfiy the window handled in NL", () => {
  test("navigate to google from and click the NL ", async ({ page }) => {
    const nibav = new nibavLifts(page);

    await nibav.clickGoogle();
    const newPage = await nibav.catchPopup();
    const nibav1 = new nibavLifts(newPage);

    await nibav1.enterDetails();

    const abc = await nibav.nlClick();
    const nibav2 = new nibavLifts(abc);
    await nibav2.cookie();
  });
});
