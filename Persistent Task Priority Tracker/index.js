const taskInput= document.getElementById('task-input');
const prioritySelect= document.getElementById('priority-select');
const addBtn= document.getElementById('add-btn');
const taskList= document.getElementById('task-list');

let tasks= JSON.parse(localStorage.getItem('tasks'))  || [];

function renderTasks()
{
    taskList.innerHTML = '';
    tasks.forEach((tasks, index) => {
        const li = document.createElement('li');
        li.innerHTML= `<span>${tasks.name} (${tasks.priority})</span>`;
        taskList.appendChild(li);
    });
}
renderTasks();

addBtn.addEventListener('click', () =>
{
    const name= taskInput.value.trim();
    const priority = prioritySelect.value;

    if(name === '') return;

    const newTask= {name, priority};
    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasks();

    taskInput.value= '';
    prioritySelect.value= 'Medium';
});