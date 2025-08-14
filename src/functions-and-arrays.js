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

// ### Iteration #5: Unique arrays

// Take the following array, remove the duplicates, and return a new array. You are more than likely going to want to check out the Array methods [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) and [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).

// Do this in the form of a function `uniquifyArray` that receives an array of words as an argument.

function uniquifyArray(array){
    if (array.length === 0) { return null};
    let uniquedArray = [];
    for (let item of array) {
        if (!uniquedArray.includes(item)){
            uniquedArray.push(item);
        }
    }
    return uniquedArray;
}

// ### Iteration #6: Find elements

// Let's create a simple array search.

// Declare a function named `doesWordExist` that will take in an array of words as one argument, and a *word to search* for as the other. Return `true` if the word exists in the array, otherwise, return `false`.

// You can use the following array to test your solution:

// ```javascript
// const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
// ```

// <br>

function doesWordExist(words, searchWord){
    if (words.length === 0 ) return null 
    return words.includes(searchWord) ? true : false;
}

// ### Iteration #7: Count repetition

// Declare a function named `howManyTimes` that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.

function howManyTimes(words, searchWord) {
    let sum = 0;
    for (let word of words) {
        if (word === searchWord) {
            sum++
        }
    }
    return sum;
}

// #### Bonus - Iteration #8.1: Product of adjacent numbers

// Given multiple arrays, find the greatest product of four adjacent numbers. 

// We consider adjacent any four numbers that are next to each other horizontally or vertically. For example, if we have a 5x5 Matrix like:

// ```bash
// [ 1,  2, 3, 4, 5]
// [ 1, 20, 3, 4, 5]
// [ 1, 20, 3, 4, 5]
// [ 1, 20, 3, 4, 5]
// [ 1,  4, 3, 4, 5]
// ```

// The greatest product will be the `20`x`20`x`20`x`4` = `32000`.

// <br>

function greatestProduct(matrix) {
    let maxProduct = 0;
    let product = 0;

    // console.log(maximumHorizontal, runningProductHorizontal);
    for (let i=0; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix[i].length; j++) {
        
            // Find max horizontal product 
            if (j + 3 < matrix[i].length) {
                product = matrix[i][j] * matrix[i][j+1] * matrix[i][j+2] * matrix[i][j+3];
                if (product > maxProduct) { maxProduct = product }
            }

            //Find max vertical product 
            if (i + 3 < matrix.length) {
                product = matrix[i][j] * matrix[i+1][j] * matrix[i+2][j] * matrix[i+3][j];
                if (product > maxProduct) { maxProduct = product }
                }
                
            }

        }
    
        return maxProduct;
}



const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

console.log(greatestProduct(matrix));


// #### Bonus - Iteration #3.2: A generic `sum()` function

// **The goal: Learn how to refactor your code.** :muscle:

// In iteration 3, you created a function that returns the sum of an array of numbers. But what if we wanted to know what was the sum of the length of all of the words in an array? What if we wanted to add _boolean_ values to the mix? We wouldn't be able to use the same function as above, or better saying, we would have to _tweak_ it a little bit so that it can be reused no matter what is in the array that is passed as an argument when function `sumNumbers()` is called.

// Here we are applying a concept we call **polymorphism**, that is, dealing with a function's input independently of the types they are passed as.

// Let's implement the function `sum()` that calculates the sum for an array filled with (_almost_) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.

// You can use the following array to test your solution:

// ```javascript
// const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// // should return: 57
// ```

function sum(arr) {
  let total = 0;

  for (let item of arr) {
    if (typeof item === 'number') {
      total += item;
    } else if (typeof item === 'string') {
      total += item.length;
    } else if (typeof item === 'boolean') {
      total += item ? 1 : 0;
    } else if (typeof item === 'array') {
      throw new Error("Unsupported data type sir or ma'am");
    } else if (typeof item === 'object') {
      throw new Error("Unsupported data type sir or ma'am");
    }
    
  }

  return total;
}

