import { Add, Remove } from './modules/funtions.js';
import './style.css';
import { check, updateCheck, deleteAll } from './modules/CheckandClear.js';

const container = document.getElementById('addtodo');
let inputValue = '';
const tasks = JSON.parse(localStorage.getItem('list')) || [];

const displayTasks = () => {
  tasks.forEach((task, index) => {
    container.innerHTML += `
      <li class="li-list">
        <input class="li-list check" type="checkbox" data-com="${index}">
        <p contenteditable="true" class="paragraph" data-para="${index}">${task.description}</p>
        <i class="fa-regular fa-trash-can" data-index="${index}"></i>
        <i class="li-list fa-solid fa-ellipsis-vertical"></i>
      </li>`;
  });
};

const input = document.querySelector('.input');

input.addEventListener('input', (e) => {
  inputValue = e.target.value;
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const create = {
      description: input.value.trim(),
      completed: false,
      index: tasks.length + 1,
    };
    if (create.description !== '') {
      Add(create);
      window.location.reload();
    }
  }
});

window.addEventListener('load', () => {
  input.value = inputValue;
});

const listItemsContainer = document.querySelector('#addtodo');
const liLists = document.getElementsByClassName('li-list');
listItemsContainer.addEventListener('click', (e) => {
  for (let i = 0; i < liLists.length; i += 1) {
    liLists[i].classList.remove('active');
  }
  if (e.target.classList.contains('li-list')) {
    e.target.classList.toggle('active');
  } else if (e.target.classList.contains('paragraph')) {
    e.target.parentElement.classList.toggle('active');
  }
});

listItemsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    const index = e.target.getAttribute('data-index');
    Remove(index);
    window.location.reload();
  }
});

const updateTasks = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('list', JSON.stringify(tasks));
  displayTasks();
};

updateTasks();

listItemsContainer.addEventListener('keypress', (e) => {
  if (e.target.classList.contains('paragraph')) {
    if (e.key === 'Enter') {
      if (e.target.textContent === '') {
        return false;
      }
      const num = e.target.getAttribute('data-para');
      tasks[num].description = e.target.textContent;
    }
  }
  localStorage.setItem('list', JSON.stringify(tasks));

  return true; // Add this line to return at the end of the arrow function
});

listItemsContainer.addEventListener('click', (event) => {
  check(event);
});

document.addEventListener('change', (event) => {
  updateCheck(event);
});

const deleteBtn = document.getElementById('ClearAll');
deleteBtn.addEventListener('click', deleteAll);
