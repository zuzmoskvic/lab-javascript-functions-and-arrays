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
    // let sum = 0;
    // for (let number of numbers) { sum += number }

    if (numbers.length === 0)  return 0 ;
    return numbers.reduce((sum, total) =>{
        return sum + total 
    }, 0
    );

}

// ### Iteration #4: Calculate the average

// Calculating an average is a very common task. Let's practice it a bit.

// **The logic behind this:**

// 1. Find the sum as we did in the first exercise (or how about reusing the function `sumNumbers()`?)
// 2. Take that sum and divide it by the number of elements in the array.

// <br>

function averageNumbers(array) {
    let sum = sumNumbers(array);
    if (array.length === 0 ) {
        average = null
    }
    else {
        average = sum / array.length;
    }
    return average;
}

// // #### Iteration #4.2: Array of strings

// Implement the function named `averageWordLength` that receives as a single argument an array of words and returns the average length of the words:

// You can use the following array to test your solution:

// ```javascript
// const words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
// ```

// <br>

function averageWordLength(words){

    if (words.length === 0) { return null };
    
    let averageLength;
    let totalLength = 0;

    for (let i=0; i<words.length; i++) { 
        totalLength += words[i].length 
    }
    averageLength = totalLength / words.length;
    return averageLength;
}