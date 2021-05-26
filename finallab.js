 //1st
 var lovescode = true
 if (lovescode === true){
   console .log("I love to ode");
 } else if(lovescode != true){
   console.log("Coding has it's challenges.")
 }
//2nd
var amysAge = 29
var brittanisAge = 34
 if(amysAge > brittanisAge){
   console.log('Amy is older')
 } else if (amysAge < brittanisAge){
   console.log('Brittani is older')
 } else {
   console.log('They are the same age')
 }
//3rd
  var amysBirthYear = 1991
var brittanisBirthYear = 1986
if(amysBirthYear === brittanisBirthYear){
  console.log(" amy and Brittani are same age")
}else if (amysBirthYear !== brittanisBirthYear) {
console.log("amy and Brittani are not same age")
}
//4th
var arr = [10,20,30,40,50,60]
let firstItem = arr[0]
console.log(firstItem);
//5th
var lastItemRemoved;
lastItemRemoved =  arr.pop(arr.length);
console.log(lastItemRemoved);
//7th
var family = ['Tyler', 'Jordan', 'Ryan', 'Alice', 'Ireland'];
for (let i= 0; i < family.length-1; i++) {
  console.log(family[i]);
}
//8th
var nums = [1,2,3,6,22,98,45,23,22,12];
let evenArr= [];
for (let i = 0; i < nums.length; i++) {
  if(nums[i] % 2 === 0){
   evenArr.push(nums[i])
    // console.log(evenArr);
  } 
}
console.log(evenArr);
//9th
var score = 74
if (score >= 90) {
  console.log('A')
} else if (score >= 80 && score < 90) {
  console.log('B')
} else if (score >= 70 && score < 80) {
  console.log('C')
} else if (score >= 60 && score < 70) {
  console.log('D')
} else {
  console.log('F')
}
//10th
//  Create a variable called 'changeMyMind' and set it equal to true. 
  // Check to see if changeMyMind is set to or false, if it is true,
  //  change the status to false, if it is false, change the status to true.
var changeMyMind = false ;
console.log(changeMyMind);

if(changeMyMind !== true){
 changeMyMind = true;
} else if(changeMyMind !== false){
  changeMyMind = false;
}
console.log(changeMyMind);

//11th
var myFavoriteNumbers = [4,8,12,16,20,24];

let problem9 = myFavoriteNumbers[4];
console.log(problem9);
let n = 5;
if (n < myFavoriteNumbers.length) {
  n = problem9[n];
  console.log(problem9[n])
} else {
  console.log('Choose a number lower than ' + myFavoriteNumbers.length);
}
//12
var listOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];
for(i=1; i<=listOfNumbers.length; i++){
 if(i % 3 === 0){
  console.log(` ${i} is divied by 3 `);
 }
 else{
    console.log(` ${i} is not  divied by 3 `);
 }
}
//13
var letters = ['A', 'B', 'C', 'D', 'E'];
const reversed = letters.reverse();
console.log('reversed:', reversed);
