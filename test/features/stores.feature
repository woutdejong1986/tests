Feature: Stores

   Feature Description

Background: User navigates to stores page
    Given User is on the homepage

Scenario: Navigating to stores page
    When User clicks on stores in the menu
    Then The stores page should be opened

Scenario: Search for store
    When User clicks on store in the menu
    And Enters a store of choice
    