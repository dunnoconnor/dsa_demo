const Queue = require('./queue');

test('should add elements to the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
});

test('should remove elements from the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    expect(queue.size()).toBe(1);
    expect(queue.front()).toBe(2);
});

test('should indicate when queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
});

test('should return the front element of the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front()).toBe(1);
});

test('should return the size of the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).toBe(3);
});