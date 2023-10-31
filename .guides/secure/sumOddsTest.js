const sumOdds = require("../../sumOdds");
let numbers = process.argv.slice(2).map(Number);
console.log(sumOdds(numbers));