let question;
function myFunk() {
	question = prompt('Tell me your name.'); console.log('Your name is ' + question);
}
console.log('I love my JS class');
alert('Yo, welcome!')

function myLife() {
	question = prompt('Computer Serial Number'); console.log('ComputerSerial# ' + question);
}
function myIssue() {
	question = prompt('Computer Issue'); console.log('ComputerIssue# ' + question);
}

function grabElementAndSpitOutValue() {
	//get element from index
	const MAIN_DIV = document.getElementById('mainDiv');
	//write out in html
	MAIN_DIV.innerHTML = 'Hey, I am here.';
	//execute
	console.log('This hit.');
}