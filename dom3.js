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



