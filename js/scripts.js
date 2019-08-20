// const exampleString = 'I am a String.';
// const exampleObjectString = new String(1);
// const anotherString = 'I am a String.';
// const H1 = document.getElementById('greeting');
// console.log(H1);



// function checkExample() {

//     // if (exampleString === exampleObjectString) {
//     //     console.log(`Yes, ${exampleString} and ${exampleObjectString} do loosely equal,`);
//     // } else {
//     //     console.log('Sorry, they do not equal at all.');
//     // }
//     if (exampleString !== anotherString) {
//         console.log(`Yes, ${exampleString} and ${anotherString} are not equal,`);
//     } else {
//         console.log('Sorry, they are equal.');
//     }
// }
// // checkExample();



// const luckyNumber = 3;

// if (luckyNumber === 5 || luckyNumber == '3') {
//     console.log(`Hey your lucky number ${luckyNumber}`);
// } else {
//     console.log('Sorry, your number is not lucky to me.');
// }

// let a = 10;
// let b = 2;

// let result = a / b;
// let result = 0;
// result++;
// console.log(result);

// let hello = 'Hello';
// let there = ' there!';
// let sentence = hello += there;
// console.log(sentence);

// let a = '5.99';
// let b = 2;
// let testModulo = 10 % 2;
// console.log(testModulo);
// let testNan = isNaN('hello');
// console.log(testNan);

// let transformMe = parseFloat(a, 2);

// let result = transformMe = + b;
// console.log(result);
// console.log(`Before: ${a}, after: ${transformMe}`, typeof (a), typeof (transformMe));

// let valueNan = 'I am indeed NaN';
// let valueNan = 1;
// let testNan = isNaN(valueNan);

// testNan ? console.log('THIS IS TRUE') : console.log('THIS IS FALSE');

// if (testNan === true) {
// 	let result = 'Yup, this is true.';
// 	console.log('Yup, this is true.');
// 	H1.innerHTML = result;
// } else {
// 	let result = 'Nope, this is false.';
// 	console.log('Nope, this is false.');
// 	H1.innerHTML = result;

// }
// const H1 = document.getElementById('greeting');

// const askColor = prompt('Pick one of the following colors: red, blue,, or orange.');

// switch (askColor) {
// 	case 'red':
// 		H1.innerHTML = `You chose ${askColor}.. which reminds me of that song, Lady in Red... IS DANCING WITH ME...`;
// 		break;
// 	case 'blue':
// 		H1.innerHTML = `You chose ${askColor} Im blue da ba dee da ba doo`;
// 		break;
// 	case 'orange':
// 		H1.innerHTML = `You chose ${askColor} - only thing that works is Halloweentown`;
// 		break;
// 	default:
// 		H1.innerHTML = 'You did not follow the directions';
// }


const H1 = document.getElementById('greeting');

let userAge = prompt('Please provide age.');
if (userAge >= 18) {
	console.log('Welcome to the site');
} else {
	console.log('You Shall Not Pass!')
}
let overEighteen = prompt('Are you under 80?')
if (overEighteen >= `${userAge}`); {
	console.log('Do you like Prunes?');
} else {
	console.log('Do you like Star Wars?')
}
