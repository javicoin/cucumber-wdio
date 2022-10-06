const { XrayCloudClient } = require("fix-esm").require('@xray-app/xray-automation');
const FilesHelper = require('../../helpers/filesHelper');

async function submitCucumberTestResults(settings, resultsFile, config) {
    const xrayCloudSettings = FilesHelper.processJson(settings);        
    const multipartConfig = FilesHelper.processJson(config);
    
    let xrayClient;
    let response;
    try {
        console.log('Uploading reports to Jira Xray...');
        xrayClient = new XrayCloudClient(xrayCloudSettings);
        response = await xrayClient.submitResultsMultipart(resultsFile, multipartConfig);
        console.log('Test Execution created: ' + response.key);
    } catch (error) {
        throw new Error("Failed to upload report to Jira Xray\n: " + JSON.stringify(error));
    }
}

async function downloadCucumberFeatures(settings, config) {
    const xrayCloudSettings = FilesHelper.processJson(settings);        
    const cucumberConfig = FilesHelper.processJson(config);
    
    let xrayClient;
    let response;
   
    console.log('Downloading Cucumber features from Jira XRay...');
    xrayClient = new XrayCloudClient(xrayCloudSettings);
    response = await xrayClient.downloadCucumberFeatures(cucumberConfig).catch(console.error);
    console.log('Features created on: ' + cucumberConfig.featuresPath);
}

async function uploadCucumberFeatures(settings, config) {
    const xrayCloudSettings = FilesHelper.processJson(settings);        
    const cucumberConfig = FilesHelper.processJson(config);
    
    let xrayClient;
    let response;
    
    console.log('Uploading Cucumber features to Jira XRay...');
    xrayClient = new XrayCloudClient(xrayCloudSettings);
    response = await xrayClient.uploadCucumberFeatures(cucumberConfig).catch(console.error);

}

module.exports.submitCucumberTestResults =  submitCucumberTestResults;
module.exports.downloadCucumberFeatures =  downloadCucumberFeatures;
module.exports.uploadCucumberFeatures =  uploadCucumberFeatures;