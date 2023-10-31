# Problem 01

### Problem Statement

Imagine you are working with a sequence of integers and your task is to find the sum of all odd numbers in this sequence. Write a function named `sumOdds` that calculates the sum of all odd integers in a given array.

The `sumOdds` function should accept one parameter:

1. `numbers`: an array of integers.

An integer is considered odd if it is not divisible by 2 (i.e., it has a remainder when divided by 2). The function should return the sum of all such odd numbers in the array.

Here are some examples:

- `sumOdds([1, 2, 3, 4, 5])` should return `9` because the sum of odd numbers (1, 3, 5) is 9.

{Try It!}(node .guides/sumOdds/try-it-01.js)

- `sumOdds([10, 22, 35])` should return `35` because the only odd number is 35.

{Try It!}(node .guides/sumOdds/try-it-02.js)

- `sumOdds([2, 4, 6, 8])` should return `0` because there are no odd numbers.

{Try It!}(node .guides/sumOdds/try-it-03.js)

---

### Solution

{Check It!|assessment}
node .guides/secure/sumOddsTest.js

Certainly! Here are five additional test cases for the `sumOdds` function:

### Test Case 1
- **Input**: `sumOdds([11, 20, 32, 45, 53])`
- **Expected Output**: `109`
- **Explanation**: The odd numbers are 11, 45, and 53, and their sum is 109.

### Test Case 2
- **Input**: `sumOdds([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])`
- **Expected Output**: `1`
- **Explanation**: The odd numbers are -5, -3, -1, 1, 3, 5, and their sum is 1.

### Test Case 3
- **Input**: `sumOdds([0])`
- **Expected Output**: `0`
- **Explanation**: There are no odd numbers in the array, so the sum is 0.

### Test Case 4
- **Input**: `sumOdds([7, 7, 7, 7, 7])`
- **Expected Output**: `35`
- **Explanation**: All numbers in the array are the odd number 7, and their sum is 35.

### Test Case 5
- **Input**: `sumOdds([101, 200, 300, 401])`
- **Expected Output**: `502`
- **Explanation**: The odd numbers are 101 and 401, and their sum is 502.


# Problem 03

### Problem Statement

In a game, you're given a sequence of integers representing the points scored in each round. Your task is to find the highest scoring even round. Write a function named `maxEvenScore` that finds the maximum even number in a given array of integers.

The `maxEvenScore` function should accept one parameter:

1. `scores`: an array of integers representing points scored in each round.

A score is considered even if it is divisible by 2 with no remainder. The function should return the highest even score from the array. If there are no even scores, the function should return `0`.

Here are some examples:

- `maxEvenScore([10, 15, 20, 25])` should return `20` because the highest even number is 20.

{Try It!}(node .guides/maxEvenScore/try-it-01.js)

- `maxEvenScore([3, 7, 15, 21])` should return `0` because there are no even numbers.

{Try It!}(node .guides/maxEvenScore/try-it-02.js)

- `maxEvenScore([12, 24, 36, 48, 60])` should return `60` because the highest even number is 60.

{Try It!}(node .guides/maxEvenScore/try-it-03.js)

---

### Solution

{Check It!|assessment}
node .guides/secure/maxEvenScoreTest.js

Absolutely, here are five additional test cases for the `maxEvenScore` function:

### Test Case 1
- **Input**: `maxEvenScore([2, 4, 6, 8, 10, 12])`
- **Expected Output**: `12`
- **Explanation**: The array consists of even numbers, with 12 being the highest.

### Test Case 2
- **Input**: `maxEvenScore([45, 55, 65, 75])`
- **Expected Output**: `0`
- **Explanation**: All numbers are odd, so the function should return 0.

### Test Case 3
- **Input**: `maxEvenScore([-10, -8, -6, -4, -2])`
- **Expected Output**: `-2`
- **Explanation**: Even though the numbers are negative, -2 is the largest even number among them.

### Test Case 4
- **Input**: `maxEvenScore([5, 11, 20, 30, 40, 50])`
- **Expected Output**: `50`
- **Explanation**: Among the given numbers, 50 is the highest even number.

### Test Case 5
- **Input**: `maxEvenScore([])`
- **Expected Output**: `0`
- **Explanation**: Since the array is empty, the function should return 0.
