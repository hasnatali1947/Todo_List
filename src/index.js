import './index.css';

const Lists = [
  {
    description: 'wash the dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'go to masjid',
    completed: true,
    index: 1,
  },
  {
    description: 'Clear all completed',
    completed: true,
    index: 2,
  },
];

const todoFullList = document.getElementById('todoFullList');

const Display = () => {
  Lists.forEach((e) => {
    const li = document.createElement('li');
    li.innerHTML = `<div class="inputDescripation"> <input type="checkbox" /> <span class="descriptions" >${e.description}</span> </div> <div class="bin">  </div>`;
    li.setAttribute('key', e.index);
    if (e.completed) {
      li.classList.add('li');
    }
    todoFullList.appendChild(li);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  Display();
});
