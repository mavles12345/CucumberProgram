package com.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.Utility.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition extends BaseClass {

	@Given("User is on the facebook page")
	public void user_is_on_the_facebook_page() {

		//launchBrowser();
		//loadUrl("https://www.facebook.com/");

	}

	@When("user should enter the valid {string} and {string}")
	public void user_should_enter_the_valid_and(String UserName, String PassWord) {

		WebElement txtUser = driver.findElement(By.id("email"));
		fill(txtUser, UserName);

		WebElement txtPass = driver.findElement(By.id("pass"));
		fill(txtPass, PassWord);

	}

	@When("user should click the login button")
	public void user_should_click_the_login_button() {

		WebElement login = driver.findElement(By.name("login"));
		buttonClick(login);

	}

	@Then("User should verify the login page")
	public void user_should_verify_the_login_page() {

		String title = driver.getCurrentUrl();
		Assert.assertEquals("Title of page is", "https://www.facebook.com/", title);

	}

}
