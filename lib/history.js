/**
 * @fileoverview Gets terminal history
 */

const os = require('os');
const fs = require('fs');
const path = require('path');

exports.history = () => {
    if(os.platform === 'win32') {
        throw new Error('history on windows is not supported');
    }

    const rootPath = os.homedir();
    const historyPath = path.join(rootPath, '.bash_history');
    if (fs.existsSync(historyPath)) {
        return fs.readFileSync(historyPath, 'utf-8');
    } else {
        throw new Error('Unble to show history.');
    }
    
}
