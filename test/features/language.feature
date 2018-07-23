Feature: Checking some language specifics

   Feature Description

Scenario: Homepage
    Given User is on the homepage
    Then The title of the page has to be "Página inicial | MultiOpticas"
    And Book appointment button contains "Marque consulta gratuita"
    And Footer component contains "Como podemos ajudá-lo?"

# Scenario: Shopping bag
#     Given User is in the shopping cart
#     Then The title of the page has to be "Cesto de compras | MultiOpticas"