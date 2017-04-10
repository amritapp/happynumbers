console.log("hello main2.js");

var testThisNumber ="56";

var splitValues =function(potato){
	console.log("yo Nick,this can be anything",potato);
// potato =potato.toString();
 var arrayOfNumbers =potato.split("");	
 for (var i=0; i < arrayOfNumbers.length; i++){
 	arrayOfNumbers[i] = Number(arrayOfNumbers[i]);
 }

 return arrayOfNumbers;
}

function squareAndAdd(passedValue){
  var processedVals = [];
  var i = 0;
  while (i < passedValue.length){
  	var squared = passedValue[i] * passedValue[i];
  	processedVals.push(squared);
  	i++;
  }
 var allTogether = 0;

  for (var i =0; i < processedVals.length; i++){
  	allTogether = allTogether + processedVals[i];
  }
  return allTogether;

}

function checkHappy(passedValue) {
	if (passedValue === 1) {
		console.log (testThisNumber, "is a happy number");
	}else {
      var checkDigits = passedValue.toString();
      if (checkDigits.length ===1){
      	//done with this stuff-sad sad
      	console.log(testThisNumber,"is a sad Number maybe");
      }else{
      	//keep going
      	checkDigits = splitValues(checkDigits);
      	var newNumber = squareAndAdd(checkDigits);
      	//checkHappy(newNumber);
      }
	}
}



var isHappy = splitValues(testThisNumber);
isHappy = squareAndAdd(isHappy);
isHappy = checkHappy(isHappy);


var button=document.getElementById("btn-checkvalue");

button.addEventListener("click", function(){
console.log("clicked", document.getElementById("numberVal").value);
	var inputNumber = document.getElementById("numberVal").value;
	var testThisNumber = splitValues(testThisNumber);
	testThis = squareAndAdd(testThis);
	testThis = checkHappy(testThis);
});