Feature: Create a medical data

  Feature description: Se crea un usuario de medico, con todos los datos necesarios para el formulario y si no se ha creado o no existe el usuario no se habilita el boton de guardar.
  @demo
  Scenario: Search a value of DNI doctor created before and save the data
    Given I am on the form website homepage
    When I edit the '<DNI>' input from a register before doctor
    Then The values for the doctor will appear
    And I can save the values

  Example:


  @demo
  Scenario: Search DNI doctor not created before
    Given I am on the form website homepage
    When I edit DNI input
    And  all the form inputs for the doctor section
    Then i can save the doctor data
    And the restriction message disappear

  Example:
  |dictamen |
  |"00010"  |
