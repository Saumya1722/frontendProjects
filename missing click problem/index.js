const donebuttons= document.querySelectorAll('.done-btn');
const addTaskBtn= document.getElementById('add-task');
const taskList = document.getElementById('task-list');

donebuttons.forEach(btn => {
    btn.addEventListener('click', () =>
    {
        alert('Task Completed');
    });
});

addTaskBtn.addEventListener('click', () => {
    const li= document.createElement('li');
    li.innerHTML= 'New Task <button class="done-btn">Done</button>';
    taskList.appendChild(li);
});