# The Big O of Objects

- Inserting a new property -> O(1)
- Removing a property -> O(1)
- Searching for a value in a property -> O(n)
- Accessing a Property -> O(1)
- Object.keys -> O(n)
- Object.values -> O(n)
- Object.entries -> O(n)
- Object.hasOwnProperty -> O(1)

# The Big O of Arrays

- Insertion -> Depends
- Removal -> Depends
- Searching -> O(n)
- Access -> O(1)

Array Methods

- push -> O(1)
- pop -> O(1)
- shift -> O(n)
- unshift -> O(n)
- concat -> O(n)
- slice -> O(n)
- splice -> O(n)
- sort -> O(n \* log n)
- forEach, map, reduce, filter, etc -> O(n)

Inserting or removing at the beggining of an array will always be very costy because all the elements will neeed to be reindexed to the array.
