//number one
const shoppingcart =[ "Milk", "Coffee", "Tea", "Honey"]
let item1 = shoppingcart.unshift("meat")
console.log(shoppingcart);
//number two
let item2 = shoppingcart.push("sugar")
console.log(shoppingcart);
//number three
let allergy = shoppingcart.splice(4,4);
console.log(shoppingcart);
//number four
let modification = shoppingcart.fill("Green Tea",3,4);
console.log(modification);

//number five
let itCompanies= ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
//number six
console.log(itCompanies);
//number seven
console.log(itCompanies.length)
//number eight
let firstcompany= itCompanies[0]
let secondcompany = itCompanies[3]
let thirdcompany= itCompanies[6]
console.log(firstcompany,secondcompany, thirdcompany);
//number nine print out all the companies
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
//number ten
let company1= itCompanies[0].toString()
let ans= company1.toUpperCase()
console.log(ans.split());

let company2 = itCompanies[1].toString()
let ans2= company2.toUpperCase()
console.log(ans2.split())

let company3= itCompanies[2].toString()
let ans3= company3.toUpperCase()
console.log(ans3.split());

let company4 = itCompanies[3].toString()
let ans4= company4.toUpperCase()
console.log(ans4.split());

let company5 = itCompanies[4].toString()
let ans5= company5.toUpperCase()
console.log(ans5.split());

let company6 = itCompanies[5].toString()
let ans6= company6.toUpperCase()
console.log(ans6.split())

let company7 = itCompanies[6].toString()
let ans7=company7.toUpperCase()
console.log(ans7.split())
//to print out the companies
let print= itCompanies.join(",");
console.log(print);
//to change to uppercase
let uppercase = print.toUpperCase();
console.log(uppercase);
//to join sentences together
//let sentence1 = join("are big IT companies")
//console.log(sentence1);
//let sentence2= "are big IT companies"

//reverse
//let reverse= itCompanies.reverse()
//console.log(reverse);

/**let sorting = itCompanies.sort()
console.log(sorting);**/

let slicing = itCompanies.slice(0,3)
console.log(slicing);

let slicing2= itCompanies.slice(-3);
console.log(slicing2);

let slicing3= itCompanies.slice

//number13
let checkcompany= itCompanies[1]
itCompanies.includes(checkcompany) ? console.log("company exists") : console.log(" does not exists")

let company = "twitter"
itCompanies.includes(company) ? console.log("company exists")  : console.log("does not exists");
