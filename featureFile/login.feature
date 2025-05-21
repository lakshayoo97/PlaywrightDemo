Feature: Login Functionality

@smoke
Scenario: Successful login with valid credentials
  Given the user navigates to the login page
  When the user enters valid username and password
  And the user clicks on the login button
  Then the user should be redirected to the dashboard

@smoke
Scenario: Unsuccessful login with invalid credentials
  Given the user navigates to the login page
  When the user enters invalid username and password
  And the user clicks on the login button
  Then an error message should be displayed