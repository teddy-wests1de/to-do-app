import * as model from './model.js'

const menu = document.querySelector('.menu');
const btnNewTask = document.querySelector('.add-new');
const btnNewCategory = document.querySelector('.new-category button')
const btnCloseForm = document.querySelector('.btn-close-form');
const newTaskModal = document.querySelector('.new-task-modal');
const sections = document.querySelectorAll('.section');
const forms = document.querySelectorAll('.form');
const newTaskForm = document.querySelector('.new-task-form');
const newItem = document.querySelector('.new-item');
const tasks = document.querySelector('.tasks');
const historyList = document.querySelector('.history-list');
const btnClearHistory = document.querySelector('.btn-clear-history');

const itemList = [
  {
    name: 'Work',
    date: '14 March 2024',
    time: '10:00',
    checked: false,
  },
  {
    name: 'Study',
    date: '14 March 2024',
    time: '19:00',
    checked: false,
  },
  {
    name: 'Running',
    date: '15 March 2024',
    time: '12:00',
    checked: true,
  }
];
const history = [];
const categories = [];

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

window.addEventListener('hashchange', function() {
  const id = this.window.location.hash;
  // console.log(id.slice(1));
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

tasks.addEventListener('click', function(e) {
  const checkBox = e.target.closest('.check-status');
  const itemName = e.target.parentElement.querySelector('.item-name').innerHTML;
  checkBox.checked ? checkBox.dataset.status = 'completed' : checkBox.dataset.status = 'new';

  const index = model.state.taskList.findIndex(item => item.name === itemName);
  console.log(model.state.taskList[index]);
  const removeItem = model.state.taskList.splice(index, 1);
  renderList(model.state.taskList, tasks);

  model.state.taskHistory.push(...removeItem);
  console.log(model.state.taskHistory);
  renderList(model.state.taskHistory, historyList);
  model.save();
  console.log(model.state.taskList);
})

// tasks.forEach(task => {
//   task.addEventListener('click', function(e) {
//     console.log(e.target);
//   })
// })

const addItem = function(name, date, time, checked=false) {
  const item = {
    name: name,
    date: date,
    time: time,
    checked: checked,
  }
  
  model.state.taskList.push(item);
  model.save();
}

newTaskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  addItem(newItem.value, '15 March 2024', '10:00');
  renderList(model.state.taskList, tasks);
})

const renderList = function(array, parent) {
  parent.innerHTML = '';
  array.map(item => {
    const html = `
       <li class="task-item">
          <input type="checkbox" value="${item.checked}" id="status" data-status="new" class="check-status">
          <span class="item-name">${item.name}</span>
          <span class="item-date">${item.date}</span>
          <span class="item-time">${item.time}</span>
       </li>
    `;
    parent.insertAdjacentHTML('beforeend', html);
  })
}
renderList(model.state.taskList, tasks);
renderList(model.state.taskHistory, historyList);