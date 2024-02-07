// Data types 
// 1. Number 
var b = 4
// 2. Strings ["My name", "he", "What is your name"]
 var a = "My name"
// 3. Boolean [True or False, Yes or No]
// 4. Undefined
var c;
// 5. Null
var d = null;
// 6. Object data type
var student;

// If statement
var aaa=3
if(aaa>10){
    console.log("Correct guy")
}

// LOOPS
// WHILE LOOPS
// while("expression"){
// statements to be executed if expression is true
//}

var countingNumbers = 0

while(countingNumbers < 10){
   console.log("Counting Number:" + countingNumbers);
   countingNumbers++;
}

//DO WHILE LOOP
// do{
//     console.log("Counting Number:" + countingNumbers);
//     countingNumbers++;
// }while(countingNumbers < 6)

//FOR LOOP
// for ("initialization"; "test condition"; "increament"){
//     statement to be executed if expression is true
// }

for (gold = 0; gold <= 5; gold++){
    console.log("Gold coins: "+ gold);
 }

const number = 8;
for (i=1; i<=12; i++){
    let resultAnswer = number * i;
    console.log(`${number} x ${i} = ${resultAnswer}`)
}
// JAVASCRIPT FUNCTION

function myFunction ( ){
    //statements
}
function myFirstFunction (){
    console.log("I am an amazing javascript developer")
}
myFirstFunction()
function mySecondFunction (name){
    console.log(name + " is very beautiful")
}
mySecondFunction("Winnie");

function street (sex, complexion){
    let output;
    output = `Adaobi is ${sex} and is ${complexion}`;
    console.log(output)
    return output;
}
street("female","fair")

function area(length,breadth){
    const area = length * breadth;
    console.log(`${area} cm`)
}
area(10,5)

function celsiusConverter(c){
    var F = (9/5 * c)+32;
    console.log(`${c} degree celsius is equal to ${F} fahrenheit`)
}
celsiusConverter(20)

//Array constructor
const testArray = new Array('me', 3, false, 'House');

console.log(testArray[2])

// Array literal used
const myArray = [1,2,3,4,5,6];
//console.log(myArray[5])


myArray[2] = 'Wealth';
myArray.push('Billionaire')

for(i=0; i<myArray.length; i++){
    console.log(myArray[i])
}



//Array concatention

var yourArray = [1, "His", "My", "Us", 5]

arrayResult = myArray.concat(yourArray)

console.log(myArray)
console.log(arrayResult)
console.log(arrayResult[3])
console.log(typeof myArray)
console.log(arrayResult.toString())
console.log(arrayResult.join('  | '))
arrayResult.shift()
console.log(arrayResult)
arrayResult.pop()
console.log(arrayResult)
arrayResult.reverse()
console.log(arrayResult)


//Object in Js
var students = {
    firstName: "John",
    lastName: "Doe",
    age : 30,
    gender : "Male",
    occupation : "Teacher",
    isMarried : true,
    hobbies : ["Reading", "Writing", "Coding"],
    address : {
        streetAddress : "123 Main St.",
        city : "New York",
        state : "NY",
        zipCode : "10001"
    }

    
}
console.log(students.address.zipCode)

// Asynchronous Js
console.log("first");
setTimeout(()=>{
    console.log("second")
},2000)
console.log("third");
console.log("fourth");

// function greeting(name, callback){
//     console.log(`Hello  ${name}`);
//     callback()
// }

// function callbackFunction(){
//     console.log(`I am a callback function`)
// }

// greeting('Nkechi', callbackFunction)

// Js PROMISE

function greeting (name){
    return new Promise((resolve, reject)=>{
        if (name === "error"){
            reject("this is not a name")
        }else{
        console.log(`Hello ${name}`);
        resolve();
        }
    });
}

function theFunction(){
    console.log(`I am a callback function`)
}

const errorMessage = "Its a number"

// Using the promise

greeting("Mabel").then(()=>{
    theFunction();
}).catch((error)=>{
    console.log('Error', error, errorMessage);

})


/* 2/7/2024 Wed, ES6 
 Arrow function
 const mabel=()=>{}
*/ 
// array destructuring
const array = [1,2,3,4];

const [first, second,third,fourth,fifth] = array;

console.log(first)

// object destructuring
const ayiba = {
    age : 28,
    gender : "Male",
    occupation : "NYSC",
    salary : 33000
}


const {age,gender,occupation,salary} = ayiba;

console.log(salary)

// Spread operators

const imoh = [2,4,6,8];
const testNow = {...ayiba};
const tryNow = [...imoh];
console.log(tryNow,testNow)








