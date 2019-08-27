// For Loop
// const taskOne = prompt('Give me your first task to do?');
// const taskTwo = prompt('Give me your second task to do?');
// const taskThree = prompt('Give me the last task you need to do?');

// let arrayOfTasks = [taskOne, taskTwo, taskThree];
// let secondArrayOfTasks = [
//     [taskOne],
//     [taskTwo],
//     [taskThree],
// ];

// console.log(arrayOfTasks);
// console.log('second one: ', secondArrayOfTasks);

// const limit = 3;
// for (j = 0; j < limit; j++) {
//     secondArrayOfTasks[j].push(`this will take ${Math.floor(Math.random() * 15)}`);
//     console.log(secondArrayOfTasks[j]);
// }

// Anon
// let example = function () {
//     console.log('hello there');
// }

// Named
// function exampleName() {
//     console.log('hello there');
// }

// const turnValueUppercase = val => console.log(val.toUpperCase());
// const mulitplyValues = (arg1, arg2) => console.log(arg1 * arg2);
// turnValueUppercase('hello');
// mulitplyValues(2, 6);

// function turnValueUppercase(val) {
// console.log(val.toUpperCase());
// }

// Array of 3 names
// let names = [
//     'Head',
//     'shoulders',
//     'Knees',
//     'Toes',
//     'fingers',
// ];
// // create greeting in name value
// const greeting = name => `Good evening, ${name}`;

// // test result first:
// console.log(`The array of name ${names}`, `greeting function value: ${greeting('Example')}`);

// const limit = 3;
// // loop through names and add greeting function
// for (a = 0; a < names.length; a++) {
//     console.log(greeting(names[a]));
// }

// grab elements from HTML
const greeting = document.getElementById('greeting');
const groceryList = document.getElementById('groceryList');
const groceryItem = document.getElementById('groceryItem');
const getGroceryItem = document.getElementById('getGroceryItem');

let arrayOfGroceryItems = [];

greeting.innerHTML = 'Tonys\'s Grocery List';


// create function to add to list
const addGroceryItem = (arr, value) => arr.push(value);
console.log(addGroceryItem(arrayOfGroceryItems, 'Carrots'));
console.log(arrayOfGroceryItems);

function addGroceryItemAndDisplay(arr, value) {
	arr.push(value);
	// let result = arr.push(value);
	// for (a = 0; a < result.length; a++) {
	//     groceryItem.innerHTML(result[a]);
	// }
	// console.log(result);
}

// addGroceryItemAndDisplay(arrayOfGroceryItems, 'Cucumber');
function ejectGroceryItemToList(val) {
	for (grocery = 0; grocery < addGroceryItem.length; grocery++) {
		groceryItem.innerHTML = val;
	}
}

ejectGroceryItemToList('Testing');