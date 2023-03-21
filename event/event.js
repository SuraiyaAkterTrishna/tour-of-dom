// 5 ways to add event in html 

// 1. directly set on the HTML element 

// 2. !important add onclick function <button onclick="makeYellow()">Yellow</button>
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}
// 3. make red way
const redBg = document.getElementById('make-red');
redBg.onclick = makeRed;

function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// 4. another way 
const makePurple = document.getElementById('purple');
makePurple.onclick = function makePurpleBg(){
    document.body.style.backgroundColor = 'purple';
}

// 5. 
const pink = document.getElementById('pink');
pink.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// 5. another 
const green = document.getElementById('green');
green.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
});

// 5. final 
document.getElementById('golden').addEventListener('click', function makeGolden(){
    document.body.style.backgroundColor = 'goldenrod';
})
