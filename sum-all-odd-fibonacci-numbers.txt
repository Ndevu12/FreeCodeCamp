function sumFibs(num) {
/**
if (num = 1)
{
   return num;
} */
let a = 0
let b = 1, c = 0, sum = 0;

  for (; a <= num;)
  {
     
   console.log(c);
     if ( a % 2 !== 0)
     {
        sum += a;
     }
     c = a + b;
     a = b
     b = c
  }
  return sum;
}

console.log(sumFibs(4));