// In your JavaScript file
const Tasks = JSON.parse(
  typeof localStorage !== 'undefined' ? localStorage.getItem('list') : null,
) || [];

// In your JavaScript file
const input = typeof document !== 'undefined' ? document.querySelector('.inp') : null;

const Add = (obj) => {
  if (!obj) {
    const create = {
      description: input ? input.value : '',
      completed: false,
      index: Tasks.length + 1,
    };
    if (create.description !== '') {
      Tasks.push(create);
    }
  } else {
    Tasks.push(obj);
  }
  localStorage.setItem('list', JSON.stringify(Tasks));
  return Tasks;
};
export { Add };

const Remove = (index) => {
  Tasks.splice(index, 1);
  localStorage.setItem('list', JSON.stringify(Tasks));
  return Tasks;
};
export { Remove };
