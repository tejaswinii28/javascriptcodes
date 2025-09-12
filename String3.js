// slice : it will include the starting index and exclude the ending position.
  let str="learnJavascript";
  console.log(str.slice(1,3));
   console.log(str.slice(1,4));
   console.log(str.slice(1,-2)); // 2 elements are removed from the last
   console.log(str.slice(1));  // if you do not provide the last index it will take the whole remaiming string by default.


console.log("***************************************");



  // substring nd substr.
   let sent="WELCOME TO MNC";
    console.log(sent.substring(1,3)); // it take bith the starting and ending index. 
    // it extracts the substring from the given string.

// substr: it is depricated method by js but it takes the strting index and the length.

console.log(sent.substr(1,8));
    console.log(sent.substr(1,5));