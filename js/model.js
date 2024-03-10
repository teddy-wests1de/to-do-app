export const state = {
    taskList: [],
    taskHistory: [],
}

const saveTasks = function() {
    localStorage.setItem('tasks', JSON.stringify(state.taskList));
    localStorage.setItem('history', JSON.stringify(state.taskHistory));
}
const init = function() {
    const taskData = localStorage.getItem('tasks');
    if(taskData) state.taskList = JSON.parse(taskData);

    const historyData = localStorage.getItem('history');
    if(historyData) state.taskHistory = JSON.parse(historyData);
}

export const save = function() {
    localStorage.clear();
    saveTasks();
}

export const clearHistory = function() {
    localStorage.removeItem('history');
    init();
}

init();