Feature: Product list page

# Background: User starts on the homepage
#     Given User is on the product list page

Scenario: Check product list page
    Given User is on the homepage
    When User clicks on sunglasses in the menu
    Then Product list page should contain these elements


    # Then User is on the product list page

