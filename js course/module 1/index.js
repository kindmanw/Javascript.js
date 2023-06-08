

// var a =5;
// var b =7;
// var x = a % b;
// console.log(x);

// let numOne =3;
// let numTwo =3;

// console.log(numOne == numTwo);

// /*let js = 'javascript'
// let py = 'python'*/

// //console.log(js == py)

// let js = 'javascript'
// let py = 'python'

// console.log(js == py)

// let word = 'javascript'

// word = 'y'

// let nums = [1, 2, 3,4]
// nums[2] = 40;

// console.log(nums);

// let age = 32;
// const gravity = 9.81;
//  var arr [2, 4, 6, 7]

//  console.log(arr)

// var btn=document.querySelector('.btn')
// function say()
// {
//     alert('Button click')
// }
// btn.addEventListener('click', say)
// var text=document.getElementById('.body')
// var 

// Declearing objects

person = {
    Fname : 'Williams',
    Lname : 'Kindman',
    age : 30,
    ownerCar : false
}

//console.log(person);

//Calling each values singly
//dot notation

//console.log(person.Fname);
//console.log(person.age);

//Using brackets notation

//console.log(person['Lname']);

//console.log(person['ownerCar']);

//working with objects

var kumuyi = {
    lastname : 'Kumuyi',
    firstName : 'Folorunsho',
    age : 84,
    married: true,

    ministers : ['Edison', 'McLawrence', 'Okafor', 'Joshua'],

    churchLocations : {
        state: 'Cross River',
        regions : {
            Obubra : '10 churches',
            Ikom : '15 churches',
            Ugep : '12 churches',
        }
    }
}

//console.log(kumuyi);

console.log(kumuyi.ministers[0]);

//console.log(kumuyi.churchLocations.state);


kumuyi.branches = ['Nigeria', 'Ghana', 'France', 'Italy']
kumuyi.married = false
delete kumuyi.married
console.log(kumuyi)