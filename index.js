// Function that takes two numbers and an operation function
function calculate(a, b, operation) {
    // Call the operation function on a and b
    return operation(a,b);
}

// Operation functions
function add(a, b) {
    // return the sum of a and b
    return a + b;
}

function subtract(a, b) {
    // return the difference of a and b
    return a - b;
}

function multiply(a, b) {
    // return the product of a and b
    return a * b;
}

function divide(a, b) {
    // return the division of a by b
    return a / b;
}

// Test your calculator
console.log(calculate(10, 5, add));      
console.log(calculate(10, 5, subtract)); 
console.log(calculate(10, 5, multiply)); 
console.log(calculate(10, 5, divide));   
