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