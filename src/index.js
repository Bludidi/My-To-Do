import './style.css';

const todo = [
  { description: 'Doctor appointment', isCompleted: false, index: 0 },
  { description: 'Fetch kids from school', isCompleted: false, index: 1 },
  { description: 'Do weekly grocery shopping', isCompleted: false, index: 2 },
];

function todoList() {
  let todoListContent = '';
  todo.forEach((item) => {
    todoListContent += `<li class="task"><input class="task-check" type="checkbox"><span class="list">${item.description}</span></li>`;
  });
  document.querySelector('.todo-list').innerHTML = todoListContent;
}
todoList();