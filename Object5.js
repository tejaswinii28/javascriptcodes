// 8.object.defineProperties: it consists of four flags each with a specific functionality.
//*value :"" it shows the value of the property
//*enumerable:"" it 
//* writable :"" it changes the property value
//* configurable:"" it allows you to delete the property from an object.
// * it is used to add properties in your object.
let student={
    name:"Snowell",
    marks:72,
    rollno:5
}


Object.defineProperty(student,'std',{
    value:2,
    enumerable:false,
    writable:false,
    configurable:false
}
)
console.log(student.std);



console.log("**********************************");
  console.log(Object.getOwnPropertyDescriptor(student.std));
  console.log(student);
  
