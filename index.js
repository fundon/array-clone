'use strict'

module.exports = arrayClone

// https://github.com/nodejs/node/pull/3976
// Optimized common usages (listeners < 50) and using slice for
// large arrays so it scales much better
function arrayClone(arr, length) {
  if (length === 0) {
    return []
  } else if (length === 1) {
    return [arr[0]]
  } else if (length < 50) {
    const copy = new Array(length)
    for (let i = 0; i < length; i++)
      copy[i] = arr[i]
    return copy
  }
  return arr.slice()
}
