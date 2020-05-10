const assert = require('assert');
const history = require('../lib/history');

describe("Unit test for getting terminal history", ()=> {
    it("This test should return all the terminal history", ()=>{
        let result = history.history();
        assert(typeof result === 'string');
    })
})