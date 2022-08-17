// const { XrayCloudClient } = require('@xray-app/xray-automation');
const fs = require('fs');
const { XrayCloudClient } = require("fix-esm").require('@xray-app/xray-automation');
const xrayCloudSettings = "./test/config/xray/jira.cloud.json";
const reportFile = './test/reports/mobile/cucumber/verify-the-user-can-create-a-new-wallet.json';
const multipartConfig = './test/config/xray/test.multipart.config.json';   

async function submitTestResults(settings, reportPath, config) {
    const xrayCloudSettings = processJson(settings);
    console.log('xrayCloudSettings clientId: ' + xrayCloudSettings.clientId);

    const reportFile = processJson(reportPath);
    console.log('reportFile: ' + reportFile[0].keyword);
    
    const multipartConfig = processJson(config);
    console.log('multipartConfig: ' + multipartConfig.format);
    let res;
    try {
        const xrayClient = new XrayCloudClient(xrayCloudSettings);
        res = await xrayClient.submitResultsMultipart(reportPath, multipartConfig);
    } catch (e) {
        console.log(`Failed to upload report to Jira Xray: ${e.stack}`);
        throw e;
    }
    console.log('Test Execution key: ' + res.key);
}

/**
     * Returns the content of a given JSON file
     *
     * @param {string} file - JSON file path
     * @returns {Object[]} - JSON file content
     */
function processJson(file) {
    console.log(`Processing file: ${file}`);
    const fileContent = fs.readFileSync(file);
    if (fileContent.length === 0) {
        console.error(`ERROR! Empty file found: ${file}`);
    }
    return JSON.parse(fileContent);
}

submitTestResults(xrayCloudSettings, reportFile, multipartConfig)
    .catch(console.error);


