/* 1.
* Using filter make a function that is given an array of strings, 
* and return a new array that only includes those that are 5 characters or fewer in 
* length 
*/
function fiveCharactersOrFewerOnly(arr) {
  // your code here
  return arr.filter(function(newarr) { 
    return newarr.length <= 5;
  });
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); 
//expected output: ["by", "dog", "wolf", "eaten"]


/* 2.
* Make a function that takes a string and returns true if the string could be a 
* number else return false. 
*/
function isNum(str) {
//your code here 
  if (isNaN(str)) {
    return "false"
  } else {
    return "true"
  };
};
//test
console.log(isNum("3"))
//expected output: true 

console.log(isNum("three"))
//expected output: false


/*3
* Make a function that takes an array and returns the average of the array. 
*/
arr = []
function averageArray(arr) {
  //your code here 
  let sum = 0,
        avg = 0;
    for (let i of x ){
        sum = sum + i;
        avg = sum/x.length;
    }
    
    return avg
}
//test
console.log(averageArray[1,2,3])
//expected output: 2

console.log(averageArray[5, -10, 10, 20])
//expected output 6.25


/* 4.
*Using Reduce,
*Turn an array of numbers into a string of the numbers.
*/
function stringConcat(arr) {
   // your code here 
  const str = arr.join("");
  return str;
}
//test
console.log(stringConcat([1,2,3])); 
//expected output: "123"


/*5
* Using recursion, write a function that takes in a string 
* and reverses it 
*/
function reverseString(str){
  if (str === "") {
    return "";
} else {
    return reverseString(str.substr(1)) + str.charAt(0);
}
}
//test
console.log(reverseString('banana'))
//expected output: ananab 


/*6. 
* OOP has 4 pillars and we learned about each in this phase. 
* for each question - answer which pillar relates to the statement 
*    A. The process by which one object can acquire the properties of another object 
*        A. Answer: INHERITANCE 
*    B. To hide away implementation details inside a function, so when you call the function you don't have to understand exactly what it is doing
*        B. Answer: ABSTRACTION
*    C. The action of enclosing something in its own container of related data 
*        C. Answer: ENCAPSULATION
*     D. When a child class has its own unique behavior but still shares the same 
* methods or behaviors of its parent's class 
*        D. Answer: POLYMORPHISM


/*  7.
 * write a function takes in a boolean and returns that boolean as a string 
 */
function booleanToString(bool){
  //your code here
  switch(bool) { 
    case true: 
    case "true": 
    case 1: 
    case "1": 
    case "on": 
    case "yes": 
      return true; 
    default: 
      return false; 
  } 
}
//test
console.log(booleanToString(true))
//expected output 'true' (as string) 

/* 8.
* Write a function to check whether there is at least one element 
* which occurs in two given sorted arrays of integers.
*/
function check_common_element(arra1, arra2) {
  //your code here
}

//test
console.log(check_common_element([1,2,3], [3,4,5])); 
//expected output: true 

console.log(check_common_element([1,2,3], [5,6,7]));   
//expected output: false