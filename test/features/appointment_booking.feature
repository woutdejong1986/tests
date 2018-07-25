Feature: Booking an appointment

   Feature Description

Scenario: Via book appointment block on homepage
    Given User is on the homepage
    When User clicks on book an appointment 
    And Enters a city in search bar "Stores"
    Then List with matching stores is provided