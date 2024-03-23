export const state = {
    taskList: [],
    taskHistory: [],
    categories: [
        {
            id: 1,
            name: 'Work',
            description: 'Keeping track of all work related tasks at my job',
            color: 'red',
        },
        {
            id: 2,
            name: 'Studies',
            description: 'Keeping track of all work related tasks at my job',
            color: 'green',
        },
        {
            id: 3,
            name: 'Errands',
            description: 'Keeping track of all work related tasks at my job',
            color: 'blue',
        },
        {
            id: 1,
            name: 'Hobbies',
            description: 'Keeping track of all work related tasks at my job',
            color: 'orange',
        },
    ],
}
export const addItem = function(name, date, time, category, id, checked='') {
    const item = {
      name: name,
      date: date,
      time: time,
      category: category,
      id: id,
      checked,
    }
    
    state.taskList.push(item);
    saveTasks();
}

export const addCategory = function(id, name, description) {
    const category = {
        id: id,
        name: name,
        description: description,
    }
    state.categories.push(category);
    saveTasks();
}

const saveTasks = function() {
    localStorage.setItem('tasks', JSON.stringify(state.taskList));
    localStorage.setItem('history', JSON.stringify(state.taskHistory));
    localStorage.setItem('categories', JSON.stringify(state.categories));
}
const init = function() {
    const taskData = localStorage.getItem('tasks');
    if(taskData) state.taskList = JSON.parse(taskData);

    const historyData = localStorage.getItem('history');
    if(historyData) state.taskHistory = JSON.parse(historyData);

    const categoryData = localStorage.getItem('categories');
    if(categoryData) state.categories = JSON.parse(categoryData);
}

export const save = function() {
    localStorage.clear();
    saveTasks();
}

/* --- Temporary commented out --- */
export const clearHistory = function() {
    localStorage.removeItem('history');
    state.taskHistory = [];
    save();
    init();
}

export const clearTasks = function() {
    localStorage.removeItem('tasks');
    state.taskList = [];
    // save();
    init();
}

init();