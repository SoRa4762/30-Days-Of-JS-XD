//primitive datatype = immutable, cannot change its stcture, but can compare
//non-primitive datatype = mutable, can change its structure, obj and arrays, but it cannot be compare as it only compares its reference and not the actual value itself.

//*Exercise 1

let challenge;
challenge = "30 Days of JavaScript";

console.log("string: ", challenge);

console.log("length: ", challenge.length);

console.log("uppercase: ", challenge.toUpperCase());

console.log("lowercase: ", challenge.toLowerCase());

console.log("slice: ", challenge.substring(3, 7));

console.log("slice: ", challenge.substring(0, 2));

console.log("contains: ", challenge.includes("Script"));

let splitChallenge = challenge.split("");
console.log(splitChallenge);

let splitString = challenge.split(" ");
console.log(splitString);

let stringToSplit = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(stringToSplit.split(", "));

let replacedChallenge = challenge.replace(challenge, "30 Days of Python");
console.log("replace: ", replacedChallenge);

let index = challenge.charAt(15);
console.log("index: ", index);
console.log("indexCharCode: ", challenge.charCodeAt(11));
console.log("firstIndexOf: ", challenge.indexOf("a"));
console.log("lastIndexOf: ", challenge.lastIndexOf("a"));

let word =
  "You cannot end a sentence with because because because is a conjunction";
console.log("firstWordOccurance: ", word.indexOf("because"));
console.log("lastWordOccurance: ", word.lastIndexOf("because"));
console.log("searchWordFirstOccurance: ", word.search("because"));

let challenge2 = " 30 Days Of JavaScript ";
console.log("trimSpaces: ", challenge2.trim(" "));

console.log("Starts with 30? ", challenge.startsWith(30));
console.log("Ends with Script? ", challenge.endsWith("Script"));
console.log("Match a: ", challenge.match(/a/gi)); //need to use with regex, search and match both
console.log("Search a: ", challenge.search(/a/gi));

let firstHalf = "30 Days of";
let secondHalf = " JavaScript";
console.log("Concatinate: ", firstHalf.concat(secondHalf));
console.log("Repeat * 2: ", challenge.repeat(2));

//*Exercise 2

console.log(
  "Print this: ",
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "Print this too: ",
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

const number10 = 10;
const alpha10 = "10";
const float9 = parseFloat("9.8");

console.log("Type Same?", typeof alpha10 == typeof number10);
console.log("Make it same: ", typeof Number(alpha10) === typeof number10);

console.log("Type Same?", typeof number10 == typeof float9);
console.log("Make it same: ", typeof number10 === typeof parseInt(float9));

console.log(
  "Does 'on' exist? ",
  "python".includes("on"),
  "jargon".includes("on")
);

const jargon = "_I hope this course is not full of jargon_";
console.log("Does jargon exist? ", jargon.includes("jargon"));

const random0to100 = Math.round(Math.random() * 100);
const random50to100 = Math.round(Math.random() * 50 + 50);
const random0to255 = Math.round(Math.random() * 255);
console.log("Random 0 to 100: ", random0to100);
console.log("Random 50 to 100: ", random50to100);
console.log("Random 0 to 255: ", random0to255);

const js = "JavaScript";
console.log(
  "Random number to access JavaScript string characters: ",
  js.charAt(Math.round(Math.random() * (js.length - 1)))
);

console.log("1 1 1 1 1\n2 1 2 4 8 \n3 1 3 9 27\n4 1 4 6 64\n5 1 5 25 125");

console.log("Slice because * 3: ", word.substr(31, 23));
console.log("Slice because * 3: ", word.substring(31, 54));

//exercise 3
let countLove =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const regex = /love/gi;
console.log("Love Count: ", countLove.match(regex).length);

let becauseCount =
  "You cannot end a sentence with because because because is a conjunction";
const regexCuz = /because/gi;
console.log("Because Count: ", becauseCount.match(regexCuz).length);

//AI
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const cleanedWords = sentence
  .replace(/[%$@&;#]/g, "")
  .split(/\s+/)
  .filter((word) => word.length > 0);

// Count word occurrences
const wordCount = {};
cleanedWords.forEach((word) => {
  wordCount[word] = (wordCount[word] || 0) + 1;
});

// Find the most repeated words
const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
const mostRepeatedWords = sortedWords.slice(0, 5).map((entry) => entry[0]);

mostRepeatedWords;

console.log("Cleaned Words: ", cleanedWords);
console.log("sortedWords: ", sortedWords);
console.log("mostRepeatedWords: ", mostRepeatedWords);

const regexClean = /[%$@&;#!]/g;
console.log("Clean Sentence: ", sentence.replace(regexClean, ""));

let extractNumber =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const regexNumber = /\d+/g;
const totalNumber = extractNumber.match(regexNumber);
console.log(
  "Extract and add Annual Salary: ",
  Number(totalNumber[0]) + Number(totalNumber[1]) + Number(totalNumber[2])
);
