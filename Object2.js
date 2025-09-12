// object methods : 
//1.object.assign: copies the object properties from source to target.

let city={};
console.log(city);


let city1={
    name:"mumbai",
    picode:123456,
    populaton:5500000
}
Object.assign(city,city1);
 console.log(city);
 // object .assign will return the modified target object.


 let city2={
    state:"maharashta",
    region:"western india",
    buissness:true,
 }
  Object.assign(city,city1,city2); // you can also pass multiple source objects.
  console.log(city);
  

  let city3={
    region:"eastern india",                        
    foodjoint:5,
    area:"4000sq",
  }
  Object.assign(city,city2,city3);
  console.log(city);
   // if there are any common properties in the source objects  
   //   then last given object property will override the firdt one 
   //# you can also pass properties in the form of array but it is not advisable.

  //  object3.js contains : object.entries and object. create..  