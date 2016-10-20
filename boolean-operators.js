function strReturnsTrue(){
    var str = "String";
    
    var displayBool = document.getElementById('display-boolean-state');
    
    displayBool.innerHTML = !str; //an exclamation point signifies a Logical NOT operator. 
}


function thisOrThat(){
    var thisOne = document.getElementById('this');
    
    var thatOne = document.getElementById('that');
    
    var displayThis = thisOne.value || thatOne.value;
    
    var display = document.getElementById('display-state');
    
    display.innerHTML = displayThis;
}

function thisAndThat(){
    var thisOne = document.getElementById('this2');
    
    var thatOne = document.getElementById('that2');
    
    var displayThis = thisOne.value && thatOne.value;
    
    var display = document.getElementById('display-state2');
    
    display.innerHTML = displayThis;
    
    if(thisOne.value == "" || thatOne.value == ""){
        display.innerHTML = 'Something needs to be inserted into both boxes';
    }
}

var myObject = {
    name: "matt"
};

var myObjetc2 = {
    lastname: "palmer"
};

var string = "my string";

var number = 5;

var emptyStr = "";

var result = myObject && string;

var result2 = string && myObject;

var result3 = myObjetc2 && myObject;

var result4 = emptyStr && myObjetc2;

var result5 = null && string;

var result6 = string && number;

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);

var isTrue = false;

var myResult = (isTrue && thisIsNotDeclared); //if the value of the first variable is false then the second value is never assessed.
console.log(myResult);