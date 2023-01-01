//let esther= "she is a girl and a very lovely one at that.i will love to meet her one day hopefully."
//1: find the total length of the string
let bibi =
  "my goat is expensive. Ade eats too much. Babatunde is the most stubborn fellow in codelab. Sylvia always come late to class.";
console.log(bibi.length);
let cici = bibi.indexOf("my");
let titi = bibi.indexOf(".") + 1;
console.log(titi);

let secondsentence = bibi.indexOf("A");
let secondsentence2 = bibi.indexOf(".", secondsentence) + 1;
let answer = bibi.slice(secondsentence, secondsentence2);
console.log(answer.length);

let thirdsentence = bibi.indexOf("B");
let thirdsentence2 = bibi.indexOf(".", thirdsentence) + 1;
let ans = bibi.slice(thirdsentence, thirdsentence2);
console.log(ans.length);

let fourth = bibi.indexOf("S");
let fourth1 = bibi.indexOf(".", fourth) + 1;
let ans2 = bibi.slice(fourth, fourth1);
console.log(ans2.length);
console.log(titi, answer); // this is how to bring out two sentences at the same time (concat)
