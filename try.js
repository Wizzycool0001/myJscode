var integerLimit = 5;
var startInt = 1;
var i = 1
while (startInt <= integerLimit){
  console.log(startInt);

  startInt+=i;
  i++

}

var countingNumbers = 0


while(countingNumbers < 10){
   console.log(countingNumbers);
   //countingNumbers+=i;
   countingNumbers++;
}

i=1 
sum=0
while(i <=5){
    sum+=i;
    i=i+1;
    console.log( sum)
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    // Loop through numbers from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible by any number between 2 and its square root, it's not prime
        if (number % i === 0) {
            return false;
        }
    }

    // If the loop completes without finding any divisors, the number is prime
    return true;
}

// Test the function
let num = 7; // Change this number to test different values
if (isPrime(num)) {
    console.log(num + ' is a prime number.');
} else {
    console.log(num + ' is not a prime number.');
}

function isPrime(numbers){
    if (numbers <= 1) return false;
    for (i=2; i<numbers; i++){
      if (numbers % i === 0){
        return false;
      }
    }
    return true
  }

  let numbers = 3
  if(isPrime(numbers)){
    console.log(numbers + " is a prime number")
  }else{
    console.log(numbers + " is not a prime number")
  }

     
const myArray = [6,5,4,3,2,1]

myArray [2] = 'Wisdom';
myArray.push('Desmond');
for (i = 0; i <=myArray.length; i++){
    console.log(myArray[i])
}
console.log (myArray)


const newArray = new Array('river', 5, 6, 'food', 'water')
for(i=0; i<=newArray.length; i++){
    console.log(newArray[i])
}
console.log(newArray[4])


const tasks = [ { id: 1, done: false }, { id: 2, done: false } ]
const completed_task = { id: 1, done: true }

const markCompleted = (tasks, task) => {
  const index = tasks.findIndex(t => t.id === task.id);
  tasks.splice(index, 1);
  tasks.push(task);
  return tasks;
}

console.log(tasks)
console.log(markCompleted(tasks, completed_task))

function outing (namee, place){
  console.log(`Will we go to ${namee}?`);
  place()
} 

function sure(){
  console.log(`Yes we will`)
}

outing("Kilimanjaro", sure)



function eat (food){
  return new Promise((resolve, reject)=>{
      if (food === "Beans"){
          reject("He did not,")
      }else{
      console.log(`Did he eat ${food}`);
      resolve();
      }
  });
}

function theFunction(){
  console.log(`Yes, He did`)
}

// Using the promise

eat('Beans').then(()=>{
  theFunction();
}).catch(error=>{
  console.log('No,', error, 'he ate beans');

})




























