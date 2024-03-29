import * as model from './model.js';
import taskView from './Views/listTaskView.js';
import addTaskView from './Views/addTaskView.js';
import listCategoryView from './Views/listCategoryView.js';
import listTaskView from './Views/listTaskView.js';
import listHistoryView from './Views/listHistoryView.js';
import addCategoryView from './Views/addCategoryView.js';

const menu = document.querySelector('.menu');
const btnCloseForm = document.querySelectorAll('.btn-close-form');
const newTaskModal = document.querySelector('.new-task-modal');
const sections = document.querySelectorAll('.section');
const forms = document.querySelectorAll('.form');


if(module.hot) {
  module.hot.accept();
}

btnCloseForm.forEach(btn => btn.addEventListener('click', function() {
    newTaskModal.classList.add('hidden');
    forms[0].classList.add('hidden');
    forms[1].classList.add('hidden');
}))

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



const openNewTaskForm = function() {
  newTaskModal.classList.remove('hidden');
  forms[0].classList.remove('hidden');
}

// ----- Main screen for to do task items ------

// List all the new to do items
const listTasks = function(task) {
  listTaskView.render(model.state.taskList);
  // console.log(task);
}

// Add a new to do item
const addTask = function() {
  const name = addTaskView.getItem();
  const category = addTaskView.getCategory();
  if(!name) return; //If item doesn't exist.
  const date = new Date().toString().slice(0,15).trim();
  const time = new Date().toString().slice(16,21).trim();
  const id = +(new Date().getTime());
  model.addItem(name, date, time,category, id);
  addTaskView.clearInput();

  listTasks();
}

// Check a to do item
const checkTask = function(itemName) {
  // Find index of clicked checkbox from e.target
  // const index = model.state.taskList.findIndex(item => item.name === itemName);

  // Set Checked on clicked item
  // model.state.taskList[index].checked = 'checked';

  // // Use index to remove from tasks list.
  // const removeItem = model.state.taskList.splice(index, 1);
  // // Add removed Item to history list
  // model.state.taskHistory.push(...removeItem);
  
  // renderList(model.state.taskHistory, historyList);
  // taskView.renderList(model.state.taskList, tasks);
  // model.save();
  // console.log(model.state.taskList);
  console.log('Checked...!');
}
// Edit a to do item
const editTask = function(task) {

}
// Remove a to do item
 
const removeTask = function(item) {
  // console.log('Close Button Clicked...!!!');
  // console.log(item.slice(18,24).trim())
  const index = model.state.taskList.findIndex(i => +i.id === +item);
  console.log(index);
  const removedItem = model.state.taskList.splice(index,1);
  console.log(removedItem);
  model.state.taskHistory.push(...removedItem);
  model.save();
  listTasks();
  listHistory();
  console.log(model.state.taskHistory);
}
// Remove all to do items
const removeAllTasks = function(tasks) {
  model.clearTasks();
  listTaskView.render(model.state.taskList);
  console.log(model.state.taskList);
  console.log('Tasks...!')
}

// **----------------Task List  END------------------*


// *----- History screen for to do task items -------*

// List all tasks in history
const listHistory = function() {
  listHistoryView.render(model.state.taskHistory);
}

// Clear History (Remove all to do items in history)
const clearHistory = function() {
  model.clearHistory();
  listHistoryView.render(model.state.taskHistory);
  console.log(model.state.taskHistory);
}

// **-----------------History  END--------------------*


// *----- Categories screen for to do task items -----*

// List all Categories
const listCategories = function(categories) {
  listCategoryView.render(model.state.categories);

  console.log(model.state.categories, 'Categories');
}

// Add a new category
const addCategory = function() {
  listCategoryView.displayModal('new-task-modal')  
  listCategoryView.displayModal('new-category-form');
}

const newCategory = function() {
  const name = addCategoryView.getGategoryName();
  const description = addCategoryView.getDescription();
  const id = +(new Date().getTime());

  model.addCategory(id, name, description);
  listCategories();
  // addCategoryView.clearInput();
  console.log(model.state.categories);
}
// Remove a category
const removeCategory = function(category) {

}


// **-----------------Categories END-------------------*

const init = function() {
  listTasks();
  listHistory();
  listCategories();

  listTaskView.addHandlerNewTask(openNewTaskForm);
  listTaskView.addHandlerRemoveItem(removeTask);
  listTaskView.addHandlerRemoveAll(removeAllTasks);
  addTaskView.addHandlerNewTask(addTask);
  addTaskView.renderCategories(model.state.categories);
  addCategoryView.addHandlerNewCategory(newCategory);
  listHistoryView.addHandlerClearHistory(clearHistory);
  listCategoryView.addHandlerNewCategory(addCategory);
}
init();