const saveLocal = (list) => {
  window.localStorage.setItem('localTasks', JSON.stringify(list));
};

const status = (elem, list) => {
  list.forEach((task) => {
    if (task === elem) {
      task.isCompleted = !task.isCompleted;
    }
  });
  saveLocal(list);
};

const add = (list) => {
  list.push({ description: document.querySelector('#newTask').value, isCompleted: false, index: list.length + 1 });
  document.querySelector('#newTask').value = '';
  saveLocal(list);
};

const updateIndex = (list) => {
  let i = 1;
  list.forEach((elem) => {
    elem.index = i;
    i += 1;
  });
};

const removeDone = (list) => {
  list = list.filter((elem) => elem.isCompleted === false);
  updateIndex(list);
  saveLocal(list);
};

exports.saveLocal = saveLocal;
exports.status = status;
exports.add = add;
exports.updateIndex = updateIndex;
exports.removeDone = removeDone;