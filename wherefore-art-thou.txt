function whatIsInAName(collection, source) {
  let arr = [];
  for (let i = 0; i < collection.length; i++)
  {
    let check = false;

    for (let key in source)
    {
      if (collection[i][key] !== source[key])
      {
        check = true;
      }
    }
    if (!check){
    arr.push(collection[i])
    };
  }
return arr; 
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));