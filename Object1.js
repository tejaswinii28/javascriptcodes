

//object : object are unordered collection of properties  andits values .
// it is a collection of key value pairs

let object_one={
    names:"abc",
    email:"abc@gmail.com",
    age:24,
    getname: function()
    {
        return this.names;
    }
}
console.log(object_one);
console.log(object_one.names);// you can access the properties of object using . operator and propety name.

// to add a property in an object 

object_one.city="pune";
console.log(object_one.city);

console.log(object_one["age"]);

// to delete a property from an array .

console.log(object_one,"object before deleting");

console.log(delete object_one.names);//this will return true 
 console.log(object_one,"after deleting a property")// it will return the deleted object. 


//     to access the properties of the object there are two ways 
//  using dot operator and using square brackets.