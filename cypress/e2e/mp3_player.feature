Feature: Test to check out a product


  Scenario: User should be able to purchase an mp3 player
    When I click on "Shop by Category" button
    And I click on "MP3 Players" link
    Then I should see a list of products
    When I hover over the product
    And I click on "Add to Wish List" icon
    And I click Register
    And I fill the signup details
    And I agree to the privacy policy
    And I click on "Continue" button
    Then It should be successful