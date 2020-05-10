/**
 * @fileoverview Returns any file at the root of the shell
 */
const os = require('os');
const fsp = require('fs').promises;
const fs = require('fs');
const path = require('path');

exports.anyFile = (filePath) => {
    if(os.platform === 'win32') {
        throw new Error('windows is not supported');
    }

    const rootPath = os.homedir();
    const anyFilePath = path.join(rootPath, filePath);
    if(fs.existsSync(anyFilePath)) {
        return fs.readFileSync(anyFilePath, 'utf-8');
    } else {
        throw new Error(`Unable to read file ${filePath}.`);
    }
    
}