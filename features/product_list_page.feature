Feature: Product list page

# Background: User starts on the homepage
#     Given User is on the homepage

Scenario: Navigate to product list page via menu
    Given User is on the homepage
    When User clicks on sunglasses in the menu

Scenario: Check different product list pages
    Given User is on a product list page
    Then Product list page should contain these elements

