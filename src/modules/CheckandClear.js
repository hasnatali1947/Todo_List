let tasks = JSON.parse(localStorage.getItem('list')) || [];

function check(e) {
  if (e.target.classList.contains('check')) {
    e.target.nextElementSibling.classList.toggle('line');
  }
}

function updateCheck(event) {
  const index = event.target.getAttribute('data-com');
  if (tasks[index]) {
    tasks[index].completed = event.target.checked;
    localStorage.setItem('list', JSON.stringify(tasks));
  }
}

function deleteAll() {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  tasks = incompleteTasks;
  localStorage.setItem('list', JSON.stringify(tasks));
  window.location.reload();
}

export { check, updateCheck, deleteAll };
