// JavaScript Basics Part 1

// Exercise 1: Basic Syntax and Variables

// Create a variable named myName and assign it your name as a string.
// Create a variable named age and assign it your age as a number.
// Create a variable named isStudent and assign it a boolean value indicating whether you are a student or not.

let myName = "Fabian";
let age = 41;
let isStudent = false;

// Print all three variables to the console.

console.log("Name:", myName);
console.log("Age:", age);
console.log("Is a student:", isStudent);

// Exercise 2: Data Types

// Create an array named favoriteFoods and populate it with three of your favorite foods

let favoriteFoods = ["Melon", "Pineapple", "Kiwi"];

// Create an object named person with properties for name, age, and hobbies (an array of your hobbies).

let person = {
    name: "Fabian",
    age: 41,
    hobbies: ["Dogs, Warhammer, Coding"]
};

// Print the person object and favoriteFoods array to the console

console.log("Person Object:", person);
console.log("Favorite Foods Array:", favoriteFoods);

// Exercise 3: Conditions

// Write a function named checkAge that takes an age as a parameter and prints "Adult" if the age is 18 or older, and "Minor" if the age is under 18.

function checkAge(age) {
    if (age >= 18) {
        console.log("Adult");
    }   else {
    console.log("Minor");
    }
}

// Example usage:
checkAge(20); // This will print "Adult"
checkAge(16); // This will print "Minor"

// Exercise 4: Loops

// Write a for loop that prints the numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
    }

// Write a while loop that prints the numbers from 10 to 1.
    
    let i = 10;
    while (i > 0){
    console.log(i);
    i = i - 1;
    }

// Exercise 5: Functions

// Write a function named add that takes two numbers as parameters and returns their sum.

function add(num1, num2) {
    return num1 + num2;
}

// Example usage:
console.log(add(5, 3)); // This will return 8
console.log(add(10, 20)); // This will return 30

// Write a function named greet that takes a name as a parameter and prints a greeting message.

function greet(name) {
    console.log("Hello, " + name + "!");
}

// Example usage:
greet("Paula"); // This will print "Hello, Paula!"
greet("Fabian"); // This will print "Hello, Fabian!"

// Exercise 6: Combining Everything

// Create a function named createPerson that takes name, age, and hobbies as parameters and returns an object with those properties.

function createPerson(name, age, hobbies) {
   return {
    name: name,
    age: age,
    hobbies: hobbies,
   };
}

// Example usage:
let person1 = createPerson("Alice", 25, ["Reading", "Traveling", "Cooking"]);
let person2 = createPerson("Bob", 30, ["Cycling", "Gaming"]);

console.log(person1); // { name: 'Alice', age: 25, hobbies: [ 'Reading', 'Traveling', 'Cooking' ] }
console.log(person2); // { name: 'Bob', age: 30, hobbies: [ 'Cycling', 'Gaming' ] }

// Create a function named describePerson that takes a person object and prints a description of the person (descriping the person's name, age and hobbies).

function describePerson(person) {
    console.log("Name: " + person.name);
    console.log("Age :" + person.age);
    console.log("Hobbbies :" + person.hobbies.join(", "));
}

// Example usage:
let person3 = {
    name: "Alice",
    age: 25,
    hobbies: ["Reading", "Traveling", "Cooking"]
  };
  
  let person4 = {
    name: "Bob",
    age: 30,
    hobbies: ["Cycling", "Gaming"]
  };
  
  describePerson(person1);
  // Output:
  // Name: Alice
  // Age: 25
  // Hobbies: Reading, Traveling, Cooking
  
  describePerson(person2);
  // Output:
  // Name: Bob
  // Age: 30
  // Hobbies: Cycling, Gaming

  // JavaScript Basics Part 2

  // Practice 1

  // Write a JavaScript function to get the first n elements of an array.

function firstElements(arr, n) {
    return arr.slice(0, n); // Using slice to get the first n elements
}

// Example usage:
console.log(firstElements([1, 2, 3, 4], 1)); // [1]
console.log(firstElements([1, 2, 3, 4], 3)); // [1, 2, 3]
  
// Practice 2

// Write a JavaScript function that finds the most frequent item in an array.

function mostFrequent(arr) {
    // Create an object to count the frequency of each item
    const frequency = {};

    // Iterate through the array and count the occurrences of each item
    arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) +1;
    });

     // Find the item with the highest frequency
     let mostFrequent = null;
     let maxCount = 0;

     for(let item in frequency) {
        if (frequency[item] > maxCount) {
            mostFrequent = item;
            maxCount = frequency[item];
        }
     }

     return mostFrequent;

     
}

// Example usage:
console.log(mostFrequent([1, 2, "a", "a", 5, 15, true, "a"])) // a
console.log(mostFrequent([1, 2, 3, 4, 4, 5, 6, 4])); // 4
console.log(mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])); // 'apple'

// Practice 3

// Write a Javascript function that returns the product of an array of integers. If an element is not an integer the function should return -1

function productOfArray(arr) {
    let product = 1; // Start with 1 since multiplying by 1 won't change the result

    // Loop through the array to multiply the elements
    for (let i = 0; i < arr.length; i++) {
        // Check if the element is not a number
        if (typeof arr[i] !== 'number') {
            return -1; // Return -1 if any element is not a number
        }
        product *= arr[i]; // Multiply the current element to the product
    }

return product; // Return the final product

}
// Example usage:
console.log(productOfArray([1, 2, 5])) // 10
console.log(productOfArray([1, 2, true])) // -1


// Practice 4

// Write a Javascript function removes non-integer values from an array

function removeNonIntegers(array) {
// Use filter to only keep integers in the array
return array.filter(item => Number.isInteger(item));
}
// Example usage:
console.log(removeNonIntegers([1, 2, 3])) // [1, 2, 3]
console.log(removeNonIntegers([1, true, NaN, "a", 10])) // [1, 10]

// Practice 5

// Write a JavaScript function to insert a string within a string at a particular position (default is 1).

function insert(str, insertStr, position = 0) {
// Insert the insertStr at the specified position in str
return str.slice(0, position) + insertStr + str.slice(position);
}
// Example usage:
console.log(insert('We are doing some exercises.','JavaScript ')); //  "JavaScript We are doing some exercises." 
console.log(insert('We are doing some exercises.','JavaScript ',18)); //  "We are doing some JavaScript exercises."