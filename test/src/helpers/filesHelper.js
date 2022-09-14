const fs = require('fs');

class FilesHelper {
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

    static editJsonByKey(json, key, value) {
        try {
            let file = FilesHelper.processJson(json);
            file[key] = value;
            fs.writeFileSync(json, JSON.stringify(file));
        } catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = FilesHelper;