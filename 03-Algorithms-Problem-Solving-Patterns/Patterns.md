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
