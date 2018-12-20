// eslint-disable-next-line import/no-extraneous-dependencies
const Benchmark = require('benchmark');

// eslint-disable-next-line import/no-unresolved
const Queue = require('../lib/index').default;

const suite = new Benchmark.Suite();

const testLength = process.argv[2] || 1000000;
const queue = new Queue(testLength);
const array = new Array(testLength);

for (let length = 0; length < testLength; length += 1) {
  queue.enqueue(length);
  array.push(length);
}

process.stdout.write(`\nRunning benchmark with ${testLength} items:\n\n`);

suite
  .add('Array#shift()   ', () => {
    const a = array.shift();
    const b = array.shift();
    const c = array.shift();
    array.push(a);
    array.push(b);
    array.push(c);
  })
  .add('Queue#dequeue() ', () => {
    const a = queue.dequeue();
    const b = queue.dequeue();
    const c = queue.dequeue();
    queue.enqueue(a);
    queue.enqueue(b);
    queue.enqueue(c);
  })
  .on('cycle', (event) => {
    process.stdout.write(`${String(event.target)}\n`);
  })
  .on('complete', function complete() {
    process.stdout.write(`Fastest is ${this.filter('fastest').map('name')}\n`);
  })
  .run({ async: true });
