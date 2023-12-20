const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.origin = null;
  }

  root() {
    return this.origin;
  }

  add(data) {
    const addingNode = (node, data) => {
      if (node) node.data <= data ? node.right = addingNode(node.right, data) : node.left = addingNode(node.left, data);
      else node = new Node(data);
      return node;
    }
    this.origin = addingNode(this.origin, data);
  }

  has(data) {
    const hasNode = (node, data) => {
      if (node) {
        node.data === data ? node = true : node.data > data ? node = hasNode(node.left, data) : node = hasNode(node.right, data);
        return node;
      } else return false;
    }
    return hasNode(this.origin, data);
  }

  find(data) {
    const findNode = (node, data) => {
      if (node) {
        node.data === data ? node : node.data > data ? node = findNode(node.left, data) : node = findNode(node.right, data);
        return node;
      } else return null
    }
    return findNode(this.origin, data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node) {
        if (node.data > data || node.data < data) {
          data > node.data ? node.right = removeNode(node.right, data) : node.left = removeNode(node.left, data);
          return node;
        }
        if (node.right && node.left) {
          let minRight = node.right;
          while (minRight.left !== null) minRight = node.right.left;
          node.right = removeNode(node.right, minRight.data);
          node.data = minRight.data;
        } else (node.left === null && node.right === null) ? node = null : node.left !== null ? node = node.left : node = node.right;

        return node;
      } else return null;
    }
    this.origin = removeNode(this.origin, data);
  }

  min() {
    let min = this.origin;
    while (min.left !== null) min = min.left;
    return min ? min.data : null;
  }

  max() {
    let max = this.origin;
    while (max.right !== null) max = max.right;
    return max ? max.data : null;
  }
}

module.exports = {
  BinarySearchTree
};