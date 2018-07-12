Feature: Product details page

   Feature Description

Scenario: Navigating to sunglasses details page
    Given User is on the homepage
    When User clicks on sunglasses in the menu the list page should be opened
    Then The details page should be opened "sunglasses"

Scenario: Navigating to optics details page
    Given User is on the homepage
    When User clicks on optics in the menu the list page should be opened
    Then The details page should be opened "optics"
    
Scenario: Navigating to lenses details page
    Given User is on the homepage
    When User clicks on lenses in the menu the list page should be opened
    Then The details page should be opened "lenses"