Feature: Shopping bag

   Feature Description

Background: User is on the homepage
    Given User is on the homepage

Scenario: Adding product via list page
    When User clicks on the shopping cart icon
    And Navigates to sunglasses product list page
    And Chooses a product from the list page
    And Adds the product to his shopping cart

# Scenario: Adding product via product promotion on homepage
#     When User selects an item from product promotions
#     When Adds the product to his shopping cart
#     Then A pop up should say "Adicionar ao cesto"
#     And Shopping bag icon on top of the page should show "1"

# Scenario: Opening/editing shopping
#     Given User added a product to shopping bag
#     And Is on the shopping bag page
#     When User clicks on the +