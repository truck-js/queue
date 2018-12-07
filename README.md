# Queue

A JavaScript _Queue_ data structure.

A _Queue_ follows a FIFO (First-In-First-Out) methodology, just like the queue at the shopping mall.

## Installation

Install `@truck/queue` via npm:

```sh
$ npm install --save @truck/queue
```

## Methods

### _Methods >_ `constructor(maximumLength?: int)`

Build a new queue. Pass an optional `maximumLength` which will limit the _Queue_ length, the default
is _65535_.

### _Methods >_ `dequeue(): any` (_O(1)_)

Removes a value from the _Queue_ and returns it.

### _Methods >_ `enqueue(value: any)` (_O(1)_)

Adds a value to the _Queue_. Throws a `RangeError` when the addition exceeds the maximum length
allowed (defined in the `constructor`).

### _Methods >_ `isEmpty(): boolean` (_O(1)_)

Checks whether the _Queue_ is empty.

### _Methods >_ `isFull(): boolean` (_O(1)_)

Checks whether the _Queue_ is full.

### _Methods >_ `peek(): any` (_O(1)_)

Get the item at the front of the _Queue_ without removing it.

### _Methods >_ `toArray(): any[]` (_O(n)_)

Returns the _Queue_ as an array.

## Properties

### _Properties >_ `.length`

Returns the current length of the _Queue_.

## Examples

A _Queue_ is a standard class which can be instantiated with the `new` keyword:

```js
// Build a new Queue with a maximum length of 10 items
const queue = new Queue(10);
// Add some values to the Queue
queue.enqueue(1);
queue.enqueue('two');
queue.enqueue({ three: 'three' });
queue.enqueue(false);
// Check if the Queue is full
if (!queue.isFull()) {
  queue.enqueue('FIVE');
}
// Get the Queue as an array
const queueAsArray = queue.toArray(); // [1, 'two', { three: 'three' }, false, 'FIVE']
// Remove the values from the Queue
queue.dequeue(); // 1
queue.dequeue(); // 'two'
queue.dequeue(); // { three: 'three' }
queue.dequeue(); // false
// Check if the Queue is empty
if (!queue.isEmpty()) {
  queue.dequeue(); // 'FIVE'
}
```

## Testing

### _Testing >_ Commit messages

Commit messages are linted through the use of [husky](https://www.npmjs.com/package/husky) and
[@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) using the
[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
commit convention.

Please read through the
[AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
to get a better understanding of how commit messages are formatted.

After doing an `npm install` the required git hooks wil be added automatically and commit messages
will be linted automatically.

### _Testing >_ Linting

Linting is done using [eslint](https://eslint.org/) using the
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) configuration
with very few alterations, all of which can be seen in the [.eslintrc](.eslintrc) file in the root
of this repository.

Linting can be run in isolation through the command:

```sh
$ docker-compose run --rm app npm run test:lint
```

### _Testing >_ Auditing

Auditing of dependencies is done through the [npm audit](https://docs.npmjs.com/cli/audit)
command-line tool.

Auditing can be run in isolation through the command:

```sh
$ docker-compose run --rm app npm run test:vulnerabilities
```

### _Testing >_ Unit testing

Unit testing is done with [jest](https://jestjs.io). The test file for each file to be tested is to
be placed alongside the file in testing and marked with the `.test.js` extension.

Unit testing can be run in isolation through the command:

```sh
$ docker-compose run --rm app npm run test:scripts
```

## Contributing

Contributions are always welcome, just submit a PR to get the conversation going. Please make sure
all tests pass before submitting a PR.

### _Contributing >_ Releases

The moment a PR is merged into the `master` branch
[semantic-release](https://github.com/semantic-release/semantic-release) will kick-off a new
release, thus the importance of clear commit messages.
