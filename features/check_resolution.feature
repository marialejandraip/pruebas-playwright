Feature: Check a resolution created and non-existent

  Feature Description: Se prueba que el dictamen existe y si no existe que de una alerta para crear uno nuevo.

  @demo
  Scenario: Search a value for dictamen of patient and already exist
    Given I am on the form website homepage
    When I search for '00010'
    And I click on the search icon
    Then An alert will appear with a message


  @demo
  Scenario: Search a value for dictamen of patient and it doesnt exist
    Given I am on the form website homepage
    When I search for '00001' that doesnt exist
    And I click on the search icon
    Then The values as date and calification will appear



