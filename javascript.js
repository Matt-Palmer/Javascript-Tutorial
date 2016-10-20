
var myMessage = {
    age: 65,
    name: 'matt'
};

var thisIsNotDefined;

console.log(typeof (myMessage.name));

if(typeof thisIsNotDefined == 'undefined'){
    console.log('this variable was not defined');
}

var emptyObject = null;

console.log(typeof emptyObject);

if(emptyObject == undefined){
    console.log('null is the equivalent of undefined');
}

var someString = 'a string';
var emptyString;
console.log(Boolean(someString));
console.log(Boolean(emptyString));

var intNumber = 4; //basic integer
var octNumber = 074; //octal number (invalid if used within strict mode)
var hexNumber = 0x1A; //hexadecimal number
var floatingNumber = 1.2; //floating points must include a decimal and atleast one number after it
var floatingNumber2 = .6; //can also be written like this without a integer infront of the decimal, but it is not recommended
var convertedToInteger = 2.0 //whole numbers will be converted into an integer
var eNotation = 3.1e5; //E-notation, take 3.1 and multiply it by 10 to the power of 5 e.g 3.1 x 10 x 10 x 10 x 10 x 10 = 310,000

console.log('basic integer ' + intNumber);
console.log('Octal Number ' + octNumber);
console.log('Hexadecimal Number ' + hexNumber);
console.log('Floating Number ' + floatingNumber);
console.log('Floating number with missing first integer ' + floatingNumber2);
console.log('Converted Floating number ' + convertedToInteger);
console.log('3.1 multiply by 10 to the power of 5 = ' + eNotation);

var numberRange = Number.MAX_VALUE; //max value is within the range of available numbers meaning it is within the finite range
console.log(isFinite(numberRange)); //isFinite will return as true as the number is not infinite

var outsideRange = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(outsideRange)); //isFinite will return false as the number now adds up to above the range and has automatically been set to infinity. infinity has no numerical representation.
console.log(numberRange);

var negativeInfinity = Number.NEGATIVE_INFINITY;
console.log(negativeInfinity);

var positiveInfinity = Number.POSITIVE_INFINITY;
console.log(positiveInfinity);

var notANumber = '10'; //numbered strings can be converted into a number
var color = 'red'; // cannot be converted into a number
var decimalNumber = 1.3;
var myBoolean = true; //booleans can be converted into a number, wither 0 or 1

if(isNaN(NaN)){ //enter one of the above 4 variables to test
    console.log('this is not a number');
}else{
    console.log('this is a number');
}

var numberString = '2.34'
var hexString = '0xB'

console.log(Number (numberString));
console.log(parseInt (hexString));
console.log(parseFloat (numberString));


var num1 = parseInt ('10', 2); // the second argument is known as a radix, value '2' is parsed as binary
var num2 = parseInt ('152717', 8); // value '8' is parsed as octal
var num3 = parseInt ('10', 10); // value '10 is parsed as decimal
var num4 = parseInt ('1F01', 16); // value '16' is parsed as hexadecimal 

var num5 = parseInt ('0xAF', 16); // the radix allows numbers written as srings such as hexadecimal, binary etc to be converted correctly into a number
var num6 = parseInt ('1001', 2); // converts the strign as binary, answer should be 9;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

var float1 = parseFloat ('1234blue'); // similar to parseInt() but will include the first decimal as valid
var float2 = parseFloat ('2.34567');
var float3 = parseFloat ('2.3452.12');
var float4 = parseFloat ('0xF');
var float5 = parseFloat ('3.12e4');

console.log(float1);
console.log(float2);
console.log(float3);
console.log(float4);
console.log(float5);

var text = 'This is the letter pi: \u03a0.';

console.log(text + ' ' + text.length);

var editString = 'change me!'

console.log(editString);

editString = 'string has been changed';

console.log(editString);

var string1 = 10;
var string2 = "string";
var string3 = null;
var string4;

console.log(String(string1));
console.log(String(string2));
console.log(String(string3));
console.log(String(string4));

var octNumber = 54735;

console.log(octNumber.toString(8));

var s1 = '3';
var s2 = 'string';
var b = false;
var f = 2.2;
var o = {
    valueOf: function () {
        return -2;
    }
}

console.log(s1++);
console.log(s2++);
console.log(b++);
console.log(f++);
console.log(o++);

var not1 = 9;
var not2 = ~not1;

console.log(not2);