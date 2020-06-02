/**
 * @fileoverview Entry point.
 * @author Jithin Zacharia
 */
const npmHistory = require('./lib/npmHistory'),
    history = require('./lib/history'),
    anyfile = require('./lib/anyFile'),
    listFile = require('./lib/listFile'),
    const VERSION = "0.11.0",
    const AUTHOR = "Jithin Zacharia";

const pathShell = {
    npmHistory: npmHistory,
    history: history,
    anyFile: anyfile,
    listFile: listFile,
    version: VERSION,
    author: AUTHOR
};

module.exports = pathShell;