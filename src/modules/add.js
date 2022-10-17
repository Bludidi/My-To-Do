import { saveLocal } from './status.js';

const add = (list) => {
  list.push({ description: document.querySelector('#newTask').value, isCompleted: false, index: list.length + 1 });
  document.querySelector('#newTask').value = '';
  saveLocal(list);
};

module.exports = add;