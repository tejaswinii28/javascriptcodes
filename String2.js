// string methods .



// at(position) : it extracts the element from the given position.
  let names ="udkerstuvehg";
   console.log(names.at(2)); // it takes the index from the start.
   console.log(names.at(-2)); // it takesthe index from the last.
   console.log(typeof(names.at(2))); // it returns strig even if it is a sinlt charcter.
   console.log(names.at()); // it returns the element at the zeroth index.
   
   console.log("************************************************************");
   
//2.charAt: it is simiar to at but it does not take negaative index.
  let str="abcdefghijklmnop";
   console.log(str.charAt(0));
     console.log(str.charAt(-1));  
    console.log(typeof(names.charAt(2)));

    console.log("************************************************************");

//3.charCodeAt: it returns the ascii value of the element.


    let word="acefijkelmo";
  console.log(word.charCodeAt(0));
  console.log(str.charCodeAt(-1)); // does not take -ve index returns nan 
  console.log(word.charCodeAt());
  console.log(typeof(names.charCodeAt(2))); // it returns number instead of string.
  console.log(names[2]); // elements of string can also be accesed like an array.
  