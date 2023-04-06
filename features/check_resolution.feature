Feature: Check a resolution created and non-existent

  Feature Description: Se prueba que el dictamen existe y si no existe que de una alerta para crear uno nuevo.

@demo
  Scenario: Search a value for dictamen of patient and already exist
    Given I am on the form website homepage
    When I edit for '<dictamen>'
    And I click on the search icon
    Then The values as date and calification will appear

  Example:
  |<dictamen> | "00010" |

  @demo
  Scenario: Search a value for dictamen of patient and it doesnt exist
    Given I am on the form website homepage
    When I search for <dictamen>
    And I click on the search icon
    Then An alert will appear with a message

  Example:
  |dictamen |
  |"00010"  |


