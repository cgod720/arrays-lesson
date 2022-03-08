# Intro to Arrays

## Learning Objectives
### After this lesson, fellows will be able to:
- Define what an Array is and its use cases
- Work with Arrays in JavaScript
- Use different Array methods

## Arrays
`Arrays` are a [reference data type](https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/) which can hold `multiple values` unlike the primitive data types we have seen already that can only hold one.
<br/>

`Arrays` are used for ordered collections of related data and are organized by `index`

Suppose you have a `list` of groceries:

- You could store them in variables one at a time like this..
```js
let grocery1 = "milk"
let grocery2 = "eggs"
let grocery3 = "bread"
```
..but this is pretty inefficient.


Instead you could store them in just one variable that holds an `array` with the whole list of groceries.

We instantiate an array like this:

```js
const groceries = ["milk", "eggs", "bread"]
```

An array is a better approach any time you want to work with a list with multiple values.


### Accessing single values inside an array
When going through our list of groceries, we may want to see each grocery one at a time.

In our `array`, we can access a single value by using its `index`, like below:
```js
groceries[0]
```

### Updating a single value in an array
```js
groceries[0] = 'almond milk'
```


#### Knowledge Check
1. Create an array of names of people or pets that you know and save it to a variable called `names`.
1. Console log the `second` name in `names`.
1. Update the first value in the array to be a different name. 
1. How could you get the last element in the array?
<br/>

### The `length` property
Like strings, all `arrays` have a `length` property that returns the number of elements in the array
```js
groceries.length  // => 3
```

Using what we now know, how else could we get the last element in our groceries array?


### Nested Arrays
In JS `arrays` can hold any data type, even an `array`!
```js
const letters = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h']]
```



## Array Methods
Arrays are objects that have both properties (like length) and behaviors that we call methods.
These methods are actions that the `array` can perform. We use these methods to manipulate the elements in the array.

### `push()`
To add an element to the end of an array, use `push()` on the array. Whatever is passed to the `push()` method inside the parenthesis will be added to the array.
You can `push()` more than one value at once
```js
groceries.push('yogurt') // adds 'yogurt' to the groceries array

groceries.push('yogurt', 'apple juice') // adds both values to the groceries array
```


### `pop()`
To remove an element from the END of an array, use the `pop()` method on the array. This method takes no arguments
```js
groceries.pop() // removes the last element from groceries
```

### `shift()`
This method REMOVES an element from the FRONT of the array, and also takes no arguments
```js
groceries.shift() // removes FIRST element from groceries
```


### `unshift()`
This method ADDS an element to the FRONT of the array, and requires an argument that it will add to the front
```js
groceries.unshift('bananas') // adds 'bananas' as first element in the array
```

### Review
- When should you use an array?


