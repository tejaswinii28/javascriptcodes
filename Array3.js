// 1. Callback function : it is a function that is being passed as a parameter to another function.

let nums=[11,12,13,14,17,16,18,19,20];

function oddEven(nums) {
    if (nums%2==0) 
        {
            console.log(nums)
    }
    
}
 oddEven(11);    
 
 nums.forEach(oddEven); // here,foreach is the caller function and oddeven is the callback function.
 console.log(nums);


 // foreach  is not a returning function .it applies the callback function  for each element in the 
   // given array.
    //it is a higher order funcion and not a modifying method 
    
console.log("*************************************************");



//2. Map : map applies the given logic of the call back function to each element and then returns a new array. 
nums2=[11,12,13,14,15,16,17,19,20];
  
      function double(nums2)
      {
             return(nums2*2);
      }
     //  let num3=nums2.map(double);
         //major diiference is that map returns a new array and filter does not.
        let num3= nums2.filter(double); 
       console.log(num3);
  // map does not change the size of an array.
  // it is also not a modifying method 

  console.log("**************************************");

  //  3. filter:it changes the  size of the array and works similarly  to  map function.
    let number=[11,13,14,15,16,18,19,20,111,98,112,97,101,120,100];// number is the array.
      let ans=number.filter(higher);   // ans is the  new returning varibale.
        
      function higher(num)   // num is just a parameter
      {
        if(num+15>100)
        {
            return num;
        }
      }
   console.log(ans);
   

   // example no.2 

   let arr=['a','b','c','d','f','e','k','i','o','m'];
   
   
   let sol=arr.filter(check);


           console.log(sol);
           
        function check(letter)

     {
      if(letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u')
        {
              return letter;
      }
      
     }