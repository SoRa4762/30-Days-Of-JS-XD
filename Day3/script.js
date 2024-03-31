// const agree = window.confirm("Are you sure about that?");
// console.log(agree);

// alert("yup", "yup yup!"); //only displays first yup

// const yeah = prompt("Yeah?", "Yeah!");
// console.log("Yeah? ", yeah);

//exercise 1
const firstName = "Sonam";
const lastName = "Rai";
const age = 21;
const isMarried = false;

const now = new Date();
const year = now.getFullYear();

console.log(
  typeof firstName,
  typeof lastName,
  typeof age,
  typeof isMarried,
  typeof year
);

console.log("dragon".includes("on"), "dragon".includes("on"));

console.log("year: ", now.getFullYear());
console.log("month: ", now.getMonth());
console.log("date: ", now.getDate());
console.log("day: ", now.getDay());
console.log("hours: ", now.getHours());
console.log("minutes: ", now.getMinutes());
console.log("seconds from Jan 1, 1970: ", now.getTime());

const base = prompt("Enter base of Triangle: ");
const height = prompt("Enter height of Triangle: ");
const areaTriangle = base * height;
const perimeterTriangle = 2 * (base * height);

console.log("The area of the triangle is: ", areaTriangle);
console.log("Perimeter of the triangle is: ", perimeterTriangle);

const pi = Math.PI;
const radius = prompt("Enter radius of Circle: ");
const areaCircle = pi * (radius ^ 2);
const perimeterCircle = 2 * pi * radius;
console.log("Area of the circle: ", areaCircle);
console.log("Perimeter of the circle is: ", perimeterCircle);

//hours and rate of pay
const hours = prompt("Enter your hours per week: ");
const pay = prompt("Enter your rete of pay: ");
const totalPayPerWeek = hours * pay;
console.log("Your total pay per week is: ", totalPayPerWeek);

//age comparision
let yourAge = 21;
let myAge = 14;

const ageGap = myAge - yourAge;

if (ageGap > 0) {
  console.log("I am " + ageGap + " years older than you");
} else if (ageGap < 0) {
  console.log("I am " + (ageGap - ageGap * 2) + " years younger than you");
} else {
  console.log("You and I are of same age!");
}

//slope y = mx+c
// const y =
// const slope = y/x+c;
