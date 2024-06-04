//strings
let email = 'mario@gmail.com';

//strings concatenation
let firstName = 'Ana';
let lastName = 'Rojo';
let fullName = firstName + ' '+lastName;
console.log('\n',fullName);

//getting characters
console.log(fullName[0]); //shows: A

//string length
let fullnameLength = fullName.length;
console.log(fullnameLength);

//string methods
let myNumber = 8.7;
let stringNumber = myNumber.toString();
console.log(stringNumber);

//let result = fullName.replace('n','a');
//console.log(result);

//numbers
let radius = 10;
const pi = 3.14;
let result = pi * (radius**2);
console.log(result);

console.log(result++);

//template string
const title = 'Best reads of 2025';
const author = 'Ana';
const likes = 20;

//template string way
let templatestring =`The blog called ${title} by ${author} has ${likes} likes`;
console.log(templatestring);
//creating html templates
let html =`
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes}likes</span>
`
console.log(html);

//arrays
let ninjas = ['ana', 'pablo', 'marta'];
ninjas[2] = 'carlos';

let resultArray = ninjas.concat(['maria', 'carla']);
console.log(resultArray);

let resultNew = ninjas.push('maria');
console.log('Now: ', ninjas);

//type conversions
let score = '100';
console.log(Number(score)+2);

let something = 50;
console.log(Boolean('a'), 'years');

//for loops
for(let i=0; i<ninjas.length; i++){
    //console.log(ninjas[i]);
    //snippet html
    let html_ej = '<div>${names[i]}</div>';
    console.log(html_ej);
}

//while loop
const names=['mario', 'luigi', 'shaun'];
let i = 0;
while(i<names.length){
    console.log(names[i]);
    i++;
}

//if statements
const age = 25;
if(age>20){
    console.log('you are over 20 years old');
}

//else-if + logical operators
const password = 'p@ssword123';

if(password.length >= 8 && password.includes('@')){
    console.log("that password is mighty strong and long enough");
}else if(password.length < 8 || !password.includes('@')){
    console.log("that password is not long enough or it does not include the '@' symbol");
}else{
    console.log("that password is not long enough");
}

//break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i=0; i< scores.length; i++){

    if(scores[i]=== 0) continue;
    console.log('your score: ', scores[i]);

    if(scores[i]===100){
        console.log('congrats, you got the top score!');
        break;
    }
}

//switch statements
const grade = 'B';
switch(grade){
    case 'A': console.log("you got and A!"); break;
    case 'B': console.log("you got and B!"); break;
    case 'C': console.log("you got and C!"); break;
    case 'D': console.log("you got and D!"); break;
    default: console.log("not valid grade!");
}

//variables & block scope
const eje = 30; //global scope. could be access anywhere

if(true){
    const eje = 33; //local scope. could only be accessed
    //inside the brakets
    console.log(eje);
    if(true){
        const eje = 35; //local scope. could only be accessed
        //inside the brakets
        console.log(eje);
    }
}
console.log(eje);

//fumcion declaration
function greet(){ console.log('hello there!');}

//function expression
const speak = function(name = 'Ana', time= 'day'){
    console.log(`good ${time} ${name}!`);
};

greet();
speak('Marta');

//returning values
const calcArea = function(radius){
    return 3.14 * (radius**2);
};

const area = calcArea(5);
console.log(area);

//Arrow functions
const calArea2 = (radius) => { 
    return 3.14*(radius**2);
};

console.log(calArea2(5));

//turning regular functions into arrow functions
const greet2 =()=> 'hello world';
greet2();

const bill = (products, tax) => {
    let total = 0;
    for(let i= 0; i<products.legth; i++){
        total += product[i]+ (product[i]*tax);
    }
    return total;
};

console.log(bill([10, 40, 30], 0.2));

//diferences between functions and methods
const greet3 = () =>'hello';
let resultOne = greet3();
console.log(resultOne);

//callback functions
const myFunc = (callbackFunc) =>{
    let value = 50;
    callbackFunc(value);
};

myFunc((value)=> {console.log(value);});

//Object literals
let user = {
    name: 'Crystal',
    age: 30,
    email: "crystal@gmail.com",
    location: 'Berlin',
    blogs: ['why mac & cheese rules', '10 things to be happy'],
    login: function(){
        console.log('the user  logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        console.log('the user logged in the blog: ',this.blogs[0]);
    }
};

console.log(user);
user.name = 'Ana';
console.log(user.name); 
user.login();
user.logBlogs();

//Reference values
const userOne = {name:'ana', age: 25 };
const userTwo = userOne;
console.log( userOne, " ", userTwo);
userOne.name =  'Raquel';
//both of them are changed because they are 
//both pointing to the same thing
console.log( userOne, " ", userTwo);
