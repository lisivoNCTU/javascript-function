function sum()
{
  var sum=0;
  for(var i=0 ;  i < arguments.length ; i++ )
  { sum += arguments[i]; }
  return sum;
}
//sum(1,3,5,6,6,7,8);

var arr = [3,4,5,6];
x=sum.apply(null,arr);
console.log(x);