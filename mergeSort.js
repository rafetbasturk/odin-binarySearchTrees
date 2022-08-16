const merge = (left, right) => {
  let result = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result = [...result, left[0]]
      left.shift()
    }
    else {
      result = [...result, right[0]]
      right.shift()
    }
  }
  return [...result, ...left, ...right]
}

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }

  const divider = Math.floor(arr.length / 2)
  const left = arr.slice(0, divider)
  const right = arr.slice(divider)

  return merge(mergeSort(left), mergeSort(right))
}

module.exports = mergeSort