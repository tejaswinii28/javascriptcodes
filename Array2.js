// basic array methods 
//push and pop
let classuss=[1,2,3,4,5,"hi",6,7,8,9,10];
console.log(classuss);
console.log(classuss.length);//.length is used to return the size of array
console.log(classuss [0]);//returns the element on to the zeroth index

console.log("********************************");


// push: this array method  is used to append an element at the end of an array 
 let nums=[1,2,3,4,5,6,7,8,9,10];
 console.log(nums);
 console.log(nums.push("hi"));
 console.log(nums.length);//returns the updated length of the  given array
 console.log(nums);
 
console.log("***********************************");
 
//pop: it is used to remove the last element from the given array
 let number=[1,2,3,4,5,6,7,8,9,10];
 console.log(number);
 console.log(number.pop());
 console.log(number);
 
 console.log(number.lenght);//return the updated length of the given array
   
console.log("********************************************");



//shift and unshift method these are the original modifying methods  along with push and pop
// shift: is used to remove the element at the beginning of the  array
let arr=[1,2,3,4,5,6,7,8];
console.log(arr);


//unshift : it is used to append  the very first element of an array
let result=arr.unshift(0);
//let result = arr.shift();
console.log(result);
console.log(arr);
console.log(arr.length);
console.log(arr);






 