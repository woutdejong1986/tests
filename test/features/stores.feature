Feature: Stores

   Feature Description

Background: Homepage is displayed
    Given User is on the homepage

Scenario Outline: Search for store
    When User clicks on stores in the menu
    And Enters a city of choice <city>
    And Chooses a store from the list
    Then The <storedID> should be in the url
    # Then The appointment booking tool should be opened

    Examples:
    | city     | storedID |
    | "Lisboa" | "5001"   |
    | "Porto"  | "5002"   |
    | "Braga"  | "5004"   |
    | "Coimbra"| "5038"   |
