class Queue {
  constructor(maximumLength) {
    this.maximumLength = maximumLength || 65535;
    this.head = 0;
    this.tail = 0;
    this.values = {};
  }

  get length() {
    return this.tail - this.head;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = this.values[this.head];
    delete this.values[this.head];
    this.head += 1;
    if (this.isEmpty()) {
      this.head = 0;
      this.tail = 0;
    }
    return item;
  }

  enqueue(value) {
    if (this.isFull()) {
      throw new RangeError('The Queue is full, cannot insert more items');
    } else {
      this.values[this.tail] = value;
      this.tail += 1;
    }
  }

  isEmpty() {
    return this.length <= 0;
  }

  isFull() {
    return this.length >= this.maximumLength;
  }

  peek() {
    return this.values[this.head];
  }

  toArray() {
    return Object.keys(this.values).map(key => this.values[key]);
  }
}

export default Queue;
