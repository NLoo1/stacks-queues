/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // Case of empty queue
    if (this.size == 0) {
      let newNode = new Node(val)
      this.first = newNode
      this.last = newNode
      this.size += 1
      return
    } else {

      // Else, change tail node's next to be new node. Set new node to tail
      let newNode = new Node(val)
      this.last.next = newNode
      this.last = newNode
      this.size += 1
      return
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size <= 0) throw Error('Queue is empty')
    else {

      // Set first node to be the next node, then decrement size
      this.first = this.first.next
      this.size -=1

      // If queue is emptied through dequeue
      if(this.size == 0){
        this.first = null
        this.last = null
        this.size = 0
      }
      return
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size==0
  }
}

module.exports = Queue;
