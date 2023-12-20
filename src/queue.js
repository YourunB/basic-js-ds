const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {

  constructor() {
    this.nodeQueue = null;
  }

  getUnderlyingList() {
    return this.nodeQueue;
  }

  enqueue(value) {
    if (this.nodeQueue) {
      let currentNode = this.nodeQueue;
      while (currentNode.next) currentNode = currentNode.next;
      currentNode.next = new ListNode(value);
    } else this.nodeQueue = new ListNode(value);
  }

  dequeue() {
    if (this.nodeQueue) {
      const tempValue = this.nodeQueue.value;
      this.nodeQueue = this.nodeQueue.next;
      return tempValue;
    }
  }
}

module.exports = {
  Queue
};
