//FUNCTIONS
//let x = 2;
//console.log(x * x);
//ways to declare a function
//1 : 
function square(x){
    return x * 2
}
console.log(square(3));

function square1(x , y){
    return x * y
}
console.log(square1(4,5));

//2:
let names = function(x){
    console.log(x)
}
names("esther")

const power = (base , exponent) =>{
    let result=  base ** exponent;
    return result
}
console.log(power(10, 2))