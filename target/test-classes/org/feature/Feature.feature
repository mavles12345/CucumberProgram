Feature: Verify the facebook page
Scenario Outline: Verify with valid credentials
Given User is on the facebook page
When user should enter the valid "<UserName>" and "<PassWord>"
And user should click the login button
Then User should verify the login page

Examples:
|UserName|PassWord|
|jackmavles@gmail.com|selvamidiotismine|
