import { Given, When, Then } from '@cucumber/cucumber';

// Step: Navigate to login page
Given('the user navigates to the login page', async function () {
  await console.log('User navigates to the login page');
});

// Step: Enter valid username and password
When('the user enters valid username and password', async function () {
  await console.log('User enters valid username and password');
});

// Step: Enter invalid username and password
When('the user enters invalid username and password', async function () {
  await console.log('User enters invalid username and password');
});

// Step: Click login button
When('the user clicks on the login button', async function () {
  await console.log('User clicks on the login button');
});

// Step: Successful dashboard redirect
Then('the user should be redirected to the dashboard', async function () {
  await console.log('User is redirected to the dashboard');
});

// Step: Error message display
Then('an error message should be displayed', async function () {
  await console.log('An error message is displayed');
});