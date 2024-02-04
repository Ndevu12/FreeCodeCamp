function sumAll(arr) {
  let newArr = arr.slice();
  newArr.sort((a, b) => a - b);
  let sum = 0;

  for (let i = newArr[0]; i <= newArr[1]; i++)
  {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));