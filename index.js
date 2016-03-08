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

    non() {
        let arr = Object.keys(arguments).map((k) => arguments[k]);
        if (arr.length == 3) {
            arr.push(0);
        }
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
        let desc = '';
        if (_desc === 0) {
            desc = `${fn} ${args} ${!rev ? '' : 'not'} results ${result}`;
        } else {
            if (_desc.split(' ').indexOf('$args') > -1) {
                desc = _desc.replace('$args', args.toString());
            } else if(_desc.match(new RegExp('\\$args\\[(.?)\\]')) != null) {
                const reg = new RegExp('\\$args\\[(.?)\\]', 'g');
                let match = reg.exec(_desc);
                while (match != null) {

                    _desc = _desc.replace(match[0], args[match[1]]);
                    match = reg.exec(_desc);
                }
                desc = _desc;
            } else {
                desc = _desc;
            }
        }

        if (typeof(result) == 'object') {
            testFunc = 'deepEqual';
        }


        let passed = !rev;
        let msg = '';
        try {
            assert[testFunc](this.object[fn](...args), result);
        } catch (ex) {
            msg = `${ex.name}: ${ex.message}`;
            passed = rev;
        } finally {
            if (passed) {
                console.log(`    ${desc}${pad(40 - desc.length)}passed`);
                return true;
              } else {
                console.log(`    ${desc}${pad(40 - desc.length)}failed: ${msg}`);
                return false;
              }
        }
    }
}


module.exports = new Paganini();
