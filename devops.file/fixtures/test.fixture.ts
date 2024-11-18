import { nibavLifts } from "../pages/test.page";
import { test as mj } from "@playwright/test";

type MyFixtures = {
  nlifts: nibavLifts;
};

export const test = mj.extend<MyFixtures>({
  nlifts: async ({ page }, use) => {
    const nlifts = new nibavLifts(page);
    await use(nlifts);
  },
});
