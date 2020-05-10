/**
 * @fileoverview Gets npm history
 */

const os = require('os');
const fs = require('fs');
const path = require('path');
const parser = require('../lib/parser');

exports.npmHistory = () => {
    if(os.platform === 'win32') {
        throw new Error('windows is not supported');
    }

    const rootPath = os.homedir();
    const npmHistoryPath = path.join(rootPath, '.node_repl_history');
    if(fs.existsSync(npmHistoryPath)) {
        return parser.parserObj(fs.readFileSync(npmHistoryPath, 'utf-8'));
    } else {
        throw new Error(`Unable to read file.`)
    }
}