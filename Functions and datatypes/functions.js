/* Function Declaration. */
function Display()
{
    console.log("WELCOME TO JAVASCRIPT FUNCTIONS");
}
Display();

// Function with parameter
function Name(name)
{
    console.log(`Your name is ${name}`);
}
Name("Pratik")

// Function with few parameter and arguments.
function values(a, b)
{
    const c = arguments[2];
    console.log(`Values are: ${a} ${b} ${c}`);
}
values(1, 2, 3);

// Functions with default parameters.
values2(10, 29);
function values2(a, b, c = 40)
{
    console.log("Values are: ", a, b, c);
}
// Functions using rest parameter.
function add(...args)
{
    let sum = 0;
    for(let i = 0; i < args.length; i++)
    {
        sum = sum + args[i];
    }
    return sum;
}
const result = add(10, 20, 40, 55, 60);
console.log("Addition result is: ",result);

/* Function Expression */
const myfun1 = function show(...name)
{
    console.log("My name is: ", name[0], name[1], name[2]);
};
myfun1("Shiv", "Tushar" ,"Cholke");

/* Anonymous Functions */

const gcd = function(num1, num2)
{
    if (num1 == 0)
        return num2;
    if (num2 == 0)
        return num1;
    if (num1 > num2)
        return gcd(num1 - num2, num2);
    return gcd(num1, num2 - num1);
};
console.log("GCD is: ", gcd(10, 50));

// Passing Anonymous Function as an argument.
function display(myfun2)
{
    return myfun2();
}
console.log(
    display(function(){
        return "Hello World";
    })
);

// Returning Anonymous Function.
function multiply(a)
{
    return function(b){
            return a*b;
        }
}
const multResult = ( multiply(10) );
console.log(`Result of multiplications is: ${multResult(5)}`);

/*************ARROW FUNCTIONS **************/
let oddEven = a =>  a % 2 == 0 ? true : false;
console.log("ODD: False EVEN: True. Computed is: ",oddEven(50));

// Binary Search Iterative method.
var list = [12, 24, 45, 66, 72, 81, 87, 99, 100];
var h = list.length - 1, l = 0;
const binarySearch = (key, list) => {
    let mid;
    while(l <= h)
    {
        mid = Math.floor((l + h) / 2);
        if (key == list[mid])
            return mid+1;
        else if(key > list[mid])
            l = mid + 1;
        else
            h = mid - 1;
    }
    return -1;
}
const result3 = binarySearch(72, list);
console.log("Number found at location: ", result3);