import { Page } from "playwright-core";
import { test } from "../fixtures/test.fixture";
import { nibavLifts } from "../pages/test.page";

test.describe("verfiy the window handled in NL", () => {
  test("navigate to google from and click the NL ", async ({
    nlifts,
    page,
  }) => {
    // await nlifts.clickGoogle();
    // const newPage = await nlifts.catchPopup();
    // const nibav1 = new nibavLifts(newPage);

    // await nibav1.enterDetails();

    // const abc = await nlifts.nlClick();
    // const nibav2 = new nibavLifts(abc);

    // await nibav2.cookie();

    // await nibav2.selectRegion();
    // await nibav2.orderProduct();

    const nibav = new nibavLifts(page);
    await nibav.browserLaunch();
    await nibav.cookie();
    await nibav.selectRegion();
    await nibav.orderProduct();
    await nibav.mNumber();
    await nibav.setFields();
  });
});
