'use strict';

const assert = require('assert');

function pad(len) {
    return Array(len).join(' ');
}

class Paganini {
    constructor() {
        console.log('Paganini, maestro!\n');
        this.object = {};
        this.capriccio = this.test;
        this.capriccio.non = this.non.bind(this);
        this.concerto = this.route;
        this.opus = this.addObject;
    }

    addObject(object) {
        this.object = object;
    }

    getDescription(desc, args) {
        if (desc.split(' ').indexOf('$args') > -1) {
            desc = desc.replace('$args', args.toString());
        } else if(desc.match(new RegExp('\\$args\\[(.?)\\]')) != null) {
            const reg = new RegExp('\\$args\\[(.?)\\]', 'g');
            let match = reg.exec(desc);
            while (match != null) {
                desc = desc.replace(match[0], args[match[1]]);
                match = reg.exec(desc);
            }
        }

        return desc;
    }

    non() {
        let arr = Object.keys(arguments).map((k) => arguments[k]);
        if (arr.length == 3)
            arr.push(0);
        arr.push(true);
        return this.test(...arr);
    }

    route(name, fn) {
        console.log('  PRELUDIO: ', name);
        fn();
        console.log('  FINALE:', name);
        console.log('\nGrazie!');
    }

    test(fn, args, result, _desc=0, rev=false) {
        let testFunc = 'equal';
        if (_desc === 0)
            _desc = `${fn} ${args} ${!rev ? '' : 'not'} results ${result}`;
        else
            _desc = this.getDescription(_desc, args);

        if (typeof(result) == 'object')
            testFunc = 'deepEqual';

        let passed = !rev;
        let msg = '';
        try {
            assert[testFunc](this.object[fn](...args), result);
        } catch (ex) {
            msg = `${ex.name}: ${ex.message}`;
            passed = rev;
        } finally {
            if (passed) {
                console.log(`    ${_desc}${pad(40 - _desc.length)}passed`);
                return true;
            } else {
                console.log(`    ${_desc}${pad(40 - _desc.length)}failed: ${msg}`);
                return false;
            }
        }
    }
}


module.exports = new Paganini();
