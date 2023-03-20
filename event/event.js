// 4 ways to add event in html 

// 1. directly set on the HTML element 

// 2. add onclick function 
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
