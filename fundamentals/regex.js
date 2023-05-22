//simple regex
let sentence = "I am very HAppy today";
let regexString = /happy/;
let checkString = regexString.test(sentence);

console.log(checkString); // true

// regex to check caps etc
regexString = /happy/i;
checkString = regexString.test(sentence);

console.log(checkString); // true

// finding characters with lazy matching

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);

console.log(result);
