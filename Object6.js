//Object.define properties: it is used to add or modify multiple properties at the same time with customised configurations.
  
 
 let cricketer={};
  Object.defineProperties(cricketer,{
    "team":{
        value:"CSK",
        enumerable:false,
        writable:true,
        configurable:false
    }
    ,
    "age":
    {
        value:32,
        enumerable:true,
        writable :true,
        configurable:false
    }
  })

  console.log(cricketer);
  

  console.log("****************************************");
  
  console.log(Object.getOwnPropertyDescriptors(cricketer));
  