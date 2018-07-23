Feature: Stores

   Feature Description

Background: Homepage is displayed
    Given User is on the homepage

Scenario: Search for store
    When User clicks on stores in the menu
    And Enters a store of choice
    And Chooses a store from the list
    Then The appointment booking tool should be opened