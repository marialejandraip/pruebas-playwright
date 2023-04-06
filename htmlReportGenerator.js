const reporter = require('cucumber-html-reporter');
var date = new Date();
var currentDate = date.getDate() + '_' + (date.getMonth()+1) + '_' + date.getFullYear();

var options = {
    brandTitle: 'demo test scenarios',
    theme: 'bootstrap',
    jsonFile: 'Reports/cucumber_report.json',
    output:'Reports/cucumber_report'+ currentDate +'.html',
    screenshotsDirectory: './Screenshots/',
    storeScreenshots: true,
    reportSuiteAsScenarios:true,
    launchReport: true,
    metadata: {
        "App-version": "1.0.0",
        "Test-environment": "QA",
        "Platform": "Web/Angular",
        "Sprint": "001"
    }
}

reporter.generate(options);
