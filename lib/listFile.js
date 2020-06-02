/**
 * @fileoverview list all files in the root folder.
 */

const os = require('os');
const fs = require('fs');

exports.listFiles = () => {
    if(os.platform === 'win32') {
        return [];
    }

    const rootPath = os.homedir();
    let folderLoc = [];
    fs.readdirSync(rootPath).forEach(file => {
        folderLoc.push(file);
    });
    return folderLoc;
}