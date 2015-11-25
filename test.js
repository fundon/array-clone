'use strict'

const assert = require('assert')
const arrayClone = require('./')

describe('arrayClone()', () => {

  let arr, len, i

  it ('arr.length = 0', () => {
    arr = []
    len = 0
    assert.deepEqual(arr, arrayClone(arr, len))
  })

  it ('arr.length = 1', () => {
    arr = [1]
    len = 1
    assert.deepEqual(arr, arrayClone(arr, len))
  })

  it ('arr.length < 50', () => {
    arr = new Array(49)
    len = 49
    i = 0
    while (i < len) {
      arr[i] = len - i
      i++
    }
    assert.deepEqual(arr, arrayClone(arr, len))
  })

  it ('arr.length > 50', () => {
    arr = new Array(51)
    len = 51
    i = 0
    while (i < len) {
      arr[i] = len - i
      i++
    }
    assert.deepEqual(arr, arrayClone(arr, len))
  })

})
