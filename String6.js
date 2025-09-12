// repeat : this is used to repeat a specified string.
  let str="MOVE";
   console.log(str.repeat(5));
    console.log(str.repeat());// returns nothing if it  is empty.
     console.log(str.repeat(2));
    //  console.log(str.repeat(-5));  it wont accept any negative value.

console.log("*****************************************************");


    //* split: it will return the string in the form of an array.
    let sent="he*ll*o";
    console.log(sent.split(3));
      console.log(sent.split("*"));// it is used as a seprator.
      // console.log(str.repeat(-2));
      console.log(sent.split(""));
      

      // replace and replace all.
      // replace will replace the string with the specified string. 
     // replaceAll will replace all the occurences of the specified string with the given string. 


      let a="welcometojumangi";
      console.log(a.replace("jumangi","****"));
      console.log(a.replaceAll("e","****"));
    