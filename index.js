//let end ="this is my test string to practice the javascript string function concepts.this is gonna be fun"
//let start= end.indexOf("T");
//let end1= end.indexOf(".");
//let method= end.slice(start,end1);
//console.log(end1);

let her ="This is a dark girl and she is beautiful .This is her mom"
let him = her.indexOf("T");
let them = her.indexOf(".")+1 ;
let she = her.slice(him,them);
console.log(she);

let firstindexofthestring= her.indexOf(".");
let start = her.lastIndexOf("T", firstindexofthestring);
let end = her.lastIndexOf(".") +1;
let secondstring= her.slice(start,end);
let secondlength= secondstring.length
console.log(secondlength);

let maths= her.indexOf("this");
console.log(maths);

//4
let mstR ="this is my test string to practice the javascript string function concepts.this is gonna be fun."
let eng= mstR.lastIndexOf(".") +1
let sub = mstR.substring(eng,eng -12);
console.log(sub);

//the differences between sustring and substr

















