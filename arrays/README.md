# Intro to Arrays

## Learning Objectives
### After this lesson, fellows will be able to:
- Define what an Array is and its use cases
- Work with Arrays in JavaScript
- Use different Array methods

## Arrays
`Arrays` are a reference data type which can hold `multiple values` unlike the primitive data types we have seen already that can only hold one.
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
How could you get the last element in the array?
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



### Review
- When should you use an array?


