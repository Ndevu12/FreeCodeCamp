function destroyer(arr, ...arr2) {
  return arr.filter(element => !arr2.includes(element));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));