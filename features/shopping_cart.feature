Feature: Shopping bag

   Feature Description

Scenario: Opening empty shopping bag
    Given User is on the homepage
    When User clicks on the shopping cart icon
    Then The shopping bag should be opened

# Scenario: Adding product to shopping bag
    # Given User is on the homepage
    # Then The shopping bag is empty
#     When User selects an item
#     Then Product detail page should be opened
#     When User adds this item to the shopping bag
#     Then A pop up should say "Adicionar ao cesto"
#     And Shopping bag icon on top of the page should show "1"

# Scenario: Opening/editing shopping
#     Given User added a product to shopping bag
#     And Is on the shopping bag page
#     When User clicks on the +