const container = document.createElement('main');
// container.className = 'container';
container.classList.add('container');
// container.classList.remove('container');
document.body.appendChild(container);
container.innerHTML = '<h1>Hello</h1>';
console.log(container);

function movieQuote() {
    alert('Mine Mine Mineeee!')
    // alert('Your killing me smalls!');
}

let timer;

function callQuote() {
    timer = setInterval(movieQuote, 3000);
}

function stopFromRunning() {
    clearInterval(timer, 10000);
}

const button = document.createElement('button');
button.setAttribute('onclick', 'callQuote()');
button.innerText = 'click For A Movie Quote!';
button.className = 'btn btn-primary btn-lg';
container.appendChild(button);

const stopButton = document.createElement('button');
stopButton.className = 'alert alert-danger border-danger border';
stopButton.setAttribute('onclick', 'stopFromRunning()');
stopButton.innerText = 'Stop';

button.addEventListener('click', () => {
    container.appendChild(stopButton);
});

// session storage
sessionStorage.setItem('TEMPORARY', 'Everyproblem is temporary');
sessionStorage.getItem('TEMPORARY');
localStorage.setItem('Death', 'Expect for death - Grace');
localStorage.getItem('DEATH');