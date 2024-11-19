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
  private products: Locator;
  private series4: Locator;
  private Pcountiune: Locator;
  private orderNow: Locator;
  private globe: Locator;
  private language: Locator;
  private mobileNumber: Locator;
  private login: Locator;
  private submit: Locator;
  private popup: Locator;
  private upload: Locator;
  private checkBox: Locator;
  private agreementSubmit: Locator;
  private address1: Locator;
  private address2: Locator;
  private city: Locator;
  private dropDownSelect: Locator;
  private dropDownValues: Locator;

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

    this.products = page.getByTestId("nav-items").nth(0);
    this.series4 = page.getByTitle("Order").nth(0);

    // this.Pcountiune = page
    //   .getByTestId("order-actions-side-menu")
    //   .locator("button");

    this.Pcountiune = page.getByRole("button", { name: "Continue" });
    this.orderNow = page.getByTestId("order-summary");
    this.globe = page.getByTestId("header-right-icon").nth(1);
    this.language = page.getByTitle("India - English");

    this.mobileNumber = page.getByTestId("number-input");
    this.login = page.getByTestId("login-submit-button");
    this.submit = page.getByRole("button", { name: "Submit" });
    this.popup = page.getByTestId("popup-close-btn");
    this.upload = page.locator('input[id="sign-upload"]');

    this.checkBox = page.locator('input[id="agree_checkbox"]');
    this.agreementSubmit = page.getByRole("button", { name: "Submit" });

    // input fields

    this.address1 = page.locator('input[name="addressLine1"]');
    this.address2 = page.locator('input[name="addressLine2"]');
    this.city = page.locator('input[name="city"]');
    this.dropDownSelect = page.locator('div[id=":r1:"]');
    this.dropDownValues = page.getByTestId("flowbite-dropdown");
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

  async browserLaunch() {
    this.page.goto("http://dev01.nibavlifts.us");
  }

  async cookie() {
    // await expect(this.page).toHaveURL("https://dev01.nibavlifts.com/en-US");
    await this.cookies.click();
    await this.page.waitForTimeout(3000);
  }

  async selectRegion() {
    try {
      await this.globe.click();
      await this.language.click();
    } catch (error) {
      console.log("unable to click the language");
    }
  }

  async orderProduct() {
    try {
      await this.products.click();
      await this.series4.click();
      await this.Pcountiune.click();
      await this.orderNow.click();
    } catch (error) {
      console.log("unable to click the order");
    }
  }

  // async number() {
  //   try {
  //     await this.orderNow.click();
  //     const [ppp] = await Promise.all([await this.page.waitForEvent("popup")]);
  //     return ppp;
  //   } catch (error) {}
  // }

  async mNumber() {
    await this.mobileNumber.fill("9998889999");
    await this.login.click();
    await this.page.waitForTimeout(5000);
    await this.submit.click();
    await this.page.waitForTimeout(10000);

    if (await this.upload.isVisible()) {
      await this.upload.scrollIntoViewIfNeeded();
      await this.upload.setInputFiles("devops.file/images/Manoj.png");
      await this.page.waitForTimeout(2000);
      await this.checkBox.click();

      if (await this.checkBox.isChecked()) {
        await this.agreementSubmit.click();
        await this.page.waitForTimeout(3000);
      }
    } else {
      console.log("upload button button is not visible");
    }
  }

  async setFields() {
    await this.address1.fill("Nungambakkam");
    await this.address2.fill("anna nagaer");
    await this.city.fill("Chennai");
    await this.dropDownSelect.click();

    if (await this.dropDownValues.isVisible()) {
      let list = this.dropDownValues.locator("li");
      const count = await list.count();
      console.log(count);

      for (let i = 1; i < count; i++) {}
    }
  }
}
