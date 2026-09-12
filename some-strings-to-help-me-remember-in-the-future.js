//strings
let first = "first string";
let second = "second string"
let and = "and"
let space = " "
//joining strings to scentences
let joinedStrings = first + space + and + space + second;
joinedStrings;

//"abcsStartingFrom1" because without the space it starts at 0
let abcsStartingFrom1 = " abcdefghijklmnopqrstuvwxyz";
abcsStartingFrom1[26];

abcsStartingFrom1[7];
//slice = grab characters from string
abcsStartingFrom1.slice(1,13);

abcsStartingFrom1.slice(4,26);

let imputput = "my input is good!! ";
imputput = imputput.trim(); 
console.log(imputput); // Output: "my input is good!!"

//more string things
let str = "String"
//lowercase
str.toLowerCase();
// return new string with str repeated (number) times
str.repeat(15)

//escape sequences

// \n = new line
console.log("Hello\nWorld")
// \' = single quote
console.log("This has \'single quotes.\' ")
// \" = double quotes
console.log("This has \"double quotes.\" ")
// \t = tab
console.log("\t⬅This has a tab at the beginning.")
