// Iteration #1: Find the maximum
// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.

function maxOfTwoNumbers(number1, number2) {
    return number1 > number2 ? number1 : number2
}

// Iteration #2: Find the longest word

// Implement the function `findLongestWord` that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

// You can use the following array to test your solution:

// ```javascript
// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
// ```

function findLongestWord(words) {
        if (words.length === 0) return null;

        let longestWord = "";         
        for (let word of words) {
            if (word.length > longestWord.length) {
                longestWord = word }; 
        }
        return longestWord;
}

// ### Iteration #3: Calculate the sum

// #### Iteration #3.1: Sum numbers

// Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

// Implement the function named `sumNumbers` that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course, we will learn how to do this by using the `reduce` array method, which will make your work significantly easier. For now, let's practice _the "declarative"_ way of adding values, using loops.

// You can use the following array to test your solution:

// ```javascript
// const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// ```

function sumNumbers(numbers) {
    let sum = 0;
    for (let number of numbers) { sum += number }
    return sum;
}