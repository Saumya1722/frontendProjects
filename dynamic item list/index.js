
const itemInput= document.getElementById('new-item-input');
const addItemBtn= document.getElementById('add-item-btn');
const itemList= document.getElementById('item-list');

function createNewItem(text){
   const li= document.createElement('li');
   li.className= 'item';
   li.innerHTML=`${text} <button class="remove-btn">Remove</button>`;
   return li;
}


addItemBtn.addEventListener('click', () =>
{
    const text= itemInput.value.trim();
    if(text === '')return;

    const newElement= createNewItem(text);
    itemList.appendChild(newElement);
    itemInput.value= '';

});

itemList.addEventListener('click', (event) =>
{
    if(event.target.classList.contains('remove-btn')){
        event.target.parentNode.remove();
    }
});