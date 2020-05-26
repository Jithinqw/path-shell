/**
 * @fileoverview Returns any file at the root of the shell
 */
const os = require('os');
const fsp = require('fs').promises;
const fs = require('fs');
const path = require('path');
const parser = require('../lib/parser');

exports.anyFile = (filePath) => {
    if(os.platform === 'win32') {
        return [];
    }

    const rootPath = os.homedir();
    const anyFilePath = path.join(rootPath, filePath);
    if(fs.existsSync(anyFilePath)) {
        return parser.parserObj(fs.readFileSync(anyFilePath, 'utf-8'));
    } else {
        throw new Error(`Unable to read file ${filePath}.`);
    }
    
}