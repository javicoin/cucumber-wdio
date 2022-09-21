const fs = require('fs');

class FilesHelper {
    /**
     * Returns the content of a given JSON file
     *
     * @param {string} jsonFile - JSON file path
     * @returns {Object[]} - JSON file content
     */
    static processJson(jsonFile) {
        console.log(`Processing file: ${jsonFile}`);
        const fileContent = fs.readFileSync(jsonFile);
        if (fileContent.length === 0) {
            console.error(`ERROR! Empty file found: ${jsonFile}`);
        }
        return JSON.parse(fileContent);
    }

    static editJsonByKey(jsonFile, key, value) {
        try {
            let file = FilesHelper.processJson(jsonFile);
            file[key] = value;
            fs.writeFileSync(jsonFile, JSON.stringify(file));
        } catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = FilesHelper;