function fearNotLetter(str) {
  let charCode = [];
  for (let i = 0; i < str.length; i++)
  {
    charCode.push(str.charCodeAt(i));
  }
  
  for ( let i = 0; i < charCode.length; i++)
  {
    if (charCode[i] < charCode[i + 1])
    {
      if ((charCode[i + 1] - charCode[i]) === 1)
      {
        continue;
      }
      else 
      {
        let char = charCode[i + 1] - 1;
        return String.fromCharCode(char)
      }
    }
  }
   
  return;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));