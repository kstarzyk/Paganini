'use strict';

class TestClass {
    constructor() {}
    
    static add(a, b) {
        return a+b;
    }

    static zipList(a, b) {
        let res = [];
        a.map((elem, i) => { res.push(elem); res.push(b[i]) });
        return res;
    }
}

module.exports = TestClass;
