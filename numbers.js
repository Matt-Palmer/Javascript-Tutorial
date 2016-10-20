

function convertBinaryToNumber(){
    var userInput = document.getElementById('binary-value');
    
    var convertStringToNumber = parseInt(userInput.value, 2);
    
    var numberOutput = document.getElementById('display-binary-value');
    
    numberOutput.innerHTML = convertStringToNumber;
}

function convertNumberToBinary(){
    var userInput = document.getElementById('string-value');
  
    var convertStringToNumber = parseInt(userInput.value);
   
    var binaryOutput = document.getElementById('display-binary');
    
    binaryOutput.innerHTML = convertStringToNumber.toString(2); //on number values the method toString(radix) along with an argument known as the radix, can be used to turn numbered values into binary, octal, decimal and hexidecimal.
}

function bitwiseAndOperator(){
    var userInput = document.getElementById('binary-value1');
    var userInput2 = document.getElementById('binary-value2');
    
    var convertStringsToNumber = parseInt(userInput.value, 2) & parseInt(userInput2.value, 2);
    
    var numberOutput = document.getElementById('display-and-binary');
    
    numberOutput.innerHTML = convertStringsToNumber.toString(2);
}

function bitwiseOrOperator(){
    var userInput = document.getElementById('binary-or-value1');
    var userInput2 = document.getElementById('binary-or-value2');
    
    var convertStringsToNumber = parseInt(userInput.value, 2) | parseInt(userInput2.value, 2);
    
    var numberOutput = document.getElementById('display-or-binary');
    
    numberOutput.innerHTML = convertStringsToNumber.toString(2);
}

function bitwiseXorOperator(){
    var userInput = document.getElementById('binary-xor-value1');
    var userInput2 = document.getElementById('binary-xor-value2');
    
    var convertStringsToNumber = parseInt(userInput.value, 2) ^ parseInt(userInput2.value, 2);
    
    var numberOutput = document.getElementById('display-xor-binary');
    
    numberOutput.innerHTML = convertStringsToNumber.toString(2);
}

function bitwiseNotOperator(){
    var userInput = document.getElementById('binary-not-value1');
    
    var convertStringsToNumber = ~parseInt(userInput.value, 2);
    
    var numberOutput = document.getElementById('display-not-binary');
    var numberOutput2 = document.getElementById('display-not-int');
    
    numberOutput2.innerHTML = convertStringsToNumber;
    numberOutput.innerHTML = convertStringsToNumber.toString(2);
    
    //function works but not how I imagined it would, the converted
}

function bitwiseShiftLeftOperator(){
    var userInput = document.getElementById('binary-sl-value1');
    var userInput2 = document.getElementById('binary-sl-value2');
    
    var convertStringsToNumber = parseInt(userInput.value, 2) << userInput2.value;
    
    var numberOutput = document.getElementById('display-sl-binary');
    
    numberOutput.innerHTML = convertStringsToNumber.toString(2);
    
}

function bitwiseSignedShiftRightOperator(){
    var userInput = document.getElementById('binary-sr-value1');
    var userInput2 = document.getElementById('binary-sr-value2');
    
    var convertStringsToNumber = parseInt(userInput.value, 2) >> userInput2.value;
    
    var numberOutput = document.getElementById('display-sr-binary');
    
    numberOutput.innerHTML = convertStringsToNumber.toString(2);
    
}