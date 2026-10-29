//import {test, expect} from "@playwright/test"
import {test, expect}from "@playwright/test"
test("Link Count and Validation", async ({page}) => {
    await page.goto("https://www.facebook.com/");

    await page.waitForLoadState("domcontentloaded");

    const links = page.locator("//a[@href]");

    const linkcount = await links.count();

    console.log(linkcount);

    for(let i=0; i<=linkcount; i++){
        const link = links.nth(i);

        const href= await link.getAttribute("href");

        const text = await link.textContent();

        const cleantext= text ? text.trim() : "";

        console.log(`${i+1}. URL : ${href}`);

        console.log*(`text: ${cleantext}`)


    }
})
