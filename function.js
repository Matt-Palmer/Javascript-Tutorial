var btn = document.getElementById('submit');



btn.onclick = function submitName(){
    
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    
    var fullName = firstName + ' ' + lastName;
    
    var hideThis = document.getElementById('input-group');
    
    hideThis.style.display = 'none';
    
    console.log(fullName);
    var greeting = document.getElementById('greeting');
    greeting.innerHTML = 'Hello ' + fullName + ' welcome to our page!';
    
    
}

function howManyArgs(){ //functions within ECMAScript do not need arguments to be defined when the function is created
    console.log(arguments.length);
}

howManyArgs(1, 4);//the arguments section acts as an array, it can have as many arguments as it likes and still be valid


//OVERLOADING is not possible but can be simulated as shown in the function doAdd()

function doAdd(){
    if(arguments.length == 1){ //if no arguments are declared within the parameters but have been entered when the function is called, then they arguments can be accessed using 'arguments' 
        console.log(arguments[0] - 6);
    }else if(arguments.length == 2){
        console.log(arguments[0] + arguments[1]);//arguments can then be used in the same way as arrays.
    }
}

doAdd(5);
doAdd(10, 4);

//PRIMATIVE AND REFERENCE VALUES

var primativeNumber = 2;
var priNum = primativeNumber;

console.log(priNum);//2

primativeNumber = 5;

console.log(priNum);//still 2
//primitive numbers are not linked when copied, so changing the value of the first variable will not effect the other



var refNum1 = new Object();
var refNum2 = refNum1

refNum1.num1 = 54;
console.log(refNum2);//54

refNum2.num1 = 99;
console.log(refNum1);//both values changed to 99
console.log(refNum2);

refNum1.num1 = 100;
console.log(refNum1);//both values changed to 100
console.log(refNum2);
//referenced numbers are linked to the same object when copied, so once the value of either is changed, then both will be changed. 