const addButton= document.getElementById('add-new-btn');
const buttonContainer= document.getElementById('btn-container');
const displayArea= document.getElementById('display-area');

let nextColor= ['red', 'purple', 'magenta', 'olive', 'cyan'];
let colorIndex = 0;

addButton.addEventListener('click', () =>{
    const newBtn= document.createElement('button');
    const color= nextColor[colorIndex % nextColor.length];

    newBtn.className= 'color-btn btn';
    newBtn.textContent= `${color}`;
    newBtn.dataset.color= color;

    buttonContainer.appendChild(newBtn);
    colorIndex++;
});

buttonContainer.addEventListener('click', (event) => {
    if(event.target.classList.contains('color-btn')){
        const color = event.target.dataset.color;
        displayArea.style.backgroundColor= color;
        displayArea.textContent= `Color is ${color}`;
    }
});
