/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const FilesHelper = require('wdio-common/helpers/utils/file-helper.js');
const MergeReport = require('wdio-common/lib/merge-reports.js');
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
// const outputFile = path.join(program.directory, 'merged_output_report.json');

const program_directory = 'test/reports/mobile/cucumber/json';
const backupDirectory = `${program_directory}_bkp`;
const outputFile = path.join(program_directory, 'merged_output_report.json');

/**
 * Merges json report files (from a given directory) into a single json file 
 *
 */
function mergeJsonReports() {
    FilesHelper.prepareBackupDirectory(backupDirectory, true);
    const jsonFiles = FilesHelper.getFiles(program_directory, 'json');
    const mergedReport = MergeReport.mergeFiles(jsonFiles, backupDirectory);
    MergeReport.writeMergedReport(outputFile, mergedReport);
}


module.exports.mergeJsonReports =  mergeJsonReports;