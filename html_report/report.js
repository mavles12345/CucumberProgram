$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Eclipse-workspace/CucumberProgram/src/test/resources/org/feature/Feature.feature");
formatter.feature({
  "name": "Verify the facebook page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the facebook page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter the valid \"\u003cUserName\u003e\" and \"\u003cPassWord\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should verify the login page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "PassWord"
      ]
    },
    {
      "cells": [
        "jackmavles@gmail.com",
        "selvamidiotismine"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.user_is_on_the_facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the valid \"jackmavles@gmail.com\" and \"selvamidiotismine\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.user_should_enter_the_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_should_verify_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});