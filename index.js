/**
 * @fileoverview Entry point.
 * @author Jithin Zacharia
 */
const npmHistory = require('./lib/npmHistory'),
    history = require('./lib/history'),
    anyfile = require('./lib/anyFile'),
    listFile = require('./lib/listFile'),
    fileSearch = require('./lib/fileSearch'),
    const VERSION = "0.7.0",
    const AUTHOR = "Jithin Zacharia";

const pathShell = {
    npmHistory: npmHistory,
    history: history,
    anyFile: anyfile,
    fileSearch: fileSearch,
    listFile: listFile,
    version: VERSION,
    author: AUTHOR
};

module.exports = pathShell;