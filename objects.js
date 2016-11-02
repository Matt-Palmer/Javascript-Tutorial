//OBJECTS

// There are two ways to  create objects, these are shown in the examples below:


//the first way is to define he object 'person' using the 'new' operator with the object constructor
var person = new Object();
person.name = 'Matt';
person.age = 28;

console.log(person.name);

/*The second way is to use 'object literal' notation, this is used for 
**shorthand, to create an object with numerous properties
*/
var person2 = {
    name: 'Zoe',
    age: 27
};

console.log(person2.age);

//property names can be specified as strings or numbers whilst using literal notation
var person3 = {
    'name' : 'Loz',
    'age' : 52,
    1 : 'one'
};

console.log(person3[1]);//[] can be used to access variable names that are strings or numbers.
console.log(person3['age']);

//Object literals have become the preffered method of passing a large number of 
//arguments to a function, see the example below: 

function displayInfo(args){
    var infoOutput = '';
    
    if(typeof args.name == 'string'){
        infoOutput += 'Name: ' + args.name + '\n';
    }
    
    if(typeof args.age == 'number'){
        infoOutput += 'Age: ' + args.age + '\n';
    }
    
    console.log(infoOutput);
};

displayInfo({
    name: 'Matt Palmer',
    age: 32
});

displayInfo({
    name: 'Zoe Jackson'
});


//ARRAYS

//Arrays can be created in 2 basic ways, these are shown bleow: 

//FIRST the array can be created by using the 'new' keyword and then calling the array constructor.
var myArray = new Array();

//if the size of the array is known then this can be entered into the constructor
var anotherArray = new Array(10); 

//Items can also be passed into the array using the constructor
var names = new Array('Matt', 'Zoe', 'Mick', 'Loz');
console.log(names[1]);

//the 'new' keyword is not needed to create arrays with the constructor, but is good practice to leave it in
var colors = Array('blue', 'red', 'yellow');
console.log(colors[2]);

//the SECOND array can be created using 'array literal' notation
var moreColors = ['green', 'black', 'pink'];

console.log(moreColors[0]);

var emptyArray = []; //creates an emty array

//items can be easily canged in an array as shown below:
console.log(moreColors[2]);
moreColors[2] = 'gold';
console.log(moreColors[2]);

//items can also be easily added to the array as shown below:
console.log(colors[3]);
colors[3] = 'white';
console.log(colors[3]);


//find out the length of the array
console.log(colors.length);

//the length of an array can be changed using the .length function
colors.length = 1;
console.log(colors[1]);
console.log(colors[0]);






