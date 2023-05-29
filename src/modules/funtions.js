const tasks = JSON.parse(localStorage.getItem('list')) || [];
const input = document.querySelector('.input');

function Add(obj) {
  if (!obj) {
    const create = {
      description: input?.value || '',
      completed: false,
      index: tasks.length + 1,
    };
    if (create.description !== '') {
      tasks.push(create);
    }
  } else {
    tasks.push(obj);
  }

  localStorage.setItem('list', JSON.stringify(tasks));
  return tasks;
}

function Remove(index) {
  tasks.splice(index, 1);
  localStorage.setItem('list', JSON.stringify(tasks));
  return tasks;
}

export { Add, Remove };
