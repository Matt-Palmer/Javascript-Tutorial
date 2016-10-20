// Console log examples

var result1 = 5 > 3;
var result2 = 5 < 3;

console.log(result1);// relational operators either return true or false
console.log(result2);

function lessThan(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    
    var num1Converted = parseInt(num1);
    var num2Converted = parseInt(num2);
    
    var displayResult = document.getElementById('ltresult');
    
    if(num1Converted < num2Converted){
        displayResult.innerHTML = 'Yes! the first number is less than the second.'
    }else{
        displayResult.innerHTML = 'No! the first number is greater than the second.'
    }
}

function lessThanString(){
    var str1 = document.getElementById('num1').value.toLowerCase();
    var str2 = document.getElementById('num2').value.toLowerCase();
    
    var displayResult = document.getElementById('ltresult');
    
    if(str1 < str2){
        displayResult.innerHTML = 'Yes! The character value of the first string is less than the second.'
    }else{
        displayResult.innerHTML = 'No! The character value of the first string is greater than the second.'
    }

}

function greaterThan(){
    var num1 = document.getElementById('gtnum1').value;
    var num2 = document.getElementById('gtnum2').value;
    
    var num1Converted = parseInt(num1);
    var num2Converted = parseInt(num2);
    
    var displayResult = document.getElementById('gtresult');
    
    if(num1Converted > num2Converted){
        displayResult.innerHTML = 'Yes! the first value is greater than the second.';
    }else{
        displayResult.innerHTML = 'No! the first value is less than the second.';
    }
}

function greaterThanString(){
    var str1 = document.getElementById('gtnum1').value.toLowerCase();
    var str2 = document.getElementById('gtnum2').value.toLowerCase();
    
    var displayResult = document.getElementById('gtresult');
    
    if(str1 > str2){
        displayResult.innerHTML = 'Yes! the value of the first string is greater than the second.';
    }else{
        displayResult.innerHTML = 'No! the value of the first string is less than the second.';
    }
    
}





