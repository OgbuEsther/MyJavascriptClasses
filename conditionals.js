 if (true){
    console.log("this works")
}
 if(!true){
    console.log("correct")
 }
//false is the same thing as !true
   console.log(!true === false)

//truthey value and falsey values the (!) is used for only booleans
let values= "MY PASSWORD"
let input= "my password".toUpperCase();
// console.log(input)
if(values===input){
    console.log("its correct")
}else{
    console.log("invalid")
}
// console.log(!values)

let name= "esther"
let nameInput = "esther";
let password= 123456;
let passwordInput = 123456;

if((nameInput === name) && (password === passwordInput)){
    console.log("sucessful")
}else{
    console.log("invalid")
}

let savedpassword = "delight"
let loginpassword = "delight"
let savedusername = "ogbuuzoma"
let loginusername = "ogbuuzoma"

if((savedpassword=== loginpassword) && (savedusername=== loginusername)){
    console.log("login successful")
}else if((savedpassword!==loginpassword)&&(savedusername!==loginusername)){
    console.log("wrong inputs")
}else if (savedpassword!==loginpassword){
    console.log("check password")
}else if (savedusername!==loginusername){
    console.log("wrong username")
}else{
    console.log("login failed")
}


