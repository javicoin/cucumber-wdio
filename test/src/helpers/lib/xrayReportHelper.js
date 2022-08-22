//const { XrayCloudClient } = require('@xray-app/xray-automation');
const fs = require('fs');
const { XrayCloudClient } = require("fix-esm").require('@xray-app/xray-automation');

class XrayReportHelper {

    static async submitTestResults(settings, reportFilePath, config) {
        const xrayCloudSettings = XrayReportHelper.processJson(settings);
        // console.log('xrayCloudSettings clientId: ' + xrayCloudSettings.clientId);
        
        // const reportFile = XrayReportHelper.processJson(reportFilePath);
        // console.log('reportFile: ' + reportFile[0].keyword);
        
        const multipartConfig = XrayReportHelper.processJson(config);
        // console.log('multipartConfig: ' + multipartConfig.format);

        let xrayClient;
        let res;
        try {
            console.log('Uploading reports to Jira Xray');
            xrayClient = new XrayCloudClient(xrayCloudSettings);
            res = await xrayClient.submitResultsMultipart(reportFilePath, multipartConfig);
            console.log('Test Execution key: ' + res.key);
        } catch (e) {
            console.log(`Failed to upload report to Jira Xray: ${e.stack}`);
            throw e;
        }
    }

    /**
     * Returns the content of a given JSON file
     *
     * @param {string} file - JSON file path
     * @returns {Object[]} - JSON file content
     */
    static processJson(file) {
        console.log(`Processing file: ${file}`);
        const fileContent = fs.readFileSync(file);
        if (fileContent.length === 0) {
            console.error(`ERROR! Empty file found: ${file}`);
        }
        return JSON.parse(fileContent);
    }
}

module.exports = XrayReportHelper;
