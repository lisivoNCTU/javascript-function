function AreaOfCircle(radius) {
  var area = Math.PI * (radius * radius);
  return area.toFixed(0);
}

function testfn(x){
 // var x=1;
  var y=1;
  //for(x==1;x<=9;x++){
    //for(y==1;y<=9;y++){
      return x*9;
     // y++;
   // }
    //x++;
  //}

}

// Create an array.
var radii = [10, 20, 30];

// Get the areas from the radii.
var areas = radii.map(AreaOfCircle);


var testvar=[1,2,3];
var tests=testvar.map(testfn);
//console.log(areas)
console.log(tests);