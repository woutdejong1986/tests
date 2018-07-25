Feature: Product details page

   Feature Description

Background: User is on the homepage
    Given User is on the homepage

Scenario: Navigating to sunglasses details page
    When User clicks on sunglasses in the menu
    And Chooses a product from the list
    Then The "sunglasses" details page should be opened

Scenario: Navigating to optics details page
    When User clicks on optics in the menu
    Then The "optics" details page should be opened
    
Scenario: Navigating to lenses details page
    When User clicks on lenses in the menu
    Then The "lenses" details page should be opened