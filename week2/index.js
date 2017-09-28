//1
function createArray(startIndex, stopIndex, threeCallback, fiveCallback) {
  
  let numbers = [ ];
  for (let i = startIndex ; i <= stopIndex ; i++) {
   numbers.push(i);
}
  console.log(numbers);
  
  for (let i = 0 ; i < numbers.length; i++) {
          if (numbers[i] % 3 == 0){
              console.log(numbers[i]); 
              threeCallback();
     }
          if (numbers[i] % 5 == 0){
              console.log(numbers[i]); 
              fiveCallback();
 
  }
 }
}
function sayThree(){console.log('is divisible by 3');}

function sayFive(){console.log('is divisible by 5');}

createArray(10,15,sayThree,sayFive);

//2

function repeatStringNumTimes(str, num) {
  if (num < 0) {return "";}
  else return str.repeat(num);
}

repeatStringNumTimes("abc", 3);


//3


function stringNumTimesForLoop(str, num){
  let newStr = "";
  for (let f = 0; f < num; f++ ){
     newStr += str ;
  }
return console.log(newStr);
}
stringNumTimesForLoop("abc", 3);

//4

function stringNumTimesWhileLoop(str, num){
var j = 0;
var newStr = "";

while (j<num) {newStr += str; j++;}
return console.log(newStr);
}
stringNumTimesWhileLoop("abc", 3);

//5

//?????

//8

let arr = [[1,2,[8,9]],[3,4],[5,6,7]];
  
     for(var a=0; a<arr.length; a++){
    for (var b=0; b < arr[a].length; b++) {
  for (var c=0; c < arr[a][b].length; c++){
 console.log(arr[a][b][c]);
  }
 }
}









