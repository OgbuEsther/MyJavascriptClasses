/**let school = [ true, {club :"manu"}, "black", 4];
console.log(school);
let theArray = {new: true};
console.log(theArray);

METHODS**/
let theArray =[1,2,3];
console.log(Array.isArray(theArray));
// Array. is an array constructor 
// strings. is a string constructor

// the reverse method
/**console.log(theArray.reverse);

let c ="colin";
let ans= c.split("");
console.log(Array.isArray(ans));
console.log(ans.reverse());
//console.log(ans.reverse())
//console.log(ans.toString().replaceAll(",", ""));
console.log(ans.join(""));

//THE PUSH METHOD
let pusharray = theArray.push(4, "the colour", [1,2,3,4]);
console.log(pusharray);

//when trying to bring out a specific index , it takes only one arguemnet, it must be a number
let index= 4;
console.log(theArray[index]);
//to replace an item in an array
theArray[index] = "esther";
console.log(theArray);
console.log(theArray[index]);
//console.log(theArray[4]);**/

//THE UNSHIFT METHOD
theArray.unshift("messi", 9);
console.log(theArray);
//the splice method
/**let numbers = [1,2,3,5,7,8,9];
console.log(numbers.splice(0,3));
//console.log(numbers)
//the fill ; it can take more than two arguement, the start is inclusive, it takes the index of the elements
console.log(numbers.fill(0,2,5));

//the concat
**/
