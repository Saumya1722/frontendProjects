const display= document.querySelector('#color-display');
const buttons= document.querySelectorAll('#color-options button');

buttons.forEach(button =>{
    button.addEventListener('click', (event) =>
    {
        const clickedButton= event.target;

        // The .dataset property reads custom data-* attributes as an object where each key matches the part after data-.
        //Hyphenated names (like data-user-id) are automatically converted to camelCase (userId), so you can access them as btn.dataset.userId.


        const colorValue= clickedButton.dataset.color;

        display.style.backgroundColor=colorValue;

        display.textContent= `Color set to : ${colorValue}`;
    });
});