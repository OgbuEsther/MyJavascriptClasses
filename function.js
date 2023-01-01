let randnumbers = function square(x) {
  return Math.floor(Math.random() * x);
};
console.log(randnumbers(5));

console(Math.random() * 10);
let name = ["facebook", "amanzon"];
const arraytouppercase = (x) => {
  console.log(
    x.map((i) => {
      return i.toUpperCase();
    })
  );
};
arraytouppercase(name);

function greetuser(hello, there, welcome) {
  alert("hello , there . welcome");
}
console.log(greetuser);

// let today=
let hournow = 18;
let greeting = 17;

if (hournow > 18) {
  console.log((greeting = "good evening"));
} else if (hournow > 12) {
  console.log((greeting = "good afternoon"));
} else if (hournow > 0) {
  console.log((greeting = "good morning"));
} else {
  console.log((greeting = "welcome"));
}
