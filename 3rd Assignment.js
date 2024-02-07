/// The Tasks

// 1. Create an object representing a person with at most 10 properties. Display these properties.

var Wisdom = { fisrtName : "Nimingonengim",
       lastName : "Dan-Obu", 
       middlename : "Somieari",
       age : 22,
       complexion : "Brown skin",
       dateOfBirth : "06-06-2001",
       stateOfOrigin : "Rivers",
       localGovernmentArea : "Degema",
       likes : ["food", "games", "travelling"],
       addrss : {
             streetAddress : "Gloria Avenue",
             city : "Port Harcourt",
             state : "Rivers State",
             zipCode : "500262",
    }
}
console.log(Wisdom)


// 2. Create an empty array named numbers. Add the numbers 10, 20, and 30 to the array. Print the array after adding the numbers.
const numbers = []


numbers.push(10,20,30)
console.log(numbers)

// 3. Create an array named fruits containing the names of three fruits. Access and print the second fruit in the array.
const fruits = ["Apple", "Mango", "Pear"]

console.log(fruits[1])

// 4. Consider the person object from Exercise 1. Update the age property of the person object to 25. display the updated person object
Wisdom.age = 25;
console.log(Wisdom.age)




 