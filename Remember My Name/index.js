const input= document.getElementById('name-input');
const saveBtn = document.getElementById('save-btn');
const message= document.getElementById('greeting');

const savedName= localStorage.getItem('username');

if(savedName)
{
    message.textContent= `Welcome back, ${savedName}!`;
    input.style.display='none';
    saveBtn.style.display='none';
}

saveBtn.addEventListener('click', () => {
    const name= input.value.trim();

    if(name !== ''){
        localStorage.setItem('username' , name);
        message.textContent = `Welcome back, ${name}!`;
        input.style.display='none';
        saveBtn.style.display='none';
    }
    else
    {
        alert('Please enter your name before saving');
    }
});