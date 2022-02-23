# Big O Notation

The Big O Notation is going to be the base for most of our algorithms, so it is really important that you know and understand it.

## Why do we need it?

This is gonna help us to measure the efficiency of our code, so it is important to have precise vocabulary to talk about our code performance. Many problems have more than just one solution, but how will you know which one is _best_ (as in performance-wise or any other metric that you might need)? Sometimes you might need to do some trade-offs.

## Comparing Algorithms

Problem: calculate the sum of all numbers from 1 up to (and including) _N_.

```javascript
// Basic Solution
function addUpTo(n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    total += i;
  }

  return total;
}

// Less intuitive
function addUpTo(n) {
  // Shorter is NOT necessarily better.
  return (n * (n + 1)) / 2;
}
```

### Measuring

This gives us two functions for the exactly same problem and they both solve it equaly. But now how can we measure how they work? Well, let's start measuring their speed. There is a built-in method in JavaScript that you can use called `performance.now()`. Save it into a variable before running the code and another one in a new variable after running the code. This will give you a result in milliseconds so to get a result in seconds do `t2 - t1 / 1000` and this will tell you how long it took for your code to run.

One thing to keep in note is that even running this metric, the results will vary in your own machine, maybe by a few miliseconds. If you test with the earlier functions, you'll see that the one-liner is _way_ faster.

### Measuring with Time

The problem with using time as measurement is that it will vary in different machines and even one the same machines sometimes. Also for algorithms that are already very fast, the speed will not be precise enough.

But there is another thing that happens during those algorithms that will stay consistent unlike the time it takes for them to run, the number of operations per second the computer has to perform!

[Performance Tracker Tool](https://rithmschool.github.io/function-timer-demo/)

```javascript
// three simple operations regardless
// of the size of N
function addUpTo(n) {
  // one multiplication
  // one sum
  // one division
  return (n * (n + 1)) / 2;
}

function addUpTo(n) {
  // ONE assignment
  let total = 0;

  // ONE assignment at i = 0
  // N comparisons at i < n
  // N additions and N assignments for i++
  // the greater N is, the more they happen.
  for (let i = 0; i < n; i++) {
    // The number of operations here
    // is the same as N because this
    // will have to run in loops
    // until N is reached.
    // Also a new assingment.
    // So N additions and N assignments
    total += i;
  }

  return total;
}
```

As you can see, depending on the number that we decide to use for the function, the number of operations can be as low as _2n_ or as high as _5n + 2_ (second form). But regardless of the exact number, the number of operations grows roughly in proportion with _n_.

## What is Big O Then?

Big O is a way to formalize fuzzy counting. It allows us to talk about how the runtime of an algorithm grows as the inputs grow. This means that we're gonna generalize the trends.

Definition: An algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)**, as **n** increases.

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n²)
- f(n) could be constant (f(n) = 1)

```javascript
// Number of operations is (eventually)
// bounded by a multiple of N
// Big O = O(n)
function addUpTo(n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    total += i;
  }

  return total;
}

// Big O = O(1) - Always 3 operations
// As N grows, it is NOT
// reflected in the runtime.
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// You might think this one is 2 O(n)
// But it's just O(n) because we only
// care about the general direction
// that this is going.
function countUpAndDown(n) {
  // O(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  // O(n)
  for (let i = 0; i > n; i++) {
    console.log(i);
  }
}

// In this case, we have an O(n)
// INSIDE another O(n), so it is nested
// In this case we have O(n * n)
// So O(n²)
// As n grows, the runtime grows
// roughly at the ratio of n²
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

## Simplifying Big O Expressions

When determining the time complexity of an algorithm, there are some helpful rules of thumb for Big O Expressions. They are a consequence of the definition of Big O Notation.

- O(2n) -> O(n)
- O(500) -> O(1)
- O(13²) -> O(n²)
- O(n + 10) -> O(n)
- O(100n + 50) -> O(n)
- O(n² + 5n + 8) -> O(n²)

Analyzing the complexity can get complicated! The rules of thumb help you with that, but they will not **always** work.

## Big O Shorthands

- Arithimetic operations are constant
- Variable assignment is always constant
- Accessing elements in an array (using index) or object (by using keys) is constant
- In a loop the complexity is the lenght of the loop times the complexity of whatever happens inside of the loop.

Here's a small Graph of what the Big O of an algorithm can tell about it.
<img src="https://miro.medium.com/max/1400/1*FkQzWqqIMlAHZ_xNrEPKeA.png" alt="Big O complexity graph" />

## Space Complexity

So far we have only been studying the time complexity of an algorithm, but there is also the space complexity of an algorithm to which we also have to pay attention.

The good news is that Big O can also be utilized for measuring it. It tells us about how much more memory we need to run the code in our algorithm. It does **not** include the space taken by our inputs.

- Most primitives are constant (bool, numbers, undefined, null)
- Strings require O(n) space (n = lenght of string)
- Reference types are generally O(n) where N is length (arrays) or number of keys (objects)

```javascript
// Space complexity of O(1)
function sum(arr) {
  // ONE variable
  let total = 0;

  // ONE number
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

// Directly proportional to the input
// Space complexity of O(n)
function double(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }

  return newArr; // N numbers
}
```

## Logarithms

So far so good we have only been working with simple and common complexities, but as you've seen in the graph earlier there is also two more notations involving logs. They appear more often we think!

- log<sub>2</sub>(value) = exponent -> 2<sup>exponent</sup> = value

Once again, we'll simplify and ommit the <sub>2</sub> and we'll have some rules of thumb: The logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that is less than or equal to one**.

Certain searching algorithms have logarithmic time complexity, efficient sorting algorithms involve algorithms and recursion sometimes involves logarithmic space complexity.
