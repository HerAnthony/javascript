// const greeting = '1';

// if (greeting === "hi") {
// 	console.log('Yes, this matches to HI');
// } else if (greeting == "hello") {
// 	console.log('Yes, this matched HELLO');
// } else if (greeting == 1) {
// 	console.log('Yea this matches an INTEGER OF ONE');
// }
// else {
// 	Console.LOG('NONE OF THEM MATCHED.');
// }


// const case_ = prompt('Choose one of the following colors: red, grey, green').toLowerCase();
// switch (case_) {
// 	case 'red':
// 	case 'Red':
// 		alert(`You chose ${case_}`);
// 		break;
// 	case 'gray':
// 	case 'Gray':
// 		alert(`You chose ${case_}`);
// 		break;
// 	case 'green':
// 	case 'Green':
// 		alert(`You chose ${case_}`);
// 		break;
// 	default:
// 		alert('Sorry, you did not follow directions.');
// }


// function changeToLowercase(value) {
// 	return value.toLowerCase();
// }

// console.log(changeToLowercase('Hi'));


// function getWeatherReport(day, time, temperature) {
// 	const correctDayFormat = day.toUpperCase();
// 	const correctTimeFormat = time.toLowerCase();
// 	const correctTemperatureFormat = parseInt(temperature);
// 	const summary = `Today is ${correctDayFormat} and the time is ${correctTimeFormat}. The temperature is a rocking ${correctTemperatureFormat}`;
// }

// console.log(getWeatherReport('wednesday', '6:00PM', '90'));

// let myArrayOfRandomInfo = [
// 	'RoseMarys Baby',
// 	83,
// 	'How can you not like Star Wars',
// 	'2001'
// ];

// console.log(myArrayOfRandomInfo.length);
// console.log(myArrayOfRandomInfo[3]);
// console.log(Array.isArray(myArrayOfRandomInfo));
// myArrayOfRandomInfo.push('I like games');
// console.log(myArrayOfRandomInfo.length);
// console.log(myArrayOfRandomInfo);
// myArrayOfRandomInfo.unshift('I am now #1');
// console.log(myArrayOfRandomInfo[0]);
// myArrayOfRandomInfo.pop();
// console.log(myArrayOfRandomInfo);
// myArrayOfRandomInfo.shift();
// console.log(myArrayOfRandomInfo);
// myArrayOfRandomInfo.splice(1, 1, '1983');
// first peram:position | second peram:1=replace and 0=add prior | third peram: content
// console.log(myArrayOfRandomInfo);
// let newArrayOfInfo = myArrayOfRandomInfo.slice(1);
// because slice creates a new array you must call it under a new var to express it
// console.log(newArrayOfInfo);

// let findPositionToRemove = newArrayOfInfo.indexOf('2001');
// console.log(newArrayOfInfo.indexOf(false));
// let refreshed = newArrayOfInfo.splice(findPositionToRemove, 1);
// console.log(refreshed);

let favMovieOne = [
	'Donny Darko',
	'Jake Gyllenhaal',
];
let favMovieTwo = [
	'Young Frankenstein',
	'Gene Wilder',
];
let favMovieThree = [
	'Bill & Teds Excellent Adventure',
	'Keanu Reeves',
];
let favMovieFour = [
	'Blazing Saddles',
	'Gene Wilder',
];
let favMovieFive = [
	'Toys',
	'Robin Williams',
];
let favoriteMovies = [
	favMovieOne,
	favMovieTwo,
	favMovieThree,
	favMovieFour,
	favMovieFive,
];
console.log(favoriteMovies.length);

console.log(favoriteMovies);


// let x = 0;
// while (x < 10) {
// 	console.log(x);
// 	x++;
// }
// "while loop" running continuously

// for (let i = 0; i > 20; i--) {
// 	console.log(i);
// }
// for (let i = 0; i < 20; i++) {
// 	console.log(i);
// }
// for (let i = 0; i < 10; i++) {
// 	if (i == 4) {
// 		contenue;
// 	}
// console.log(i)
// }
// "for loop"

// let i = 0;
// do {
// 	console.log(i);
// 	i++;
// } while (i < 10);

// let arr3 = [1, 2, 3, 4, 5];
// arr3.forEach(function (x) {
// 	console.log('I am ' + x);
// })

// let myString = 'Hi, my name is Ant';
// for (i of myString) {
// 	console.log(i);
// }

let people = {
	firstName: 'Ant',
	lastName: 'Hernandez',
	age: 36
};
// {
// 	firstName: 'Jay',
// 	lastName: 'Garza',
// 	age: 29
// }
for (person in people) {
	console.log(people[person]);
}
// for multiple it is "of" instead of "in"
// for(person of peopole{)
// console.log(person.first);
// }