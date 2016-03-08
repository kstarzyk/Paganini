'use strict';

const Paganini = require('../index');
const Class = require('./class');

Paganini.opus(Class);

Paganini.concerto('Testing add function', () => {
    Paganini.capriccio('add', [2, 3], 5, '2 + 3 == 5');
    Paganini.capriccio('add', [2, 3], 4);
    Paganini.capriccio.non('add', [2, 3], 4);
    Paganini.capriccio('zipList', [[1,3,5], [2,4,6]], [1, 2, 3, 4, 5, 6], 'zip $args[0] and $args[1] to one list');
});
