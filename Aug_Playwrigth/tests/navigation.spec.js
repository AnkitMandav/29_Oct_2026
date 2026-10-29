import {test, expect} from "@playwright/test";

test ("Navigation between pages", async({page}) => {
    //await page.goto("https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F");
    //test.setTimeout(6000);
    await page.goto("https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F");

    let title= await page.title();

    await expect(page).toHaveTitle(title);

    console.log("Face3book page is opened");

    await page.waitForTimeout(2000);

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.waitForTimeout(2000);

    let title1= await page.title();

    await expect(page).toHaveTitle(title1);

    console.log("OrangeHRMS side is opened");

    await page.goBack();

    let title2= await page.title();

    await expect(page).toHaveTitle(title2);

    console.log("Facebook page is opened");

    await page.goForward();

    let title3= await page.title();

    await expect(page).toHaveTitle(title3);

    console.log(title3);

    console.log("OrangeHRMS side is opened");

    

    //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    

});

