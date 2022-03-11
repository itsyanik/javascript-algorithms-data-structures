/**
 * Frequency Counter: Anagram Challenge
 *
 * Given two strings, write a funtion to determine
 * if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by
 * rearranging the letters of another, such as
 * cinema, formed from iceman.
 */

/**
 * @param first String
 * @param second String
 *  */

// O(n)
function validAnagram(word, anagram) {
  if (word.length !== anagram.length) {
    return false;
  }

  const wordLetters = {};
  const anagramLetters = {};

  for (const letters of word) {
    wordLetters[letters] = (wordLetters[letters] || 0) + 1;
  }

  for (const letters of anagram) {
    anagramLetters[letters] = (anagramLetters[letters] || 0) + 1;
  }

  for (const key in wordLetters) {
    if (wordLetters[key] !== anagramLetters[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("nagaram", "anagram")); // true
console.log(validAnagram("cat", "tac")); // true

// teacher solution
/* 

function validAnagram(first, second) {
  if (first.length !== second.length)
    return false

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i > second.length; i++) {
    let letter = second[i];
   
    !lookup[letter] ? false : lookup[letter] -= 1;
  }

  return true
}
*/

/**
 * Implement a function called countUniqueValues, which
 * accepts a sorted array and counts the unique values
 * in it. There can be negative numbers.
 */

function countUniqueValues(arr) {
  let uniques = 0;

  for (let i = 0; i < arr.length; i++) {
    const next = arr[i + 1];

    if (next) {
      arr[i] === next ? null : (uniques += 1);
    } else {
      arr[arr.length] === arr[arr.length - 1] ? null : (uniques += 1);
    }
  }

  return uniques;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
