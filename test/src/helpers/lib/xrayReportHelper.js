const { XrayCloudClient } = require("fix-esm").require('@xray-app/xray-automation');
const FilesHelper = require('../../helpers/filesHelper');

const settings = "./test/config/xray/jira.cloud.json";
const results = "./test/reports/mobile/cucumber/json/verify-the-user-can-create-a-new-wallet.json";       
const multipartConfig = "./test/config/xray/cucumber.multipart.config.json";

async function submitTestResults(settings, resultsFile, config) {
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
        console.log('Failed to upload report to Jira Xray\n');
        throw new Error("Failed to upload report to Jira Xray\n: " + error.stack);
    }
}

submitTestResults(settings, results, multipartConfig)
    .catch(console.error);
