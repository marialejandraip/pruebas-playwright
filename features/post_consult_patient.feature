Feature: Create a patient data

  Feature description: Se crea un usuario de paciente, con todos los datos necesarios para el formulario y si no se ha creado o no existe el usuario me muestra una alerta en pantalla.
 
 Background: Navigation
    Given I am on the form website homepage

  @demo
  Scenario Outline: Adding data for the doctor form section
    When I add to the "<InfoPatient>" form the "<ValuesForm>" 
    Then I can click in save the data

    Example:
      |InfoPatient |ValuesForm|
      |dni | 103134453 |
      |firstName | 'Carlos'|
      |secondName | 'Fernando'|
      |lastName | 'Perez'|
      |birthday | '2002-06-12'|
      |department | 'Antioquia'|
      |city | 'Aburra'|
      |Address|'Calle Falsa 456'|
      |ResidentDepartment | 'Antioquia'|
      |ResidentCity | 'Aburra'|


@demo
  Scenario Outline: Search DNI doctor not created before
    When I search for a "<DNI>" input patient and it doesnt exist
    Then i can see an alert that said doesnt exist

  Example:
  |DNI|"1435465465"|

