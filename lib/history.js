/**
 * @fileoverview Gets terminal history
 */

const os = require('os');
const fs = require('fs');
const path = require('path');
const parser = require('../lib/parser');

exports.history = (opts) => {
    if(os.platform === 'win32') {
        throw new Error('history on windows is not supported');
    }

    const rootPath = os.homedir();
    const historyPath = path.join(rootPath, '.bash_history');
    if (fs.existsSync(historyPath)) {
        return parser.parserObj(fs.readFileSync(historyPath, 'utf-8'), 'json');
    } else {
        throw new Error('Unble to show history.');
    }
    
}
