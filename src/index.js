import { parseInt } from 'lodash';
import './index.css';

const todoFullList = document.getElementById('todoFullList');
const input = document.getElementById('input-type');
const inputEnter = document.querySelector('.enterSng');

let tasks = [];

inputEnter.addEventListener('click', (() => {
  if (input.value === '') {
    alert('please type');
  } else {
    const newtask = {
      description: input.value,
      completed: false,
      index: tasks.length,
    };
    tasks.push(newtask);
    todoFullList.innerHTML = '';
    tasks.forEach((e, index) => {
      todoFullList.innerHTML += `
          <div>
            <li class="todo-child" id=${index}>
              <div>
              <input class="checkbox" type="checkbox" ${(e.completed) ? 'checked' : ''}>
               <span> ${e.description} </span>
              </div>
              <div class=bin></div>
            </li>
          </div>
        `;
    });
    input.value = '';
    localStorage.setItem('todo-list', JSON.stringify(tasks));
  }
}));

window.addEventListener('load', () => {
  const getItem = JSON.parse(localStorage.getItem('todo-list'));
  if (getItem) {
    todoFullList.innerHTML = getItem.map((e, index) => `
        <div>
          <li class="todo-child" id=${index}>
            <div>
            <input class="checkbox" type="checkbox" ${(e.completed) ? 'checked' : ''}>
            <span> ${e.description} </span>
            </div>
            <div class=bin></div>
          </li>
        </div>
      `).join('');
    tasks = getItem;

    document.querySelectorAll('.checkbox').forEach((checkbox, index) => {
      checkbox.addEventListener('click', function () {
        tasks[index].completed = this.checked;
        localStorage.setItem('todo-list', JSON.stringify(tasks));
      });
    });
  }
});

todoFullList.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'bin') {
    e.target.parentElement.remove();
    const newArray = tasks
      .filter((element, index) => index !== parseInt(e.target.parentElement.id, 10))
      .map((element, index) => {
        element.index = index;
        return element;
      });
    const li = document.querySelectorAll('.todo-child');
    for (let i = 0; i < newArray.length; i += 1) {
      newArray[i].index = i;
      li[i].id = i;
    }
    tasks = newArray;
    localStorage.setItem('todo-list', JSON.stringify(newArray));
  }
});
