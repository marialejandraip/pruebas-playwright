import { When, Then } from "@cucumber/cucumber";
import { page } from './world';
import { expect } from "@playwright/test";

import {patientTitle, patientDni, profession} from "../Screenplay/screen/formScreen";

When('I add to the {string} form the {string}', async (string, string2) => {
  await page.locator(patientTitle).scrollIntoViewIfNeeded();
  page.waitForTimeout(6000);
  await page.locator(patientDni).click();
  await page.locator(patientDni).fill('565767687');
  await page.locator('paciente').getByPlaceholder('Ej. Carlos').click();
  await page.locator('paciente').getByPlaceholder('Ej. Carlos').fill('Carlos');
  await page.locator('paciente').getByPlaceholder('Ej. Fernando').press('Tab');
  await page.locator('paciente').getByPlaceholder('Ej. López').fill('Perez');
  await page.locator('paciente').getByPlaceholder('Ej. López').press('Tab');
  await page.locator('paciente').getByPlaceholder('Ej. Guerrero').press('Tab');
  await page.locator('paciente input[type="date"]').fill('2003-02-05');
  await page.locator('paciente form div').filter({ hasText: 'Pais de nacimientoDepartamento de nacimiento * Antioquia Atlántico Bogotá, D.c. ' }).getByRole('combobox').first().selectOption('Antioquia');
  await page.locator('paciente form div').filter({ hasText: 'Pais de nacimientoDepartamento de nacimiento * Antioquia Atlántico Bogotá, D.c. ' }).getByRole('combobox').nth(1).selectOption('Abriaquí');
  await page.locator('paciente').getByPlaceholder('Ej. Calle 13#45-67 Oficina 201').click();
  await page.locator('paciente').getByPlaceholder('Ej. Calle 13#45-67 Oficina 201').fill('Calle Falsa 123');
  await page.locator('paciente form div').filter({ hasText: 'Pais de residencia' }).getByRole('combobox').first().selectOption('Antioquia');
  await page.locator('paciente form div').filter({ hasText: 'Pais de residencia' }).getByRole('combobox').nth(1).selectOption('Abriaquí');
  await page.locator(profession).fill('tecnico')
});

Then('I can click in save the data', async () => {
  await page.locator('paciente').getByRole('button', { name: 'Guardar' }).click();
});

When('I search for a {string} input patient and it doesnt exist', async (string) => {
  await page.locator('paciente').getByPlaceholder('Ej. 1023456123').fill(string);
});

Then('i can see an alert that said doesnt exist', async () => {
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
    const dialogMessage = dialog.message();
    expect(dialogMessage).toEqual('No se encontraron datos con el criterio de busqueda seleccionado.') 
  });
  await page.locator('paciente').getByRole('button', { name: '' }).click();
});
