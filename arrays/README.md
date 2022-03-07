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



### Let's get working!


### Review
- When should you use an array?