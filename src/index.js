import './style.css';
import Task from './modules/tasks';

import { toggle, clearAll } from './modules/list';

const todoItemsList = document.querySelector('#list_navv');
const clearAllBtn = document.querySelector('#clearAllBTN');
const task = new Task();
task.addTask();
task.render();
todoItemsList.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'), task);
    task.render();
  }
});
clearAllBtn.addEventListener('click', () => {
  clearAll(task);
  task.render();
});
