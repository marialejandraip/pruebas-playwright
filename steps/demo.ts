import { Given, When, Then } from "@cucumber/cucumber";
import { page } from './world';
import { expect } from "@playwright/test";

import {buttonEdit, titleForm, inputDictamen, buttonSearch, titleText} from "../Screenplay/screen/formScreen";

Given('I am on the form website homepage', async () => {
    const actualText = await page.locator(titleForm).textContent();
    expect( titleText).toEqual(actualText!.trim());
});

When('I search for {string}', async (string) => {
    await page.locator(buttonEdit).click()
    await page.locator(inputDictamen).clear()
    await page.locator(inputDictamen).type(string)
});


When('I click on the search icon', async () => {
    await page.locator(buttonSearch).click()
});


Then('An alert will appear with a message', async function () {
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    const dialogMessage = dialog.message();
    expect(dialogMessage).toEqual('El dictamen a buscar debe ser menor a 1') 
    });
    await page.locator('dictamen').getByRole('button', {name: ''}).click();
});


When('I search for {string} that doesnt exist', async (string) => {
    await page.locator(buttonEdit).click()
    await page.locator(inputDictamen).clear()
    await page.locator(inputDictamen).type(string)
  });


  Then('The values as date and calification will appear', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

