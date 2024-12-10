var data = [1,2,3,4,5];
function insertionSort(array) {
    if (array.constructor !== Array) {
        return null;
    }

    var arr = array.slice(0), i, len, j;
    for (i = 1, len = arr.length; i < len; i++) {
        for (j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                arr.splice(j, 0, arr.splice(i, 1)[0]);
                break;
            }
        }
    }
    return arr;
}

/**
 * Module exports.
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = insertionSort;
}
merge-sort.js
'use strict';

/**
 * Merges two arrays in ascending order.
 *
 * @param {Array} leftArray - The first array.
 * @param {Array} rightArray - The second array.
 * @return {Array}
 */
function merge(leftArray, rightArray) {
    if (leftArray.constructor !== Array && rightArray.constructor !== Array) {
        return null;
    }

    var left = leftArray.slice(0),
        right = rightArray.slice(0),
        result = [];
    while (left.length > 0 || right.length > 0) {
        if (left[0] <= right[0] || right.length === 0) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result;
}

/**
 *
 * @param {Array} array - The array to be sorted.
 * @return {Array}
 */
function mergeSort(array) {
    if (array.constructor !== Array) {
        return null;
    }

    var arr = array.slice(0),
        len = arr.length,
        left, right;
    if (array.constructor === Array && len < 2) {
        return array;
    }
    left = arr.splice(0, len / 2);
    right = arr;
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
}

/**
 * Module exports.
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mergeSort;
}