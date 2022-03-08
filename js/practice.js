// In your index.html make sure to connect this file at the bottom of the body by commenting in the correct script, and commenting out the one we used in class


// You will be working w an array called 'groceries'
const groceries = ["milk", 'eggs', 'bread']

const groceryList = document.querySelector('#groceries')


const populate = () => {
    groceryList.innerHTML = ''
    for (const item of groceries) {
        let grocery = document.createElement('li')
        grocery.innerText = item
        groceryList.appendChild(grocery)
    }
}

populate()



// You Do:

// Use the Array methods we went over in class to make the code below work!
// Only write code in the designated areas but DO NOT alter the code already written.


// 1. Remove a grocery from the front of the list
const removeButton = document.querySelector('#remove')
removeButton.addEventListener('click', () => {
    // Write your code below here
    
    
    
    // Do not change anything under this line
    populate()
})


// 2. Remove grocery from the END of the list:
const removeFromEnd = document.querySelector('#remove-from-end')
removeFromEnd.addEventListener('click', () => {
    //Write your code below this line
    
    
    
    // Do not change anything below this line
    populate()
})


// 3. Add a grocery to the END of the list:
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    // item is the value we write inside the form
    let item = document.querySelector('#new-item').value

    // Write your code below this line



    // Do not change anything under this line
    form.reset()
    populate()
})

// 4. Add a grocery to the FRONT of the list:
const frontOfListForm = document.querySelector('#form-front-of-list')
frontOfListForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // item is the value we write inside the form
    let item = document.querySelector('#front-of-list').value

    // Write your code below this line
    

    // Do not change anything below this line
    frontOfListForm.reset()
    populate()
})


// 5. BONUS: Use what you know about `loops` to iterate over the groceries array and log each item to the console.
