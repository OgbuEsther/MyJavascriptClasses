//loops are unending repetition , it moves in a circular movement , it does not stop until it is given a condition to stop
//iterate is to perform or repeat an action 
//kinds of loops
//1: the do-while loop
//2: while loop
//3: for loop
//* do-while loop
 let evennumbers= 12
// do{
    console.log(evennumbers)
    console.log(evennumbers +=2)
     console.log(evennumbers =+2)
    console.log(evennumbers ++)
    console.log(evennumbers --)
    console.log(evennumbers)
    console.log(evennumbers)
// }while(evennumbers <=10)

//use the if condition to display only evennumbers from 0 to 20 .hint: use the % operator to check if the number is even 
// if (evennumbers % 2===0){
//     console.log(evennumbers)
// } do{
//     console.log(evennumbers =evennumbers +2 )
// }while(evennumbers <=20)

//  let even = 0
//  do{
//      if (evennumbers % 2===0){
//          console.log(evennumbers)

//      }
//      evennumbers =evennumbers +1
// }while(evennumbers <=20)

// let odd = 2
// do{
//     if (odd %2===0)
// }

// while loop
// let number= 1
// let counter = 0

// while(counter <=10){
//     // counter ++
//     number = number * 2
//     console.log("numbervalue",number)
//     console.log( "counter" ,counter)
//      counter ++
// }

//for loop
// for(let number = 1 ; number < 10 ; number *=2){
//     console.log(number)

// }
//for loop 
let newnumber = 1
for (let count= 0; count <10 ;){
    newnumber *=2
    count++
    console.log("newnumber" , newnumber)
    console.log("counter" , count)
}