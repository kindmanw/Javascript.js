    console.log('Hello World')
    // alert('welcome')
    // prompt('how are u')

    //LET
    //console.log('username')

    //let first_name = 'young'
    //console.log(first_name)


// let name = 'Williams'
// console.log(name)
 //VAR
// var age = '25'
 //var age = '28'
//console.log(age)

//     //CONST
// const last_name = 'Ifeoluwapo'
// console.log(last_name);
//  let username = "williams"
    
//DATA TYPES 
//1. strings = alphabets inside qoute ==>''
//2. integer
//3. boolean
//4. undefigned
//5. null
//typeof checks the kinda data

// var online = true
// console.log(typeof true)

// console.log(typeof name)
// console.log(typeof 28)

// console.log('My name is ' + name +' and i am '+ age + " year's old")

// console.log(window.innerWidth, 'px')

//Arithmetic operators
//+ - / % * -- ++ **

// var x = 3
// var y = 3
// console.log(x+y);

//comparison operators; it returns a boolean value

//== === >= <= > <
//== (this checks for only the value)
//=== (this checks for both value and type)

// var y = 7
// var z = 8
//console.log(y < z)
//console.log(y === z)

//functios ()

// function greet(){
//     console.log('Good day world')
// }
// greet()
// //or 

// const greets = function(){
// console.log('Good day my world');
// }
// greets()

// const greetings = () =>{
//     console.log(' Great one')
// }
// greetings()

// //function that adds same numbers

// function add(x){
// //return(x+x)
// console.log(x+x)
// }
// add(9)

//a function that squares a Number

// function square(a){
// console.log(a**2)
// }
// square(3)

// function square(num){
//     return(
//           num**2
//     )
// }
// console.log(square(12));

//Write a funct that alerts the age of the user after inputting
//users year in prompt.
// const input_year = prompt('Welcome, please input your year of birth');
// const age = 2023 - input_year
// alert(`your input year is ${input_year} and your age is ${age}`);

//a function that converts naira to dollar
//a function that converts degree to farenheight

// function toCelsius(farenheight){
//     return(5/9) * (farenheight-32);
//     toCelsius;
// }

// function toCelsius(farenheight){
//     var Celsius = (5/9) * (farenheight-32);
//     return Celsius;
// }

const user = {
    name : "Willaims Kindness",
    age : 28,
    sex : "male",
    eyeColor : "brown",
    height : 8.5,
    hobbies: "I love coding, watching movies and football"
}
console.log(`I am ${user.name}`)
console.log(`I am ${user.age} years old,}, a  ${user.sex} `);
console.log(`${user.hobbies}. My eye colour is ${user.eyeColor} and finally, i'm ${user.height}inches tall`);

// const name = document.getElementById('name')
// name.innerHTML = user.name
// const age = document.querySelector(age)
// age.innerHTML = user.age

// let age = prompt("please enter your age:");
// if (age >= 18) {
//     alert("You're upto the age of voting");
// }
// else {
//     alert("Sorry, wait for your time to vote, your time is coming, no rush");
//}

// if (hour < 12) {
//     greetings = ("Good day to you");
// }
// else {
//     greetings = ("Good night abeg")
// }


if ( age < 18) {
    warning1 = "You're too young to be drinking"
} else if ( age < 22)
 {
    warning = "You should be saving money not drinking with it"
} else {
    warning = "It's you're choice afterall, just a friendly warning"
}
document.getElementById("demo2").innerHTML = warning

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
        case 1:
            day = "Monday";
            break;
            case 2:
                day = "Tuesday";
                break;
                case 3:
                    day = "Wednesday";
                    break;
                    case 4:
                        day = "Thursday";
                        break;
                        case 5:
                            day = "Friday";
                            break;
                            case 6:
                                day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;

