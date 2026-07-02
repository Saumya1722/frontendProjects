const messageList = document.querySelector('#message-list');
const msg1=document.querySelector('#msg1');
const msg2= document.querySelector('#msg2');

const insertBtn= document.querySelector('#insert-btn');
const replaceBtn= document.querySelector('#replace-btn');

function createUrgentMessage(){
    const li= document.createElement('li');
    li.innerHTML = 'URGENT- Secuity alert needs immediate review!';
    li.classList.add('message', 'status-urgent');
    return li;
}

function createSentMessage()
{
    const li= document.createElement('li');
    li.innerHTML ='<span>To: Bob</span>- Project Proposal SENT';
    li.classList.add('message', 'status-sent');
    li.id= 'msg2';
    return li;
}

insertBtn.addEventListener('click', () => {
    const urgentMsg = createUrgentMessage();
    messageList.insertBefore(urgentMsg, msg1);
    insertBtn.disabled = true;
    insertBtn.textContent = 'URGENT Message queued!';
});

replaceBtn.addEventListener('click', () =>{
    const sentMsg= createSentMessage();
    messageList.replaceChild(sentMsg, msg2);
    replaceBtn.disabled= true;
    replaceBtn.textContent= 'Message Sent!';
});