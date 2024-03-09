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
const itemList = [
  {
    name: 'Work',
    checked: true,
    date: '14 March 2024',
    time: '10:00',
  },
  {
    name: 'Study',
    checked: false,
    date: '14 March 2024',
    time: '19:00',
  },
  {
    name: 'Running',
    checked: true,
    date: '15 March 2024',
    time: '12:00',
  }
];
const history = [];
const categories = [];

btnNewTask.addEventListener('click', function() {
  newTaskModal.classList.remove('hidden');

})

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

const addItem = function(name, date, time, checked=false) {
  const item = {
    name: name,
    checked: checked,
    date: date,
    time: time,
  }
  
  itemList.push(item);
}

newTaskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  addItem(newItem.value, '15 March 2024', '10:00');
  renderList(itemList);
})

const renderList = function(array) {
  tasks.innerHTML = '';
  array.map(item => {
    const html = `
       <li class="task-item">
           <span class="status">ON</span>
           <span class="status">${item.name}</span>
           <span class="status">${item.date}</span>
         <span class="status">${item.time}</span>
       </li>
    `;
    tasks.insertAdjacentHTML('beforeend', html);
  })
}
renderList(itemList);