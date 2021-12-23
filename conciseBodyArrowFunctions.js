// JavaScript also provides several ways to refactor arrow function syntax. 
// The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:

// Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. 
// However, if a function takes zero or multiple parameters, parentheses are required.

// ZERO PARAMETERS

const functionName = () => {};

// ONE PARAMETER 

const functionName = paramOne => {};

// TWO PARAMETERS

const functionName = (paramOne, paramTwo) => {};

// A function body composed of a single-line block does not need curly braces. 
// Without the curly braces, whatever that line evaluates will be automatically returned. 
// The contents of the block should immediately follow the arrow => and the return keyword can be removed. 
// This is referred to as implicit return.

// SINGLE LINE BLOCK 

const sumNumbers = number => number + number;

// MULTI LINE BLOCK 

const sumNumbers = number => {
    const sum = number + number;
    return sum;
}

// The parentheses around num have been removed, since it has a single parameter.
// The curly braces { } have been removed since the function consists of a single-line block.
// The return keyword has been removed since the function consists of a single-line block.