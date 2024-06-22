// My current age 
const myAge = 28;

// Early years: The first two years of a dog's life count as 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;

// Later years: Each following year counts as 4 dog years
let laterYears = myAge - 2;
laterYears *= 4;

// Print early years and later years to the console
console.log(earlyYears);
console.log(laterYears);

// Calculate my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// My name in lowercase
let myName = "shameer".toLowerCase();

// Print the result to the console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
