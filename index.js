console.log("Hello World");

let age = 0;
console.log("Age as null:", age);

age = 20;
console.log("Age as 20:", age);

age = 17;
console.log("Age as 17:", age);

const firstName = "John";
console.log("First Name:", firstName);
console.log(`My name is ${firstName} and I am ${age} years old.`);

if (age === 17 && firstName === "John" || age > 18 && age < 65) {
    console.log("You can compete in the Olympics");
} else {
    console.log("You cannot compete in the Olympics.");
}

console.log(false && "dog");
console.log(true && "dog");

if ([]) {
    console.log("🍕");
} else {
    console.log("🍔");
}

if (false) {
    console.log("🍕");
}

console.log("🍔");

if (true && false) {
    console.log("😊");
} else {
    console.log("☹️");
}

// adventure game
let adventureStart = "no";
let insideOfCave = "right";
let dragonEncounter = "fight";

if (adventureStart === "yes") {
    if (insideOfCave === "left") {
        console.log("You find a treasure chest!");
    } else if (insideOfCave === "right") {
        if (dragonEncounter === "fight") {
            console.log("You defeat the dragon!");
        } else {
            console.log("You run away screaming.");
        }
    } else {
        console.log("You get lost immediately!");
    }
} else {
    console.log("You walk home.");
}

let number = 0;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

let num1 = 30;
let num2 = 40;
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
    console.log(num2 + " is greater than " + num1);
} else {
    console.log(`${num1} is equal to ${num2}`);
}

let char = "A"
char = char.toLowerCase();
if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
    console.log(`${char} is a vowel`);
} else {
    console.log(`${char} is a consonant`);
}

if (1 !== "1") {
    console.log("1 is equal to 1");
} else {
    console.log("1 is not equal to 1");
}

let grade = 52;
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}

let year = 2024;
if ((year % 4 === 0 && year % 100!== 0) || year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// demonstrate the modulus operator
console.log(16 % 3);

let someNumber = 15;
if(someNumber % 2 == 0 && someNumber % 3 == 0){
    console.log("The number is divisible by 2 and 3");
}else{
    console.log("The number is not divisible by 2 and 3");
}

let variable;
if(typeof variable === 'undefined'){
    console.log("The variable is undefined");
}else{
    console.log("The variable is defined");
}