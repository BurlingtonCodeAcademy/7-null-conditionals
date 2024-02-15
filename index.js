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