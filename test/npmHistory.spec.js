const assert = require('assert');
const history = require('../lib/npmHistory');

describe("Unit test for getting terminal history", ()=> {
    it("This test should return all the terminal history", ()=>{
        let result = history.npmHistory();
        assert(typeof result === 'string');
    })
})