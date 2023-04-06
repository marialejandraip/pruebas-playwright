import { Given, When, Then } from "@cucumber/cucumber";
import { page } from '../steps/world';
import { expect, test } from "@playwright/test";


import {buttonEdit, titleForm, inputDictamen, buttonSearch, titleText} from "../Screenplay/screen/formScreen";

// driver.swtchTo.alert
Given('I am on the form website homepage', async () => {
    const actualText = await page.locator(titleForm).textContent();
    expect( titleText).toEqual(actualText!.trim());

});

When('I edit for {string}',  async (string) => {
    await page.locator(buttonEdit).click()
    await page.locator(inputDictamen).type(string)
});


When('I click on the search icon', async () => {
    await page.locator(buttonSearch).click()
});


Then('The values as date and calification will appear', async function () {
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {
        });
    });
    await page.locator('dictamen').getByRole('button', {name: ''}).click();
});


When('I search for {string}', function (string) {

});




// test('test', async ({ page }) => {
//     await page.goto('http://localhost:4200/');
//     await page.getByRole('button', { name: '' }).click();
//     await page.locator('div').filter({ hasText: 'Dictamen' }).getByRole('textbox').click();
//     await page.locator('div').filter({ hasText: 'Dictamen' }).getByRole('textbox').fill('00001');
//     page.once('dialog', dialog => {
//         console.log(`Dialog message: ${dialog.message()}`);
//         dialog.dismiss().catch(() => {});
//     });
//     await page.locator('dictamen').getByRole('button', { name: '' }).click();
// });








