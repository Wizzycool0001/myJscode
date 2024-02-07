 //Question 1
 var sumOfSquaresLimit = 5;
 var sumOfSquares = 0

 for(a=1; a<=sumOfSquaresLimit; a++){
    sumOfSquares += a ** 2;
 } 
  console.log(`${sumOfSquares}`)

  // 2
  var factorialNumber = 5;
  var factorialOutput = 1; 

  var k = 1;

do{
    factorialOutput *= k;
    k++;
}while(k<=factorialNumber);

  console.log(factorialOutput)

  //Queastion 3
  var integerLimit = 20;
  var startInt = 2;

  while (startInt <= integerLimit){
    console.log("Even numbers:" + startInt);

    startInt+=2;
  }

  

// 4
 
var numLimit = 20;


for (n = numLimit; n >= 1 ; n--){
    console.log(n)
}

// 5

i=1 
sum=0
while(i <=5){
    sum+=i;
    i=i+1;
    console.log( sum)

}
// 6

function reversedString(a){
   var reversedString = '';
   for(i = a. length - 1; i >=0; i--) {
    reversedString += a[i]
   }
return reversedString;
}
console.log('Reversed String :' +  reversedString("Hello"));

// 7  
//A prime number is interger greater then that cannot be divided by any other number apart from itself and 1

function isPrime(numbers){
  if (numbers <= 1) return false;
  for (i=2; i<numbers; i++){
    if (numbers % i === 0){
      return false;
    }
  }
  return true;
}
 let numbers = 17
if (isPrime(numbers)){
  console.log(numbers + " is a Prime number.")
}else{
  console.log(numbers + " is not a Prime number")
}


//8
const food = 19
function multiplicationTable(M){
for (i=1; i<=M; i++){
  let resultAnswer = food * i;
  console.log(`${food} x ${i} = ${resultAnswer}`)
}
}
   multiplicationTable(5)
   
//Question 9

function simpleInterest(P, R, T){
  const I = (P * R * T) / 100;
  console.log(`${I}`)
  }
  simpleInterest (2000, 20, 3)