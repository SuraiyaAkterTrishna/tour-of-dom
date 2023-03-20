// food section create dynamically 
const main = document.getElementById('main-container');

const newSection = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'My Food Gallery';
newSection.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Beriany';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Sandwitch';
ul.appendChild(li3);

newSection.appendChild(ul);
main.appendChild(newSection);

// dress section create dynamically 
let section = document.createElement('section');
section.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Pant</li>
    <li>Panjabi</li>
</ul>
`;
main.appendChild(section);

let allSection = document.querySelectorAll('section');
for (const section of allSection) {
    section.style.backgroundColor = 'lavender';
    section.style.margin = '10px 40px';
    section.style.padding = '20px';
}
let dom = document.getElementById('dom');
dom.classList.add('center');
dom.classList.add('bold');
dom.classList.remove('center');

const places = document.getElementById('place-ul');
const li = document.createElement('li');
li.innerText = 'PaharToli';
places.appendChild(li);



