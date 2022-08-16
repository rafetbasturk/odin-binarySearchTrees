const buildTree = require('../buildTree');
const Node = require('./nodeClass');

class Tree {
  constructor(array) {
    this.root = buildTree(array)
  }

  insert(value) {
    const searchAndInsert = (node, value) => {
      if (node === null) {
        return new Node(value)
      }
      if (node.data === value) {
        return node
      }
      else {
        if (value < node.data) {
          node.left = searchAndInsert(node.left, value)
        }
        else {
          node.right = searchAndInsert(node.right, value)
        }
        return node;
      }
    }
    this.root = searchAndInsert(this.root, value)
  }

  delete(value) {
    const removeNode = (node, value) => {
      if (node === null) {
        return null;
      }
      if (value === node.data) {
        // node has no children 
        if (node.left === null && node.right === null) {
          return null;
        }
        // node has no left child 
        if (node.left === null) {
          return node.right;
        }
        // node has no right child 
        if (node.right === null) {
          return node.left;
        }
        // node has two children 
        var temp = node.right;
        while (temp.left !== null) {
          temp = temp.left;
        }
        node.data = temp.data;
        node.right = removeNode(node.right, temp.data);
        return node;
      } else if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    }
    this.root = removeNode(this.root, value);
  }

  find(value) {
    let current = this.root;
    while (current.data !== value) {
      if (value < current.data) {
        current = current.left;
      }
      else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current
  }

  levelOrder() {
    let result = []
    let queue = []
    if (this.root) {
      queue.push(this.root)
      while (queue.length) {
        let current = queue.shift()
        result.push(current.data)
        if (current.left) {
          queue.push(current.left)
        }
        if (current.right) {
          queue.push(current.right)
        }
      }
      return result
    }
    else {
      return null
    }
  }

  inOrder() {
    let result = []
    const traverse = (node) => {
      if (node) {
        if (node.left) {
          traverse(node.left)
        }
        result.push(node.data)
        if (node.right) {
          traverse(node.right)
        }
      }
    }
    traverse(this.root)
    return result
  }

  preOrder() {
    let result = []
    const traverse = node => {
      if (node) {
        result.push(node.data)
        if (node.left) {
          traverse(node.left)
        }
        if (node.right) {
          traverse(node.right)
        }
      }
    }
    traverse(this.root)
    return result
  }

  postOrder() {
    let result = []
    const traverse = node => {
      if (node) {
        if (node.left) {
          traverse(node.left)
        }
        if (node.right) {
          traverse(node.right)
        }
        result.push(node.data)
      }
    }
    traverse(this.root)
    return result
  }

  height(node = this.root) {
    if (!node) {
      return -1
    }
    let left = this.height(node.left)
    let right = this.height(node.right)
    return Math.max(left, right) + 1
  }

  depth(value) {
    let node = this.find(value)
    return this.height() - this.height(node)
  }

  isBalanced() {
    const lHeight = this.height(this.root.left)
    const rHeight = this.height(this.root.right)
    return (lHeight === rHeight) || (lHeight === rHeight - 1) || (lHeight === rHeight + 1)
  }

  reBalance(arr) {
    if (this.isBalanced()) {
      return arr
    }
    this.root = buildTree(arr.inOrder())
  }
}

// const bst = new Tree([5, 7, 2, 9, 1, 3, 4])
// bst.insert(13)
// bst.insert(16)
// bst.delete(80)
// console.log(bst.find(2));
// console.log(bst.levelOrder());
// console.log(bst.inOrder());
// console.log(bst.preOrder());
// console.log(bst.postOrder());
// console.log(bst.height());
// console.log(bst.depth(2));
// console.log(bst.isBalanced());
// console.log(bst.root);

module.exports = Tree