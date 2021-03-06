[![Build Status](https://travis-ci.org/truck-js/queue.svg?branch=master)](https://travis-ci.org/truck-js/queue)
[![Coverage Status](https://coveralls.io/repos/github/truck-js/queue/badge.svg?branch=master)](https://coveralls.io/github/truck-js/queue?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Queue

A JavaScript _Queue_ data structure.

A _Queue_ follows a FIFO (First-In-First-Out) methodology, just like the queue at the shopping mall.

## Installation

Install `@truck/queue` via npm:

```sh
$ npm install --save @truck/queue
```

## Methods

### `constructor(maximumLength?: int)`

Build a new queue. Pass an optional `maximumLength` which will limit the _Queue_ length, the default
is _65535_.

### `dequeue(): any`

**O(1)**. Removes the bottom (first inserted) value from the _Queue_ and returns it.

### `enqueue(value: any): void`

**O(1)**. Adds a value to the top of the _Queue_. Throws a `RangeError` when the addition exceeds
the maximum length allowed (defined in the `constructor`).

### `isEmpty(): boolean`

**O(1)**. Checks whether the _Queue_ is empty.

### `isFull(): boolean`

**O(1)**. Checks whether the _Queue_ is full.

### `peek(): any`

**O(1)**. Get the item at the front of the _Queue_ without removing it.

### `toArray(): any[]`

**O(n)**. Returns the _Queue_ as an array.

## Properties

### `.length: number`

Returns the current length of the _Queue_.

## Examples

A _Queue_ is a standard class which can be instantiated with the `new` keyword:

```js
// Build a new Queue with a maximum length of 10 values
const queue = new Queue(10);
// Get the length of the Queue
let length = Queue.length; // 0
// Add some values to the Queue
queue.enqueue(1);
queue.enqueue('two');
queue.enqueue({ three: 'three' });
queue.enqueue(false);
// Check if the Queue is full
if (!queue.isFull()) {
  queue.enqueue('FIVE');
}
// Get the length of the Queue
length = Queue.length; // 5
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
// Get the length of the Queue
length = Queue.length; // 0
```

## Testing

Use the following command to run all the tests described below together:

```sh
$ docker-compose run --rm app npm test
```

### Commit messages

Commit messages are linted through the use of [husky](https://www.npmjs.com/package/husky) and
[@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) using the
[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
commit convention.

Please read through the
[AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
to get a better understanding of how commit messages are formatted.

After doing an `npm install` the required git hooks wil be added automatically and commit messages
will be linted automatically.

### Linting

Linting is done using [eslint](https://eslint.org/) using the
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) configuration
with very few alterations, all of which can be seen in the [.eslintrc](.eslintrc) file in the root
of this repository.

Linting can be run in isolation through the command:

```sh
$ docker-compose run --rm app npm run test:lint
```

### Auditing

Auditing of dependencies is done through the [npm audit](https://docs.npmjs.com/cli/audit)
command-line tool.

Auditing can be run in isolation through the command:

```sh
$ docker-compose run --rm app npm run test:vulnerabilities
```

### Unit testing

Unit testing is done with [jest](https://jestjs.io). The test file for each file to be tested is to
be placed alongside the file in testing and marked with the `.test.js` extension.

Unit testing can be run in isolation through the command:

```sh
$ docker-compose run --rm app npm run test:scripts
```

### Benchmarking

Although not part of the CI test suite, a _Benchmark_ test is available to see how _Queue_ performs
against a standard array with 1,000,000 items.

The _Benchmark_ test can be run with the following command:

```sh
$ docker-compose run --rm app npm run test:benchmark
```

Optionally, the amount of items can be set by passing in the amount to the script:

```sh
$ docker-compose run --rm app npm run test:benchmark 65535
```

## Contributing

Contributions are always welcome, just submit a PR to get the conversation going. Please make sure
all tests pass before submitting a PR.

### Releases

The moment a PR is merged into the `master` branch
[semantic-release](https://github.com/semantic-release/semantic-release) will kick-off a new
release, thus the importance of clear commit messages.
