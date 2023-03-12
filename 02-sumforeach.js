const numbers = [1, 2, 12, 36, 5, 458, 5];

let sum = 0;
numbers.forEach(function (value, index) {
  if (index <= 3) {
    sum += value;
  }
});
console.log(sum);
