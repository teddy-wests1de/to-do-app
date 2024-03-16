import * as model from './model.js';
import taskView from './Views/listTaskView.js';
import addTaskView from './Views/addTaskView.js';
import listCategoryView from './Views/listCategoryView.js';
import listTaskView from './Views/listTaskView.js';
import listHistoryView from './Views/listHistoryView.js';

const menu = document.querySelector('.menu');
const btnNewTask = document.querySelector('.add-new');
const btnNewCategory = document.querySelector('.new-category button')
const btnCloseForm = document.querySelector('.btn-close-form');
const newTaskModal = document.querySelector('.new-task-modal');
const sections = document.querySelectorAll('.section');
const forms = document.querySelectorAll('.form');

// const newItem = document.querySelector('.new-item');

// const historyList = document.querySelector('.history-list');
const btnClearHistory = document.querySelector('.btn-clear-history');
const categoryList = document.querySelector('.category-list');


if(module.hot) {
  module.hot.accept();
}

btnNewTask.addEventListener('click', function() {
  newTaskModal.classList.remove('hidden');

})
btnClearHistory.addEventListener('click', function() {
  model.clearHistory();
  renderList(model.state.taskHistory, historyList);
  console.log(model.state.taskHistory);
});

btnCloseForm.addEventListener('click', function() {
    newTaskModal.classList.add('hidden');
})


menu.addEventListener('click', function(e) {
  const clicked = e.target.closest('.nav-link');
  const id = e.target.getAttribute('href').slice(1);
  if(!clicked || !id) return;
  sections.forEach(s => {
    s.classList.add('hidden');
  })
  clicked.classList.add('.active');
  document.querySelector(`.${id}`).classList.remove('hidden');
  console.log(id);
})



const markComplete = function(itemName) {
  // Find index of clicked checkbox from e.target
  const index = model.state.taskList.findIndex(item => item.name === itemName);
  // Set Checked on clicked item
  model.state.taskList[index].checked = 'checked';
  
  // Use index to remove from tasks list.
  const removeItem = model.state.taskList.splice(index, 1);
  // Add removed Item to history list
  model.state.taskHistory.push(...removeItem);
  
  renderList(model.state.taskHistory, historyList);
  taskView.renderList(model.state.taskList, tasks);
  model.save();
  // console.log(model.state.taskList);
}

const newTask = function() {
  // Get input from textbox on Add new task form.
  const newItem = addTaskView.getItem();
  if(!newItem) return; //If item doesn't exist.

  model.addItem(newItem, '15 March 2024', '10:00');
  addTaskView.clearInput();
  console.log(model.state.taskList);
  listTaskView.render(model.state.taskList);
}

const manageTasks = function() {
  addTaskView.addTaskNewItem(newTask);

  listTaskView.render(model.state.taskList);

}

const manageCategories = function() {
  listCategoryView.render(model.state.categories);

  console.log(model.state.categories, 'Categories');
}

const manageHistory = function() {
  listHistoryView.render(model.state.taskHistory);
}
const removeAllTasks = function() {
  model.clearTasks();
  listTaskView.render(model.state.taskList);
  console.log(model.state.taskList);
  console.log('Tasks...!')
}
const init = function() {
  // taskView.render(model.state.taskList);
  manageTasks();
  manageCategories();
  manageHistory();
  
  console.log(model.state.taskList);
  listTaskView.addHandlerRemove(removeAllTasks);
}
init();