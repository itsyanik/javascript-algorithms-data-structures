# Problem Solving Patterns

## Frequency Counter

This pattern uses objects or sets to collect values / frequencies of values. This can often avoid the need for nested loops or O(n²) operations with arrays and strings.

Problem example: write a function **same** that accepts two arrays. The function must return true if every value in the array has it's corresponding value squared in the second array. The frequency of the values must be the same.

same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false must be same frequency

```javascript
// "Naive" solution
// time complexity: O(n²)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }

  return true;
}

// Refactored
// time complexity O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val]) || 0) + 1
  }]

  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val]) || 0) + 1
  }

  for(let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if(frequencyCounter2[key ** 2] !== frequencyCounter[key]) {
      return false;
    }
  }

  return true;
}
```

## Multiple Pointers

This one works when we have multiple values and we start looking up from both sides of our list of values. One from the beggining and one from the end, working towards the middle.
Example: a function that accepts a **sorted** array of integers, and it should find the **first** pair where the sum is **zero**. It should return an array that includes both values that sum zero, or _undefined_ if a pair does not exist.
Or count unique values in an array.

```javascript
// "Naive" solution
// Time O(n²)
// Space O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Time O(n)
// Space O(1)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left--;
    }
  }
}
```

## Sliding Window

This pattern involves creating a window which can either be an array or number from one position to anyother. Depending on a certain condition, the window either increases or closes (and a new window is created).
Very useful for keeping track ofa subset of data in array/string.

```javascript
// write a function maxSubarraySum which accepts an array of integers
// and a number called n. The function should calculate the max sum of n
// consecutive elements in the array
//"Naive"
function maxSubArraySum(arr, n) {
  if (num > arr.length) return null;

  const max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp += arr[i + j];

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

// Time O(n)
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = num; i < arr.length; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

maxSubarraySum([], 4); // null
maxSubarraySum([4, 2, 1, 6], 1); // 13
```
