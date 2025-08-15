Feature: Ecommerce website login

@current
Scenario: Register with valid details
    Given I am going to the website with the url 'https://ecommerce-playground.lambdatest.io/'
    When I click on the Myaccount button
    Then I click on the Register button
    And I enter the first name as 'John'
    And I enter the last name as 'Doe'
    And I enter the email as 'john.doe@gmail.com'
    And I enter the telephone as '1234567890'
    And I enter the password as 'Password123'
    And I enter the confirm password as 'Password123'
    And I click on the continue button
    Then I check the registration is Successful

Scenario: Login with valid username and password
    Given I am going to the website with the url 'https://ecommerce-playground.lambdatest.io/'
    When I click on the Myaccount button
    When I enter a valid username and password
    Then I check the login is Successful

@current
Scenario Outline: Login with valid username and password
    Given I am going to the website with the url '<url>'
    When I click on the login button
    When I enter a valid username and password
    Then I check the login is Successful

    Examples:
      | url                                                                      |
      | https://ecommerce-playground.lambdatest.io/index.php?route=account/login |
