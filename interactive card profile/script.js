const card= document.querySelector('.card');
const name= document.querySelector('.name');
const bio =document.querySelector('.bio');
const theme= document.querySelector('.theme');


name.textContent="Sophia Rivera";
bio.textContent="Creative Designer & Frontend Learner";
theme.innerHTML="Fun Mode Activated";

card.style.backgroundColor='#fff7fb';
card.style.border='2px solid black';
card.style.transform='scale(1.06)';

card.classList.toggle("fun-mode");