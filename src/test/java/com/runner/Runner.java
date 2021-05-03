package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "F:\\Eclipse-workspace\\CucumberProgram\\src\\test\\resources\\org\\feature\\Feature.feature", glue = "com.stepdefinition", monochrome = true, dryRun = false, strict = false, plugin = {
		"usage","html:html_report", "json:json_output/cucumber.json", "junit:junit_output/cucumber.xml" })
public class Runner {

}
