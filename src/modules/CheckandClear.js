let Tasks = JSON.parse(localStorage.getItem('list')) || [];
function check(e) {
  if (e.target.classList.contains('check')) {
    e.target.nextElementSibling.classList.toggle('line');
  }
}

export { check };
const UpdateCheck = (event) => {
  const index = event.target.getAttribute('data-com');
  if (Tasks[index]) {
    Tasks[index].completed = event.target.checked;
    localStorage.setItem('list', JSON.stringify(Tasks));
  }
};
export { UpdateCheck };
const DeleteAll = () => {
  const Incomplete = Tasks.filter((task) => !task.completed);
  Tasks = Incomplete;
  localStorage.setItem('list', JSON.stringify(Tasks));
  window.location.reload();
};
export { DeleteAll };
