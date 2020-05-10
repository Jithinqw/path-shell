/**
 * @fileoverview utils parser for converting 
 * text to a user defined format.
 */

exports.parserObj = (parserText, opts) => {
    switch(opts) {
        case 'array':
            return parseToArray(parserText);
        case 'json':
            return parseToJSON(parserText);
        default:
            return parserText;
    }
}

const parseToArray = (parserText) => {
    return parserText.trim().split('\n');
}

const parseToJSON = (parserText) => {
    return JSON.stringify(parserText.trim().split('\n'));
}