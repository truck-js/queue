import Queue from './index';

describe('.length', () => {
  let queue;

  beforeAll(() => {
    queue = new Queue();
  });

  test('Returns \'0\' upon construction of the Queue', () => {
    expect(queue.length).toBe(0);
  });

  test('Returns the length of the Queue after adding values', () => {
    const expected = 5;

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    const actual = queue.length;

    expect(actual).toBe(expected);
  });

  test('Returns the length of the Queue after removing values', () => {
    const expected = 2;

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    const actual = queue.length;

    expect(actual).toBe(expected);
  });

  test('Returns \'0\' again after removing all values', () => {
    const expected = 0;

    queue.dequeue();
    queue.dequeue();
    const actual = queue.length;

    expect(actual).toBe(expected);
  });
});

describe('.dequeue()', () => {
  let queue;

  beforeAll(() => {
    queue = new Queue();
  });

  test('Returns \'undefined\' if there are no values to remove', () => {
    expect(queue.dequeue()).toBe(undefined);
  });

  test('Returns the values in FIFO order', () => {
    const VALUE_ONE = 'VALUE_ONE';
    const VALUE_TWO = 'VALUE_TWO';
    const VALUE_THREE = 'VALUE_THREE';
    const expected = [VALUE_ONE, VALUE_TWO, VALUE_THREE];

    queue.enqueue(VALUE_ONE);
    queue.enqueue(VALUE_TWO);
    queue.enqueue(VALUE_THREE);
    const actual = [queue.dequeue(), queue.dequeue(), queue.dequeue()];

    expect(actual).toEqual(expected);
  });
});

describe('.enqueue()', () => {
  let queue;

  beforeAll(() => {
    queue = new Queue(5);
  });

  test('Adds values to the Queue', () => {
    const expected = 5;

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    const actual = queue.length;

    expect(actual).toBe(expected);
  });

  test('Throws a \'RangeError\' when the Queue is full', () => {
    const expected = new RangeError('The Queue is full, cannot insert more items');
    let actual;

    try {
      queue.enqueue(6);
    } catch (error) {
      actual = error;
    }

    expect(actual).toEqual(expected);
  });
});

describe('.isEmpty()', () => {
  let queue;

  beforeAll(() => {
    queue = new Queue();
  });

  test('Returns \'true\' when the Queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('Returns \'false\' when the Queue is not empty', () => {
    const expected = false;

    queue.enqueue(1);
    const actual = queue.isEmpty();

    expect(actual).toBe(expected);
  });

  test('Returns \'true\' when the Queue is emptied again', () => {
    const expected = true;

    queue.dequeue();
    const actual = queue.isEmpty();

    expect(actual).toBe(expected);
  });
});

describe('.isFull()', () => {
  let queue;

  beforeAll(() => {
    queue = new Queue(5);
  });

  test('Returns \'false\' when the Queue is not full', () => {
    expect(queue.isFull()).toBe(false);
  });

  test('Returns \'true\' when the Queue is filled', () => {
    const expected = true;

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    const actual = queue.isFull();

    expect(actual).toBe(expected);
  });

  test('Returns \'false\' when a value from a filled Queue is dequeued', () => {
    const expected = false;

    queue.dequeue();
    const actual = queue.isFull();

    expect(actual).toBe(expected);
  });
});

describe('.peek()', () => {
  let queue;

  beforeAll(() => {
    queue = new Queue();
  });

  test('Returns \'undefined\' when the Queue is empty', () => {
    expect(queue.peek()).toBe(undefined);
  });

  test('Returns the value at the front of the Queue', () => {
    const VALUE_ONE = 'VALUE_ONE';
    const VALUE_TWO = 'VALUE_TWO';
    const VALUE_THREE = 'VALUE_THREE';
    const expected = VALUE_ONE;

    queue.enqueue(VALUE_ONE);
    queue.enqueue(VALUE_TWO);
    queue.enqueue(VALUE_THREE);
    const actual = queue.peek();

    expect(actual).toBe(expected);
  });

  test('Does not remove the value at the front of the Queue', () => {
    expect(queue.length).toBe(3);
  });
});

describe('.toArray()', () => {
  let queue;

  beforeAll(() => {
    queue = new Queue();
  });

  test('Returns an empty array for a Queue with no items', () => {
    expect(queue.toArray()).toEqual([]);
  });

  test('Returns the values in the Queue as an array', () => {
    const VALUE_ONE = 'VALUE_ONE';
    const VALUE_TWO = 'VALUE_TWO';
    const VALUE_THREE = 'VALUE_THREE';
    const expected = [VALUE_ONE, VALUE_TWO, VALUE_THREE];

    queue.enqueue(VALUE_ONE);
    queue.enqueue(VALUE_TWO);
    queue.enqueue(VALUE_THREE);
    const actual = queue.toArray();

    expect(actual).toEqual(expected);
  });
});
