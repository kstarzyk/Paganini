# Paganini

Simple and elegant way to unit test EcmaScript6 classes.

## Info

Package under development.

## Appetizer


```js
`use strict`;

const Paganini = require('../index');
const ExampleClass = require('./class');

Paganini.opus(ExampleClass);

Paganini.concerto('Testing ExampleClass', () => {
    Paganini.capriccio('add', [2, 3], 5, '2 + 3 == 5');                    // success
    Paganini.capriccio('add', [2, 3], 4);                                  // fail
    Paganini.capriccio.non('add', [2, 3], 4);                              // success
    Paganini.capriccio('zipList', [[1,3,5], [2,4,6]], [1, 2, 3, 4, 5, 6],  // success
                       'zip $args[0] and $args[1] to one list');
});
```

## Documentation

#### Paganini.opus(class | module | function)

#### Paganini.concerto(description, callback)

#### Paganini.cappriccio(methodName, arguments, expectedResult[,description])

