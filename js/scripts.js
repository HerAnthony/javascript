// For Loop
const taskOne = prompt('Give me your first task to do?');
const taskTwo = prompt('Give me your second task to do?');
const taskThree = prompt('Give me the last task you need to do?');

let arrayOfTasks = [taskOne, taskTwo, taskThree];
let secondArrayOfTasks = [
    [taskOne],
    [taskTwo],
    [taskThree],
];

console.log(arrayOfTasks);
console.log('second one: ', secondArrayOfTasks);

const limit = 3;
for (j = 0; j < limit; j++) {
    secondArrayOfTasks[j].push(`this will take ${Math.floor(Math.random() * 15)}`);
    console.log(secondArrayOfTasks[j]);
}