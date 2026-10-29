import {test, expect} from '@playwright/test';

test("Home Page Test", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    let title = await page.title();
    
    await expect(page).toHaveTitle(title);
})

test("Home Page URL", async ({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    let title = await page.title();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})