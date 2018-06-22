Feature: Checking some titles

   Feature Description

Scenario: Homepage
    Given User is on the homepage
    Then The title of the page has to be "Página inicial | Multiopticas"

Scenario: Shopping bag
    Given User is on the homepage
    When User clicks on the shopping bag icon
    Then The title of the page has to be "Cesto de compras | Multiopticas"