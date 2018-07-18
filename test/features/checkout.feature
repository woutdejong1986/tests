Feature: Checkout

   As a user I want to be able to finish the checkout so I can purchase my choses products

Background: User adds products to shopping cart
    Given User is on the homepage
    When User navigates to sunglasses product list page
    And User chooses a product from the list page
    And User adds the product to his shopping cart
    And User proceeds to checkout

Scenario: 
    And User does something