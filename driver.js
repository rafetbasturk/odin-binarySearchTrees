const Tree = require("./classes/treeClass")

const createRandomArray = (n, max) => {
  return Array.from({ length: n }, () => Math.ceil(Math.random() * max))
}

const driver = (n, max) => {
  const arr = createRandomArray(n, max)
  const bst = new Tree(arr)
  console.log("isBalanced?", bst.isBalanced());
  console.log("levelOrder", bst.levelOrder());
  console.log("inOrder", bst.inOrder());
  console.log("preOrder", bst.preOrder());
  console.log("postOrder", bst.postOrder());
  bst.insert(172)
  bst.insert(161)
  console.log("is still balanced after insertions?", bst.isBalanced());
  bst.reBalance(bst)
  console.log("rebalanced", bst.isBalanced());
  console.log("levelOrder", bst.levelOrder());
  console.log("inOrder", bst.inOrder());
  console.log("preOrder", bst.preOrder());
  console.log("postOrder", bst.postOrder());
}

driver(5, 100)