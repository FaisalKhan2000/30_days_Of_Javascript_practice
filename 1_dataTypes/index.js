//* Data types ==> Primitive and Non-primitive

/* 
* Primitive Data Types

Primitive data types in JavaScript include:

Numbers - Integers, floats
Strings - Any data under single quote, double quote or backtick quote
Booleans - true or false value
Null - empty value or no value
Undefined - a declared variable without a value
Symbol - A unique value that can be generated by Symbol constructor


* Non-primitive data types in JavaScript includes:

Objects
Arrays
*/

//* Numbers

// Numbers are integers and decimal values which can do all the arithmetic operations. Let's see some examples of Numbers.
// Declaring Number Data Types

let age = 23;
const gravity = 9.81; // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72; // mass in Kilogram
const PI1 = 3.14; // pi a geometrical constant

// More Examples
const boilingPoint = 100; // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37; // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI1, boilingPoint, bodyTemp);

//* Math Object
// In JavaScript the Math Object provides a lots of methods to work with numbers.
const PI = Math.PI;

console.log(PI); // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Power
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometry
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);

// Random Number Generator

let randomNum = Math.random(); // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // this gives between 0 and 10

//* Strings

// Strings are texts, which are under single , double, back-tick quote. To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote. Let's see some examples of strings:

let space = " "; // an empty space string
let firstName = "faisal";
let lastName = "khan";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

// We can concatenate strings in different ways.

// Concatenating Using Addition Operator
let personInfoOne = fullName + ". I am " + age + ". I live in " + country; // ES5 string addition

console.log(personInfoOne);

// Long Literal Strings
// A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line. Example:

const paragraph =
  "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";

console.log(paragraph);

//* Escape Sequences in Strings
// In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

console.log(
  "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
); // line break
console.log("Days\tTopics\tExercises");
console.log("Day 1\t3\t5");
console.log("Day 2\t3\t5");
console.log("Day 3\t3\t5");
console.log("Day 4\t3\t5");
console.log("This is a backslash  symbol (\\)"); // To write a backslash
console.log('In every programming language it starts with "Hello, World!"');
console.log("In every programming language it starts with 'Hello, World!'");
console.log("The saying 'Seeing is Believing' isn't correct in 2020");

//* Template Literals (Template Strings)
// To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.

//Syntax
// `String literal text`
// `String literal text ${expression}`

console.log(`The sum of 2 and 3 is 5`); // statically writing the data
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // injecting the data dynamically

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);

// Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations (comparison, arithmetic operations, ternary operation).

console.log(`${a} is greater than ${b}: ${a > b}`);
console.log(`${a} is smaller than ${b}: ${a < b}`);

//* String Methods
// Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string object has many string methods. There are different string methods that can help us to work with strings.

//* 1. length: The string length method returns the number of characters in a string included empty space.
let js = "JavaScript";
console.log(js.length); // 10
console.log(firstName.length); // 6

//* 2.Accessing characters in a string: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one.

let string = "JavaScript";
let firstLetter = string[0];

console.log(firstLetter); // J

let secondLetter = string[1]; // a
let thirdLetter = string[2];
let lastLetter = string[9];

console.log(lastLetter); // t

let lastIndex = string.length - 1;

console.log(lastIndex); // 9
console.log(string[lastIndex]); // t

//* 3. toUpperCase(): this method changes the string to uppercase letters.

console.log(string.toUpperCase()); // JAVASCRIPT

console.log(firstName.toUpperCase()); // FAISAL

console.log(country.toUpperCase()); // FINLAND

//* 4. toLowerCase(): this method changes the string to lowercase letters.

console.log(string.toLowerCase()); // javascript

console.log(firstName.toLowerCase()); // faisal

console.log(country.toLowerCase()); // finland

//* 5. substr(): It takes two arguments, the starting index and number of characters to slice.

console.log(string.substr(4, 6)); // Script
console.log(country.substr(3, 4)); // land

//* 6. substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

console.log(string.substring(0, 4)); // Java
console.log(string.substring(4, 10)); // Script
console.log(string.substring(4)); // Script

console.log(country.substring(0, 3)); // Fin
console.log(country.substring(3, 7)); // land
console.log(country.substring(3)); // land

//* 7. split(): The split method splits a string at a specified place.

string = "30 Days Of JavaScript";
console.log(string.split()); // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(" ")); // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

console.log(firstName.split()); // Change to an array - > ['faisal']
console.log(firstName.split("")); // Split to an array at each letter ->  ['f', 'a', 'i', 's', 'a', 'l']

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//* 8. trim(): Removes trailing space in the beginning or the end of a string.

string = "   30 Days Of JavaScript   ";

console.log(string);
console.log(string.trim(" "));

firstName = " Faisal ";

console.log(firstName);
console.log(firstName.trim()); // still removes spaces at the beginning and the end of the string

//* 9. includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
