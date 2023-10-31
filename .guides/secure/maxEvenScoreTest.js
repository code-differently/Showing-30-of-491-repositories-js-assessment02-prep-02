const maxEvenScore = require("../../maxEvenScore");
let numbers = process.argv.slice(2).map(Number);
console.log(maxEvenScore(numbers));