const { XrayCloudClient, XrayCloudResponseV2, XrayErrorResponse } = require("fix-esm").require('@xray-app/xray-automation');
const FilesHelper = require('../../helpers/filesHelper');

async function submitCucumberTestResults(resultsFile, config) {      
    const multipartConfig = FilesHelper.processJson(config);
    
    console.log('Uploading reports to Jira Xray...');
    const xrayClient = new XrayCloudClient();

    return xrayClient.submitResultsMultipart(resultsFile, multipartConfig)
    .then( response => { 
        console.log('Test Execution created \'' + response.key + '\'');
        // DEBUG return new XrayCloudResponseV2(response);
    }).catch( error => { 
        throw new Error(error.message || error.body.error);   
    });
}

async function downloadCucumberFeatures(config) {       
    const cucumberConfig = FilesHelper.processJson(config);
   
    const xrayClient = new XrayCloudClient();
    console.log('Downloading Cucumber features from Jira XRay...');
    
    return xrayClient.downloadCucumberFeatures(cucumberConfig)
    .then( function(response) {
        console.log('Features from \'' + response._response.config.url +  '\' created on \'' + cucumberConfig.featuresPath +'\'');
        // DEBUG return new XrayCloudResponseV2(response._response);
    }).catch( function(error) {
        if (error._response !== undefined && error._response.status == 400 ) {
            throw new Error('Invalid keys/filter id or either filter is not public!');   
        } else {
            throw new Error(error.body.error);   
        }
    });        
}

async function processDownloadFeatures(config) {

    process.stdout.write('Downloading features will DELETE existing ones. Are you sure you want to proceed? (y/n): ');

    process.stdin.on('data', function(data) {
        const key = data.toString().trim();
        switch (key) {
            case "y":
                process.stdin.pause();
                return downloadCucumberFeatures(config);
            case "n":
                process.stdin.end();
                return process.exit();
            default :
                process.stdin.end();
                return process.stdout.write('Try again (y/n)?: ');
        }
    });
}

async function uploadCucumberFeatures(config) {     
    const cucumberConfig = FilesHelper.processJson(config);
    
    const xrayClient = new XrayCloudClient();
    console.log('Uploading Cucumber features to Jira XRay...');

    return xrayClient.uploadCucumberFeatures(cucumberConfig)
    .then( function(response) {
        const tests = (response._response.data.updatedOrCreatedTests.map( ({key}) => key ));
        console.log('\nFeatures successfully created/updated in Jira project ' + cucumberConfig.projectKey);
        console.log(tests.sort());
        if (response._response.data.errors !== undefined && (response._response.data.errors).length) {
            console.log('\nErrors when uploading features...');
            console.log((response._response.data.errors).sort());
            throw new Error('Errors in feature files, please verify them');
        }
        // DEBUG return new XrayCloudResponseV2(response._response);
    }).catch( function(error) {
        if (error.response !== undefined)
            throw new XrayErrorResponse(error.response);
        else
            throw new Error(error.message || error.body.error);
    });
}

module.exports.submitCucumberTestResults =  submitCucumberTestResults;
// module.exports.downloadCucumberFeatures =  downloadCucumberFeatures;
module.exports.processDownloadFeatures =  processDownloadFeatures;
module.exports.uploadCucumberFeatures =  uploadCucumberFeatures;