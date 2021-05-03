package com.stepdefinition;

import com.Utility.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook extends BaseClass {

	@Before
	public void beforeclass() {

		launchBrowser();
		loadUrl("https://www.facebook.com/");

	}

	@After
	public void aftercl() {
		quit();

	}

}
