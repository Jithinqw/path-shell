const os = require('os');
const fs = require('fs');

exports.fileSearch = (ext) => {

    if(os.platform === 'win32') {
        return [];
    }

    const rootPath = os.homedir();
    fs.readdirSync(rootPath).forEach(file => {
        return file.filter(statFile => {
            statFile.match(new RegExp(`.*\.(${ext})`, 'ig'))
        });
    });

}