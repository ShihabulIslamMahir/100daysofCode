***Javascript Behind The Scene***

We generally run js in an environment. It can be our browser or it can be any other application program like node.js. Where we run js, there is a javascript engine exists there like Google V8 Engine, Spider Monkey, JavaScript Core etc 

Javascript code execution steps:

CODE ---> PARSER (read code line by line) ---> CONVERT THEM TO MACHINE CODE ---> CODE RUNS
                                           |                                 |
                                           |                                 | 
                                           |                                 |
                                Abstract Syntex Tree                    Machine CODE

 Steps:

1. Write code
JS Engine Part:
2. This code goes in parser. Here it checks syntex error. If it finds syntex error then it throws error. Otherwise, Abstract Syntax Tree (a data structure)  is created from Parser.
3. In this step, code will convert to machine code, computer/machine will understand the code.
4. Last step, Code will run.


**Execution Context and Execution stack**

*Execution Context*:
By Default Js executes Global context, It's not like other languages those execute from specific function.
Global context of JS is Browser's "window" object. Any global variable declare or assign in window object is same thing.

*example:

var x = 5;

window.x;

//output: 10 ( It will show same value)

But if your environment is not a browser then it will change with environment. Example : for node.js, it will be "global" object.

Execution Stack:

Example: 

var name = 'Mahir'; -------------------- 1 (Global Execution Context )
function first() { --------------------- 2
   var welcome = 'Hi '; ------------- 6
   second(); --------------------------- 7
   console.log(welcome + name);--------- 13
}
function second() {--------------------- 3
   var welcome2 = 'Hello! ';--------------- 8
   third();----------------------------- 9
   console.log(welcome2 + name);-------- 12
}
function third() {---------------------- 4
   var welcome3 = 'Hey! ';-------------- 10
   console.log(welcome3 + name); ------- 11
}
first();-------------------------------- 5

Execution Stack follows First In Last Out System. Execution Stack serial

Explanation (summery) :

 var name = 'Mahir'; is First In / Global Execution Context (1)

 Execution Context second- first() (2)
 
 Execution Context third - second() (3)

 Execution Context four-  third() (4)

 Please check serial for execution sequence

 First thing will pop  "Execution Context four"  after finishing the execution from stack, then will pop "Execution Context third", "Execution Context second".

Let's go to a little bit deep of Execution Context: 

When we call a function then it happens two phases: 

1. Creation Phase: In creation phase, first of all it creates variable object. then it creates scope chain and lastly, determine value of 'this' variable.

 *Explanation: 
 The argument object is created, containing all the arguments that were  passed into the function.
 Code is scanned for function declaration: for each function, a property is created in the variable object, pointing to the function
 Code is scanned for variable declarations: for each variable, a property is created in the variable object, and set to undefined

2. Execution phase: The code of the function that generated the current execution context is ran line by line.









