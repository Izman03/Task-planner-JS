// script.js

const form = document.getElementById('new-task-form');
const input = document.getElementById('new-task-input');
const taskList = document.getElementById('tasks');

form.addEventListener('submit', createTask);

function createTask(e) {
  e.preventDefault();

  const taskText = input.value;
  if (taskText.trim() === '') {
    alert('Please enter a task.');
    return;
  }

  const task = document.createElement('li');
  task.classList.add('task');
  task.innerHTML = `
    <span>${taskText}</span>
    <div class="task-actions">
      <button class="edit-task">Edit</button>
      <button class="delete-task">Delete</button>
    </div>
  `;

  taskList.appendChild(task);
  input.value = '';

  const editButton = task.querySelector('.edit-task');
  const deleteButton = task.querySelector('.delete-task');

  editButton.addEventListener('click', editTask);
  deleteButton.addEventListener('click', deleteTask);
}

function editTask(e) {
  const task = e.target.closest('.task');
  const taskText = task.querySelector('span');
  const newText = prompt('Edit the task:', taskText.textContent);
  if (newText !== null && newText.trim() !== '') {
    taskText.textContent = newText;
  }
}

function deleteTask(e) {
  const task = e.target.closest('.task');
  task.remove();
}
