var object1 = {
    name: 'matt',
    age: 28,
    haircolor: 'brown',
    eyecolor: 'hazel'
};

for(var details in object1){
    console.log(object1[details]);
}

var myNumber = 0;

for (var i = 0; i < 20; i++){
    if(i === 15){
        break;
    }
    
    myNumber++;
}

console.log(myNumber);

var innerloop = 0;
var outerloop = 0;

outerfor: for(var i = 0; i < 10; i++){//this for loop is labelled
    for(var j = 0; j < 10; j++){ //for every loop of the out for loop the inner for loop will loop 10 times, so 10 x 10 will equal 100 loops in total
        if(i === 5 && j === 5){
            break outerfor;//once i and j equal to 5 then we break out of both loops, if the label is not called then we will just break out of the inner loop
            
            //continue outerfor; //using continue will wait until i and j both equal 5 and then skip onto the next iteration for the outer loop. basically continue just skips onto the next iteration in the for loop.
        }
        
        innerloop++;
    }
}

console.log(innerloop);

//SWITCH STATEMENT
function activateSwitchStatement(){
    var input = document.getElementById('switch-input').value;
    
    convertedString = input.toLowerCase();
    
    switch(convertedString){
        case 'blue': console.log('you typed blue');
            break;
        case 'red': console.log('you typed red');
            break;
        case 'yellow': console.log('you typed yellow');
            break;
        case 'green': console.log('you typed green');
            break;
        default: console.log('you did not type one of the colors provided');
    }
}

var switchNum = -11;

switch(true){
    case switchNum <= 5: console.log('number is less than 5');
        break;
    case switchNum >= 6 && switchNum <= 10: console.log('number is between 6 and 10');
        break;
    default: console.log('number is greater than 10');
}

