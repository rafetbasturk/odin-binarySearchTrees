const mergeSort = require('./mergeSort');
const Node = require('./classes/nodeClass');

const sortedToBST = (array, start, end) => {
  if (start > end) return null
  let mid = Math.floor((start + end) / 2);
  const node = new Node(array[mid])
  node.left = sortedToBST(array, start, mid - 1)
  node.right = sortedToBST(array, mid + 1, end)
  return node
}

const buildTree = (array) => {
  let arr = mergeSort([...new Set(array)])
  let start = 0
  let end = arr.length - 1
  return sortedToBST(arr, start, end)
}

module.exports = buildTree