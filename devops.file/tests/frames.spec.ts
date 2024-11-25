import { chromium, Page } from "playwright-core";
import test from "playwright/test";
import { devices } from "@playwright/test";


// setting the responsive for the viewport
// test.use({

//   browserName :'chromium',
//   ...devices['iPhone 15'] 

// })

test("verify the frames", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  
  await page.context().tracing.start({screenshots:true,snapshots:true})
  await page.setViewportSize({height:1080,width:1980})
  await page.goto("https://letcode.in/dropable");

  const source = page.locator('div[id="draggable"]');

  const desti = page.locator('div[id="droppable"]');

  await source.dragTo(desti);

  await page.waitForTimeout(20000);


  await page.context().tracing.stop({path:'trace.zip'})
});
