
// trim: this function is used to remove the white spaces from the string.

let str="   tejaswini    ";
console.log(str.trim()+'ghatge');
  
console.log("hi"+str);
console.log("hi"+str+"ghatge");
// you cannot trim the space between the string.
console.log("*****************************************");

//* trimstart: it will trim the white spaces from the start of the string .
let word ="   hello  " ;
console.log(word.trimStart()+"hi");
 
//* trimend: it will trim the white spaces from the end of an array.
let sent="hellodear      "
console.log(sent.trimEnd()+"how are you");
 console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
 
// padStart:  it will add the required paddimg considering the length  of the string.


 let note="hey"
 console.log(note.padStart(5)+"wassup!");
 
 // padEnd: it will add the padding at the end of the string considering the length of the string .

 console.log(note.padEnd(10)+"hiii");
 
console.log(note.padEnd(4,"#"));

// if the length of padding is less than than the length of the sting it won't do anything.
console.log(note.padEnd(2)+"hi");
