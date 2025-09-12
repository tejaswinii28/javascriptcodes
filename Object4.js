// Object.freeze:  it is used to freeze the object properties so that it is not able to add new properties  or modify the existing properties values.

//  let user={
//     name:"Moana",
//     email:"Moana123@gmail.com",
//     mobno:1234568
//  }
// console.log(user);

// user.name="Sofia";

// // Object.freeze(user);
//   user.location="Pune";
//   console.log(user);

  
  // Object.sealed: it is used to seal the object  which means it will allow you to modify the existing properties but wont allow to add any  new property.
    

   let user={
    name:"Moana",
    email:"Moana123@gmail.com",
    mobno:1234568
 }
console.log(user);

user.name="Sofia";

 Object.seal(user);
  user.location="Pune";
  console.log(user);

  //6. is sealed : it is used to check whether the object is sealed or not ,it will return true or false 


  console.log("isFrozen:",Object.isFrozen(user));
  console.log("is sealed:",Object.isSealed(user));
  
  //7.is frozen: it is used to checj whether th Object is frozen or not.
  
  
  console.log(delete user.email);
  
  // both the freeze and seal properties wont let you delete the properties of the object.