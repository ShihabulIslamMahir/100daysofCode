// Hoisting


//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. It is JavaScript's default behavior.

//Example 1: 

function calculateAge(yearOfBorn){
    console.log(2020-yearOfBorn);
}

calculateAge(1995);
//output: 25

// We can also do it the other way around, as hoisting is default behavior of js, so in js functions are hoisted in creation phase, so we can call function before declare it. Aonther thing I can say, as Function call executes in execution phase so we can call function before it declares.

calculateAge(1995);

function calculateAge(yearOfBorn){
    console.log(2020-yearOfBorn);
}

//output: 25

//But Function expression isn't work like this.We store function in a variable and we set that variable as "undefined" in creation phase. Orginal function executes later so for function expression if we call function before it declares then it will not give value and it will show error and it will say it's not a function, because that moment it's not a function , it's a variable.

//Exapmle 2:
retirementYear(1995);
var retirementYear = function(year){
    console.log (55-(2020-year));
}

//output: retirementYear is not a function



// we declare it first and call it later then it will give value.


var retirementYear = function(year){
    console.log (55-(2020-year));
}

retirementYear(1995);

//output: 30


//In Same way, we can use variable before it's declare but in creation phase variable sets as "undefined" so it will show "undefined" as output

//Example 3: 

console.log('value:' + x);

var x = 25;

//output: undefined

// So for value , we need to declare first and then it will need to call

var x = 25;

console.log('value:' + x);

//(*** Inportant thing, For best practice we should not call function before it's declare)

