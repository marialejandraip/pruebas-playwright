Feature: Create a medical data

  Feature description: Se crea un usuario de medico, con todos los datos necesarios para el formulario y si no se ha creado o no existe el usuario no se habilita el boton de guardar.
 
 Background: Navigation
    Given I am on the form website homepage

  @demo
  Scenario Outline: Adding data for the doctor form section
    When I add the "<InfoDoctor>" to the form
    Then I can click in save the data


  # await page.locator('doctor').getByPlaceholder('Ej. 1023456123').click();
  # await page.locator('doctor').getByPlaceholder('Ej. 1023456123').fill('456434564');
  # await page.getByPlaceholder('Ej. Médico ocupacional').click();
  # await page.getByPlaceholder('Ej. Médico ocupacional').fill('Internista');
  # await page.locator('doctor').getByPlaceholder('Ej. Carlos').click();
  # await page.locator('doctor').getByPlaceholder('Ej. Carlos').fill('Carlos');
  # await page.locator('doctor').getByPlaceholder('Ej. Fernando').click();
  # await page.locator('doctor').getByPlaceholder('Ej. Fernando').fill('Fernando');
  # await page.locator('doctor').getByPlaceholder('Ej. López').click();
  # await page.locator('doctor').getByPlaceholder('Ej. López').fill('Lopez');
  # await page.locator('doctor').getByPlaceholder('Ej. Guerrero').click();
  # await page.locator('doctor').getByPlaceholder('Ej. Guerrero').fill('Guerrero');
  # await page.locator('doctor').getByPlaceholder('Ej. Calle 13#45-67 Oficina 201').click();
  # await page.locator('doctor').getByPlaceholder('Ej. Calle 13#45-67 Oficina 201').fill('Calle Falsa 123');
  # await page.locator('div').filter({ hasText: 'Ciudad * Bogotá D.c.' }).getByRole('combobox').selectOption('Bogotá D.c.');
  # await page.locator('div').filter({ hasText: 'Teléfonos de contacto *' }).getByRole('textbox').click();
  # await page.locator('div').filter({ hasText: 'Teléfonos de contacto *' }).getByRole('textbox').fill('4454356');
  # await page.locator('doctor input[type="email"]').click();
  # await page.locator('doctor input[type="email"]').fill('Carlos@perez.com');
@demo
  Scenario Outline: Search DNI doctor not created before
    When I search for a "<DNI>" input doctor and it doesnt exist
    Then i can see an alert that said doesnt exist

  Example:
  |DNI|"67657456"|