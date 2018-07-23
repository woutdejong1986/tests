Feature: Campaign feature

   Feature Description

Background: User navigates to campaigns page
    Given User is on the homepage
    When User clicks on campaigns in the menu

Scenario: Opening the campaign page
    Then The campaign page should be opened

Scenario: Opening the campaign detail page
    And User chooses an article from the page
    Then The campaign detail page should be opened