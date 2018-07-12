Feature: Product list page

# Background: User starts on the homepage
#     Given User is on the homepage
# Somehow this doesn't work, have to dive into using backgrounds

Scenario: Navigate to product list page via menu
    Given User is on the homepage
    When User clicks on product page in the menu

# Scenario: Check different product list pages
#     Given User is on a product list page

# For some reason I can't use Examples right now, an error is thrown. Looks like something with this webdriver version
# Scenario Outline: Different product listing pages
#     Given User is on a <product_page>
#     Then Product list page should contain these elements
#     Examples:
#     | product_page
#     | /sunglasses/all