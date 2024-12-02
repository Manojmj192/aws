import test, { chromium } from "@playwright/test";
import { Page } from "@playwright/test";

test.describe("traning of window handling ", () => {
  test("verify the windows", async () => {
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();

    // await page.goto("https://dev-portal.nibavlifts.com/");

    // const multipage = page.getByRole("button", { name: "Sign in with Google" });

    // await multipage.click();
    // const promise = await page.waitForEvent("popup");
    // await page.waitForTimeout(4000);

    // const newPage = promise;

    // const name = newPage.locator('input[type="email"]');

    // await name.fill("tester@nibavlifts.com");

    
   let charcater :string = "helloworld"
   let char = {}

   for(let i = charcater.length-1; i>=0;i--){
    let value = charcater.charAt(i)
    if(char[value]){
      char[value]++
    }else{
      char[value]=1 

    }
   }
   console.log(char)
   
  });

 // Write a program to find a number is even number or odd number .if the number is odd number then the next number is even number.

  function checkoddevenumber(number){


   if(number%2===0){
   
    console.log("it is even number")


   }else{

    console.log("it is odd number")

    let nextnuber = number+1
    console.log("this is next number",nextnuber)

   }

  

  }
  checkoddevenumber(11)
  

  let a = "manoj";

  let emp = '';
  for(const b of a){

   let newV = b
   
emp = emp+=newV

  }
  console.log("newValues",emp)



  const mp = [["name","manoj"],["age",26]]
   
  for(const v of mp ){

    console.log("just printing the v values",v)

  }
const obj = {name:"manojmj",age:28,qualification:'bcom'}

  

  
});
