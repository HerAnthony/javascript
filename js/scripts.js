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

console.log(favoriteMovies[0][0])