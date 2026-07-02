// 1. Select key elements
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskCategory = document.querySelector("#task-category");
const taskList = document.querySelector("#task-list");
const message = document.querySelector("#message");
const filterCategory = document.querySelector("#filter-category");

// CORE DATA STATE
let tasks = []; // Array to hold tasks. Will be loaded from storage.
const STORAGE_KEY = "smart_tasks"; // Key for localStorage

//  LOAD AND INITIALIZE
document.addEventListener("DOMContentLoaded", () => { 
  /* TODO 1: Call the function to load tasks when the page first loads */
  loadTasks();
});

// Form Submission & Rendering
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const text = taskInput.value.trim();
  const category = taskCategory.value;
  if (text === "") {
    showMessage("Please enter a task!");
    return;
  }
  const newTask = { id: Date.now(), text: text, category: category, done: false, time: new Date().toLocaleTimeString() };
  tasks.push(newTask); 
  
  /* TODO 2: Call the function to save the updated tasks array to storage */
  saveTasksToStorage();
  
  addTaskToDOM(newTask);
  taskInput.value = "";
  showMessage("Task added successfully!");
});

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.className = "task";
  li.dataset.id = task.id; 
  li.innerHTML = `
    <span>
      <strong>[${task.category}]</strong> 
      ${task.text}
      <small style="color:#777;">(${task.time})</small>
    </span>
    <div>
      <button data-action="done">✅</button>
      <button data-action="delete">❌</button>
    </div>
  `;
  if (task.done) li.classList.add("done");
  taskList.appendChild(li); 
}

// Event Delegation & Array Helpers
function getTaskId(parentEl) {
    return parseInt(parentEl.dataset.id); 
}

function removeTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    
    /* TODO 3: Call the function to save the updated tasks array to storage */
    saveTasksToStorage();
}

function toggleTaskDone(id) {
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].done = !tasks[taskIndex].done;
    }
    
    /* TODO 4: Call the function to save the updated tasks array to storage */
    saveTasksToStorage();
}

taskList.addEventListener("click", function(event) { 
    const target = event.target;
    const parent = target.closest(".task");
    
    if (!parent || !target.dataset.action) return;
    const taskId = getTaskId(parent); 

    if (target.dataset.action === "delete") {
        parent.remove(); 
        removeTask(taskId);
        showMessage("Task deleted.");
    }

    if (target.dataset.action === "done") {
        parent.classList.toggle("done");
        toggleTaskDone(taskId);
    }
});

// P3 IMPLEMENT PERSISTENCE FUNCTIONS

function getTasksFromStorage() {
    // TODO 5: Implement logic to retrieve the string from localStorage
    const tasksString= localStorage.getItem(STORAGE_KEY);
    return tasksString ? JSON.parse(tasksString) : []; 
}

function saveTasksToStorage() {
    // TODO 6: Implement logic to use JSON.stringify() on the 'tasks' array
    const tasksJSON= JSON.stringify(tasks);
    localStorage.setItem(STORAGE_KEY, tasksJSON);
}

function loadTasks() {
    // TODO 7: Implement logic to call getTasksFromStorage()
    const loadedTasks=getTasksFromStorage();
    tasks = loadedTasks; // Update the global array
    
    // Render the loaded tasks to the DOM
    tasks.forEach(task => {
        addTaskToDOM(task);
    });
}

// HELPERS 
filterCategory.addEventListener("change", function() { 
  const selectedCategory = this.value;
  
  const taskElements = document.querySelectorAll(".task");

  taskElements.forEach(task => {
      // Extract the category text (e.g., [Work] -> Work)
      const categoryText = task.querySelector('strong').textContent.replace(/[\[\]]/g, '');

      // Determine if the task should be shown
      const match = selectedCategory === "All" || categoryText === selectedCategory;
      
      // Show ('flex') or hide ('none') the element
      task.style.display = match ? "flex" : "none";
  });

});

function showMessage(text) {
  message.textContent = text;
  setTimeout(() => message.textContent = "", 2000);
}