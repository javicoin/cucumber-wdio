/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
// const program = require('commander');

// program
//     .description('Merges all cucumber output json files into one file leaving only results from last run')
//     .option('--directory <directory>',
//         'Directory with json files to merge',
//         x => path.resolve(x),
//         path.resolve('json_out')
//     );
// program.parse(process.argv)
// const backupDirectory = `${program.directory}_bkp`;
// const outputFile = path.join(program.directory, 'merged_output.json');
const program_directory = 'test/reports/mobile/cucumber/json';
const backupDirectory = `${program_directory}_bkp`;
const outputFile = path.join(program_directory, 'merged_output.json');

/**
 * Creates backup directory if it doesn't exist or empties it if it does exist
 *
 * @param {string} directory - path to backup directory
 */
function prepareBackupDirectory(directory) {
    if (fs.existsSync(directory)) {
        console.log(`Cleaning existing backup directory: ${directory}`);
        fs.readdirSync(backupDirectory).forEach(file => fs.unlinkSync(path.join(backupDirectory, file)));
    } else {
        console.log((`Creating backup directory: ${directory}`));
        fs.mkdirSync(directory);
    }
}

/**
 * Returns al list of json file absolute paths from given directory.
 * List will be sorted by creation time
 *
 * @param {string} directory - directory to check
 * @returns {string[]} - array of file path sorted by file creation time
 */
function getJsonFiles(directory) {
    return fs.readdirSync(directory)
        .filter(file => path.parse(file).ext === '.json')
        .map(file => path.join(program_directory, file))
        .sort((a, b) => fs.statSync(a).ctimeMs - fs.statSync(b).ctimeMs);
}

/**
 * Reads given file and merges the contents into the final report
 * WARNING! mergedReport is modified in place
 *
 * @param {Object[]} mergedReport - array of feature reports representing the final merged report
 * @param {string} file - path to json file
 */
function mergeFile(mergedReport, file) {
    console.log(`Processing file: ${file}`);
    const fileContent = fs.readFileSync(file);
    if (fileContent.length === 0) {
        console.warn(`WARNING! Empty file found: ${file}`);
    } else {
        const report = JSON.parse(fileContent);
        mergedReport.push(...report);
    }
    console.log(`Moving parsed ${file} to backup directory`);
    fs.renameSync(file, path.join(backupDirectory, path.basename(file)));
}

/**
 * Processes given report JSON files and merges them into a single report with results of last runs for each example
 * @param {string[]} jsonFiles - array of file paths
 * @returns {Object[]} - cucumber result JSON (always an array of feature objects)
 */
function mergeFiles(jsonFiles) {
    const mergedReport = [];
    jsonFiles.forEach(file => mergeFile(mergedReport, file));
    return mergedReport;
}

/**
 * Stringifies given report array and writes it to the output file
 *
 * @param {string} outputFile - output file path
 * @param {Object[]} report - cucumber result JSON (it always is an array of feature objects
 */
function writeMergedReport(outputFile, report) {
    console.log(`Writing merged report to ${outputFile}`);
    fs.writeFileSync(outputFile, JSON.stringify(report, null, 2));
    console.log(`Wrote merged report to ${outputFile}`);
}

/**
 * Merges json files (from a given directory) into a single json file 
 *
 */
function mergeJsonReports() {
    prepareBackupDirectory(backupDirectory);
    const jsonFiles = getJsonFiles(program_directory);
    const mergedReport = mergeFiles(jsonFiles);
    writeMergedReport(outputFile, mergedReport);
}


module.exports.mergeJsonReports =  mergeJsonReports;